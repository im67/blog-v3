---
title: 三言两语聊Git
summary: git的源代码的自述文件中这样介绍git这个名字：The name "git" was given by Linus Torvalds when he wrote the very first version. He described the tool as "the stupid cont...
date: 2023-03-24
---
git的源代码的自述文件中这样介绍git这个名字：

> <font style="color:rgb(32, 33, 34);">The name "git" was given by Linus Torvalds when he wrote the very first version. He described the tool as "the stupid content tracker" and the name as (depending on your way):</font>
>
> + <font style="color:rgb(32, 33, 34);">random three-letter combination that is pronounceable, and not actually used by any common UNIX command. The fact that it is a mispronunciation of "get" may or may not be relevant.</font>
> + <font style="color:rgb(32, 33, 34);">"global information tracker": you're in a good mood, and it actually works for you. Angels sing, and a light suddenly fills the room.</font>
> + <font style="color:rgb(32, 33, 34);">stupid. contemptible and despicable. simple. Take your pick from the dictionary of slang.</font>
>



是的，作者将其称之为"愚蠢的内容跟踪管理器"，但是从2005年开始使用至今，git已然成为了现在世界上最流行的版本控制工具。包括笔者在内的绝大多数计算机行业从业者肯定都或多或少接触过git，但笔者对git的认知仅停留在使用层面，甚至在使用层面都难以称之为"熟练"，本质上是因为很多东西知其然而不知其所以然，特别是面对一些日常开发中可能不经常出现的情况，需要使用到git的一些较低频率的用法时，就显得笨拙而迟钝，所以用三言两语来记录一些git的场景和简单原理，是必要且有用的。



## 概念
下面一张图片是解析git原理时常见到的一个示意图：

![](/yuque/0/2023/png/23007887/1679747544936-976b140d-7eb3-4c48-b2e0-1bad3a36c9c0.png)

四个虚线框的部分就是本地的git仓库，也就是每个项目中的.git文件夹中所描述的内容，它不仅仅是一份代码拷贝，其包含代码，版本，其它程序员工作内容的全部信息。git是分布式的，也就是说，没有网络的情况下，程序员也可以在本地仓库中完成一切操作，如果想要在任意两个git仓库之间进行操作，那么就像是图中那样，利用clone / push / pull进行代码的互相同步即可。



### gitlab or github
git是版本管理工具，gitlab和github则是git分布式网络控制平面的实现，用以进行托管，发现和控制。从上图中我们可以看到，如果ABCD四个git需要进行代码的同步，就需要依次在对应地址的git上响应命令，这个过程显得啰嗦复杂，所以gitlab和github就是建立了"中心仓库"，ABCD四个成员的节点git仓库源自于中心仓库的clone。

![](/yuque/0/2023/png/23007887/1679799342780-2a204f4d-6d41-43f5-ad24-50574e79b6c9.png)



## 看看.git
我们的项目中，能够看到顶层路径下的.git目录大致如下：

```javascript
├─hooks
├─info
├─logs
├─objects
│  ├─info
│  └─pack
└─refs
```

在这些文件中，objects中的内容最多，事实上，我们对于git目录下的绝大多数内容都在object中。



objects中储存的对象有三大类：blob，commit和tree。在git的原理中，有一个关键概念："每一个commit都是当前git仓库的一个快照"，而commit就是整个对象关系图的入口；tree则用于描述目录结构，每个目录节点是一个tree对象。目录之间，目录文件之间的层级关系会在tree对象内容中体现，而commit会有一个根的tree对象；blob对象就是tree的叶子节点，它包含的内容就是文件的内容。



无论是blob，commit还是tree，一旦被放入objects之中后，数据就不会发生改变了。即使你commit提交对某个文件产生了变化，git也只是针对最新的文件创建一个blob对象，而不是引用前一个内容来修改它。实际上git的tree对象组织结构式一颗默克尔树(Merkle Tree)。



## 使用
事实上我们平时在git的使用中，并不太会去关心.git中的文件存储格式之类的问题，因为git将以上操作和模型都以对应地命令向我们表达出来了，我们使用对应的命令进行查看/操作即可。



### 最常用的命令: git add
说到git add命令，就需要将git的总模型再区分一下，分为工作区，暂存区和版本库。



