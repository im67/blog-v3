---
title: WebRTC入门
summary: why在互联网应用中，我们看似可以非常简单的共享信息，传输数据，但是将实现移入到这些传输背后时，绝大多数的通信和信息传递方式都可以抽象成为客户端 - 服务端，而其中最广泛的实现就是面向用户的浏览器和支撑背后运作的服务器。当信息从一端流向另一端时，其中包含繁多的协议处理行为，在这种模式下，跨设备...
date: 2023-08-02
---
## why
在互联网应用中，我们看似可以非常简单的共享信息，传输数据，但是将实现移入到这些传输背后时，绝大多数的通信和信息传递方式都可以抽象成为**客户端 - 服务端**，而其中最广泛的实现就是面向用户的浏览器和支撑背后运作的服务器。当信息从一端流向另一端时，其中包含繁多的协议处理行为，在这种模式下，跨设备，多信息种类的传输通信显得相对麻烦。



WebRTC的诞生很大程度上就是为了解决这个问题，它的目标是建立一种通用方式和平台，可以很轻松的实现点对点的数据通信，从而实现视频通话，音频通话或者P2P文件分享等功能。



尽管可以说WebRTC可以直接建立端对端的链接，但实际过程中我们仍旧需要一个服务来完成必要的信息交换，原因在下文中会说明。



## 聊聊基础-协议
### ICE
WebRTC是基于一系列协议完成的，最直接的就是ICE，交互式链接创建，它允许从你的浏览器到对端的浏览器来建立连接，无需中间介质。但是这个过程往往不能直接建立，最大的原因就是现在大多数的终端都在一个局域网中，然后统一对外产生一个公网地址，这个协议就是"网络地址转换"协议，简称NAT，这和IPv4地址空间有限有关，这里不再详细叙述。



总之就是，大多数情况下没有办法直接通过一个公网地址建立端对端连接。



### STUN
STUN的诞生就是为了解决上述问题，STUN协议的目标是让终端能够确定它们在NAT后面的公共IP和端口，以便可以直接通信。完成这个功能的服务器叫做STUN服务器。STUN工作过程如下：

1. 设备向STUN服务器发送请求。
2. STUN服务器接收到请求后，从中取出设备的IP地址和端口，并将这些信息回复给设备。
3. 设备收到STUN的回复之后，就知道了它在NAT后面的公共IP地址和端口。
4. 设备之间就可以通过这些IP地址和端口直接进行点对点连接建立，从而绕过NAT。



STUN协议的本质就是为了解决NAT穿透，但是某些情况下STUN也无能为力，例如对称NAT协议。对称NAT协议会在每个连接中分配不同的公共IP地址和端口，STUN此时无法进行有效穿透，因此需要额外的解决方案。



### TURN
TURN协议就是为了解决上述的对称NAT协议的问题。它的原理如下：

1. 设备在启动时发现无法通过STUN穿透NAT，于是尝试使用TURN。
2. 设备向TURN服务器发送请求，请求TURN服务器充当中继（relay）的角色。
3. TURN服务器收到请求后，会在自身与设备之间建立一条虚拟的数据通道（relay channel）。
4. 设备之间可以通过TURN服务器进行数据传输，数据会经由TURN服务器进行转发。
5. 这样，即使设备之间无法直接穿透NAT，它们也可以通过TURN服务器进行通信。



这样就解决了NAT穿透的问题，但是它引入了一个中间服务器，使得端对端链接不那么"端对端"，并且引入中间服务器，势必会增加延迟和带宽消耗，所以ICE协议将STUN和TURN结合使用，首先尝试STUN，如果没有办法则降级至TURN。



## 开始构建
**提示：尽管WebRTC技术已经相对成熟，但各个浏览器之间的实现仍有差异，因此建议使用相关的适配包。本文旨在梳理流程，因此使用Chrome浏览器下的WebRTC进行构建。**

****

### 了解架构
在构建连接的期间，我们需要准备两个端设备，实际上这两个端设备是对等的，但是为了区分，我们将发起方称之为请求端，接受方称之为应答端。同时，为了交换请求端和应答端建立连接时所必需的信息，我们构建一个中间服务器，建立websocket，实现设备建立连接时的信息交换。



如何让链接双方能够统一信息链接？我们设计一个用来唯一标识一对链接的key值，需要建立链接的双方利用该key进行连接信息的交换。架构大致如下：

![](/yuque/0/2023/png/23007887/1691378079128-b1774792-6700-4c63-a1d3-b60238a05b29.png)



请求端和应答端为浏览器，页面中包含两个按钮，**connect**和**message**，前者点击时开始建立WebRTC链接，后者点击负责发送链接建立后的信息。代码如下：