当我们执行git add xx时，是将工作区的文件放入暂存区，此时版本库信息是未更新的。暂存区内容位于.git目录的index文件中。我们可以执行git status查看当前git的状态，当我们有文件被放入暂存区时，会有以下输出：

```bash
git add .
git status
# Your branch is up to date with 'origin/feat/v1.0'.
#
# Changes to be committed:
#  (use "git restore --staged <file>..." to unstage)
#        modified:   src/views/games/index.vue
#
```

说明我们暂存区内有对应的修改内容，而这些内容在下一次的commit中将会被提交。



同样地，依据提示，我们可以通过git restore --staged xxx 来撤销这次操作，将其从暂存区中移除。记住，这里的--staged表示我们撤销的是索引中的内容，git restore还可以从其他内容中进行恢复。



提交到暂存区是进行提交的前置步骤，可以从中看到文件的更改情况，以便在commit时确认文件的准确无误。

### 查看不同: git diff
通过上面的git status我们看到了提交有文件发生了改变，那么改变的详细信息如何查看？git diff就提供了对应地功能。git diff是为了罗列变化，他可以是工作区树和索引或者版本库中树的变化，也可以是合并产生的变化，也可以是不同的blob对象之间的变化，也可以是磁盘两个文件之间的变化等等。



### 提交：git commit
git commit的作用是创建一个提交，其中包含暂存暂存区的当前内容和描述本次更改的日志消息。通常一个新的提交时HEAD的直接子项，是当前分支的最顶端那一个，提交之后，它就是最顶端的那一个。在执行git commit之前，可以通过命令对暂存区内容进行更改，以便提交到版本库的内容为正确内容。



当我们commit时，我们需要决定哪些更改是需要被提交的，就需要携带不同的参数。我们可以通过-p参数调用交互式的patch界面来选择哪些内容需要被提交，当然如果你的工作区里包含的内容全部需要被提交时，可以携带 -a参数，这将会自动添加和移除文件，然后提交。



从commit开始，如果出现错误提交的情况，处理起来就需要相对小心了。如果你对git命令不熟悉，从这里开始就可能会出现一些异常情况，从而导致整个版本库变得凌乱。



如果你进行了提交，然后立刻就发现了错误，可以使用git reset命令进行恢复。



### 重置：git reset
git reset的功能是将当前的HEAD重置为指定的状态，通俗一点来讲就是将现在的分治的顶部指针指向之前的某个commit。



git reset命令通常使用有三种参数模式：

1. `git reset --mixed <commit-hash>`，这也是直接键入git reset时的默认模式。该命令下的行为是，将原有的提交内容还原，变成未add的状态，如果需要再次commit，需要执行git add 将文件再次写入暂存区，然后执行git commit。
2. `git reset --soft <commit-hash>`，这个模式有点类似第一种，在该模式下，只是将commit信息后退了，暂存区和工作目录的内容不变，也就是改动文件仍旧在暂存区，可以直接通过git commit再次提交。
3. `git reset --hard <commit-hash>`，在该模式下，会以某个提交的id强制恢复git文件夹的内容和状态，这个commit节点之后的所有提交都会被删除。这是一个相对比较危险的指令，因为这种强制更新会有一些问题，也就是说，该分支虽然在服务器上被重置，但是多个拥有这个分支的人，他们本地的commit版本高于服务器的版本，在他们推送过这个分支之后，被撤销的操作又会回来，所以类似的情况需要对方删除本地对应地分支，重新拉取，以获取最新的commit状态。另外一个问题就是，reset --hard如果出现了问题，是一次错误的操作，就需要通过以下指令恢复：

```bash
git relog 	// 复制要恢复的hash
git reset --hard hash
```

事实上，git reset应该是一个比较常用的重置功能，在很多场景下都可以使用，不仅是修复一些提交过程中产生的文件错误添加，描述错误等问题，在某些场景下将代码提交，切换到其他分支完成工作后再次恢复继续工作的任务也可以轻松完成。



我们以一个具体的例子来进行说明，经过6次提交之后，我们得到了从C0-C5六个提交节点，当我们发现最近的三次提交出现问题时，我们可以通过

```bash
git reset C2
```

进行commit的撤销动作，其最终会变成如下状态：

![](/yuque/0/2023/png/23007887/1698921475653-0ffa707b-12dc-4881-931c-2546cb156cd6.png)

### 另一个还原：git revert
git revert是另一个比较常见的还原方式，通常在gitlab上进行代码合并发布之后，出现问题时回退就是使用git revert。实际上git revert就是一个反向操作，生成一个新的提交，整个提交的内容是目标提交改变内容的相反操作。例如你在提交1中增加了三行代码，针对提交1进行revert之后，会生成提交2，提交2的改变内容是删除了1增加的三行代码，最新的提交变成了提交2。



经过上述操作，一次提交的内容就被还原了。



我们假设这样一个场景，你改动了一段代码，某个地方有点问题，但是这个改动已经被合并进入了master分支并且进行了新版本的发布，此时线上出现了问题，所以管理员进行了还原，使用了git revert将此次代码还原了。



这个时候就会出现一个问题：你在你的分支上完成了对这个问题的修复，然后再次提交合并到master时，会发现没有对应地代码变动了。这其实是因为，git revert产生的新的提交其实是包含之前的提交的，此时一般可以用三个方法来进行处理：

1. 对于revert产生的提交再次执行一次revert，产生新的提交就是原先有问题的提交，然后把你改动的代码合并上去即可。
2. 利用cherry-pick将节点取出来，组成一个新的分支，然后将代码进行提交。
3. 也可以将自身的分支提交合并成一个提交，这样就创建了一个新的提交，然后再次合并，就不会拒绝新的提交了。



利用git revert和git reset都可以完成这样的操作，不过git revert是更好的选择，因为git revert产生的是一个新的提交，不会对原有的提交log产生影响。



既然如此，略微探讨一下git revert，git reset和git restore之间的区别：

1. git revert是创建一个新的提交以恢复其它提交造成的更改。
2. git restore是从索引中恢复工作树中的文件，git restore并不会更改分支。
3. git reset是针对分支的操作，移动HEAD来完成分支中添加和删除提交的操作，这个操作会修改提交记录。



我们给出一个get revert的简单图示说明。

当我们某次在master分支上合并了C4提交的时候，我们意识到这次提交是有问题的，此时我们需要撤销这次合并

```bash
git revert C4
```

可以看到，master并没有向上指向C3节点，而是向下生成了一个新的节点C4'，而这个提交节点的内容本质上和C3是相同的，从而达到撤销的目的。

![](/yuque/0/2023/png/23007887/1698921623314-207fb518-14b4-4d99-93cc-31a109a92545.png)



### 合并：merge
以上讲到的无论是add还是commit，其操作对象都是单一分支，在实际使用中，通常要在不同的分支之间进行合并，这个时候就需要git merge进行处理。



`git merge <branch>` 就是将指定分支合并进入当前分支，这个过程有三种可选模式：

1. 默认是fast forward模式。fast forward模式就是git判断没有分歧路线时，就直接将目标分支的HEAD移动到最新位置。
2. --no-ff强行关闭fast forward模式。简单来讲，关闭fast forward模式就是对要merge的分支HEAD进行了一次复制，创建一个新的commit。
3. --squash，合并提交模式。这个也是非常常用的一种模式。当你在你的分支上进行代码开发时，你的commit可能会写的比较随意，特别是需要多次提交时，可能数十个提交最终完成的是同一个任务。如果将这些提交合并到其它分支，其它分支上也会出现数十个提交的log，这会让log记录看起来非常的混乱，此时通过--squash将多个commit通过一个commit统一提交，补充本次提交的commit信息即可。



这里以一个图解进行说明merge。在一次功能发布之后，我们发现某个线上的功能出现了bug，此时我们基于master分支创建了fix/bug的分支，而master分支可能有(也可能没有)其他提交，因此分支状态会变成如下：

![](/yuque/0/2023/png/23007887/1698915863600-7377ce37-fd0e-430c-8d3e-d0e1f1b7f42e.png)

从C1节点位置产生了两个分支，分别对应有C2提交和C3提交，当我们bug修复之后，需要将分支与master分支进行合并，我们在master分支上执行命令合并fix/bug