```typescript
//========发送方========
/**
 * 初始化RTCPeerConnection实例
 * 传入iceServers参数, 就是我们上面提到的
 * STUN服务的地址
 */
const senderRtcConnection = new RTCPeerConnection({
  iceServers: [
    {
      urls: ['stun:stun.12voip.com:3478']
    }
  ]
});

// 绑定icecandidate事件
senderRtcConnection.addEventListener('icecandidate', (e) => {
  if (e.candidate) {
    //发送candidate, type设置为local, 表示为发送方的candidate
    socket.emit('rtc-exchange-icecandidate', {
      key: 123,
      type: "local",
      icecandidate: e.candidate
    });
  }
})

//为请求端connect按钮绑定事件
const connectClick = async () => {
  //创建offer
  const offer = await senderRtcConnection.createOffer();
  //将offer设置为本地描述
  await senderRtcConnection.setLocalDescription(offer);
  //远程服务通信注册, 并且发送offer
  socket.emit('rtc-register', { offer, key: "123" })
}


// 监听获取应答端的answer
socket.on('get-answer', async (e) => {
  //将answer设置为远程描述
  await rtcConnection.setRemoteDescription(e.answer);
  //将应答端的candidate依次添加
  candidates.map(c => rtcConnection.addIceCandidate(c));
})


//========接收方========
/**
 * 初始化RTCPeerConnection实例
 * 传入iceServers参数, 就是我们上面提到的
 * STUN服务的地址
 */
const receiverRtcConnection = new RTCPeerConnection({
  iceServers: [
    {
      urls: ['stun:stun.12voip.com:3478']
    }
  ]
});

//绑定icecandidate事件
receiverRtcConnection.addEventListener('icecandidate', (e) => {
  if (e.candidate) {
    //发送candidate, type设置为local, 表示为发送方的candidate
    socket?.emit('rtc-exchange-icecandidate', {
      key: 123,
      type: "remote",
      icecandidate: e.candidate
    });
  }
})

/**
 * 为应答端connect按钮绑定事件
 * 建立socket链接之后, 进行注册
 * STUN服务的地址
 */
const connectClick = () => {
  const socket = io('http://localhost:3000', {
    path: '/socket'
  });
  socket.emit('rtc-register', { key: 123 })
}

// socket上绑定事件, 该事件在应答端连接到中转服务时触发
// 触发之后获得发送端的offer
// 请注意这里为伪代码, 仅提供思路, 该事件应在websocket实例
// 生成之后就绑定
socket.on('get-offer', async (e) => {
  // 设置应答端的offer为远程描述
  await rtcConnection.setRemoteDescription(e.offer);
  // 生成answer并设置为本地描述
  const answer = await rtcConnection.createAnswer();
  await rtcConnection.setLocalDescription(answer);
  // 设置完描述后调用addIceCandidate将请求端的candidate依次添加
  candidates.map(c => rtcConnection.addIceCandidate(c));
  // 返回生成的answer
  socket.emit('rtc-answer', { key: 123, answer });
});
```

通过上述的代码流程，连接基本就可以建立了，当然上述的描述仅包含流程中的关键部分，用以代码化表示主流程，其中省略了部分细节，例如candidate的数据交互，以及异常事件的监听与处理，读者需要根据自身业务情况进行添加，还省略了中转服务websocket的相关逻辑，请按照自己的需求进行处理。



## 数据传输
完成连接建立之后，我们就可以通过连接进行数据传输了，其中包含任意形式的数据内容传输。笔者给出一个最简单的场景：文本信息传输。

```typescript
// ======请求方======
// 创建dataChannel
const dataChannel = senderRtcConnection.createDataChannel("channel");

// 可以监听dataChannel事件
// open事件将在链接建立后, 通信就绪时触发
dataChannel.addEventListener('open', () => {
  console.log("datachannel open");
});

// 通过dataChannel.send发送文字消息
const sendClick = () => {
  dataChannel.send('hello world');
}


// ======应答方======
receiverRtcConnection.ondatachannel = (e) => {
  e.channel.onmessage = (msg) => {
    console.log(msg); // console 'hello world'
  };
}


```

另外，除却文本信息传输外，我们可能需要更为丰富的信息传输内容，例如视频传输，特别是通过摄像头进行的视频录制与传输，以达到视频通话的目的，代码流程可以如下所示：

```tsx
// ======请求方======
// 获取本机的录像权限
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then(function (localStream) {
    // 流数据通过localStream传输到应答端
    localStream.getTracks()
      .forEach(track => senderRtcConnection.addTrack(track, localStream))
  })
  .catch(handleGetUserMediaError);
}
}

// ======应答方======
senderRtcConnection.addEventListener('track', (e) => {
  document.getElementById("your video element id").srcObject = event.streams[0];
})

```

这样就完成了视频数据的传输和展示。



实际上，建立双方的连接之后，基于连接上的任意功能构建都会变得简单，可以进行音频，视频的传输，屏幕内容的共享，文件的发送等。



## 最后
本文是WebRTC入门的总结，旨在为WebRTC的理解和基本使用进行说明。实际上WebRTC相关技术的发展也有相当长一段时间了，用"新技术"来表达它已经变得不那么准确。WebRTC只是一种技术手段，而利用这样的技术手段，可以解决和实现哪些问题，才是更值得思考的部分吧。