```bash
git checkout master
git merge fix/bug
```



执行完毕后节点结果变成如图：

![](/yuque/0/2023/png/23007887/1698916226445-dada6660-32b8-47e1-83d8-89758e3437c1.png)



可以看到，master分支上多出一个节点C4，master和fix/bug都指向该节点。这是因为merge会产生一个合并节点。此时master向上溯源就包含了所有的变更。



当我们需要在fix/bug分支上合并master的时候，执行merge，因为master包含fix/bug上的改动，fix/bug会直接指向C5节点。

![](/yuque/0/2023/png/23007887/1698917251018-8d01322a-aed1-44d9-86ba-8b6982288cf4.png)

直接移动到C5这是因为默认是fast-forward模式，如果是使用--no-ff时，会变成如下状态：

![](/yuque/0/2023/png/23007887/1698917660040-4c70dc63-2a64-4f6e-99d1-2ecbaabcd48d.png)

正如上面提到的，C7是复制了C6，产生了一个新的commit。



### 变基：rebase
`git rebase <branch>`的作用就是将一个或多个commit应用到某个路径上。在开发使用的过程中，通常会产生比较多的commit，rebase可以操作这些commit，以达到自己目的。



这里举个例子来讲，当你在分支上进行开发的时候，可能会产生很多次提交，以便自己进行记录和区分。等到需要提交到远程分支的时候，通常只需要一次提交记录来说明本次提交的内容。如果直接进行push就会把每次的commit都提交，势必会对线上的版本库造成比较大的提交信息污染，此时就可以使用rebase。



举例来说，当前我们有一个分支有C0到C5六次commit，我们可能需要有如下需求，合并其中某几个提交，把其中某两个提交调换位置，或者说移除某几次提交，这些都可以通过git rebase完成。例如我们需要对C1到C4的commit进行操作，使用如下命令：

```bash
git rebase -i  C1  C4
```

这里的 -i是--interactive的简写，通过这个指令可以通过可视化操作的方式进行处理，git提供了以下指令可以操作commit：

> pick：保留该commit（缩写:p）
>
> reword：保留该commit，但我需要修改该commit的注释（缩写:r）
>
> edit：保留该commit, 但我要停下来修改该提交(不仅仅修改注释)（缩写:e）
>
> squash：将该commit和前一个commit合并（缩写:s）
>
> fixup：将该commit和前一个commit合并，但我不要保留该提交的注释信息（缩写:f）
>
> exec：执行shell命令（缩写:x）
>
> drop：我要丢弃该commit（缩写:d）
>



在例子中，我们将C2放置在C3后面，然后将C4移除，确认后，会变成这样的状态：

![](/yuque/0/2023/png/23007887/1698992451213-1aaf6296-7816-41d0-ab4b-393a15e4f3ce.png)



可以看到，rebase的内容会以一个新的路线，按照选择的内容进行处理。



通常rebase是一个逐步完成的过程，当完成一个commit处理，到下一个的时候，执行git rebase --continue去应用下一个补丁。也或许在rebase过程中，你想取消真个rebase操作，就需要使用git rebase --abort。



git rebase通常还会使用的一个情形就是，当你在一个比较旧的分支进行开发，当最终要合并到master分支的时候，会发现直接合并会产生冲突，此时就需要使用rebase将master分支与现有的分支进行合并，进行冲突的解决，之后现有的"落后"分支就会和master分支保持一致，就可以进行合并了。



### 挑选：cherry-pick
cherry-pick和rebase本质上其实并没有太大区别，甚至可以将rebase视为cherry-pick的另外封装。cherry-pick的作用就是将指定的提交应用到某个分支。

举例来讲，现在我们有两个分支，bugFix和master，两个分支以不同的路径进行开发，现在需要将master分支上的C5这个commit添加到bugFix分支。

```bash
# on branch bugFix
git cherry-pick C5
```



执行之后，结果会变成如下：

![](/yuque/0/2023/png/23007887/1699240230215-be1f8691-2a23-4e21-a37b-f02cc8f495c3.png)



可以看到，在bugFix分支后面出现了C5'提交，该提交和C5是一致的。cherry-pick命令还可以将分支名作为选择，执行后会处理该分支上的最新一次提交。

