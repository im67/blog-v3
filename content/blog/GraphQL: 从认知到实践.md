---
title: "GraphQL: 从认知到实践"
summary: "Why GraphQLgraphQL对于很多开发者已经不陌生了，它是一种API查询语言。提到graphQL我们总会拿另一个开发者可能更为熟悉的API风格来进行比较：restful API。尽管可能也有很多开发者并没有更深入的理解过restful API的设计之初的一些约束和规则，但是我们将符合..."
date: 2023-03-31
---

## Why GraphQL
graphQL对于很多开发者已经不陌生了，它是一种API查询语言。提到graphQL我们总会拿另一个开发者可能更为熟悉的API风格来进行比较：restful API。尽管可能也有很多开发者并没有更深入的理解过restful API的设计之初的一些约束和规则，但是我们将符合REST约束和规则的架构称之为restful架构。



restful中有一些很关键的设计理念。它将所有可能被引用的内容称之为"资源"，它的范围很广，可以使一个文件，也可以是一段数据；既然某个资源需要能够被引用，因此它就需要有一个唯一标识，来确认是这一个资源，这就是URI。事实上URI的设计应该具有可寻址，可自述，可直观关联等特征。也就是说我们尽量能够通过URI来表述这个资源的一些特征；既然资源能够被引用，我们也需要对资源进行一些操作，因此它应当是遵循统一接口原则的，因为restful在HTTP协议下实现最为广泛，所以使用标准的HTTP方法进行设计，例如GET，POST，PUT，DELETE等，通过不同的方法我们可以操作资源。



实际开发中却不怎么美好，从现在GET和POST请求一把梭的现状就可以看出来。PUT，DELETE之类的方法似乎并不常见，而且有些资源的定义是"模糊"的，很难将其很好的归为某一类资源，从而决定执行何种操作，选用何种方法。



另一个弊端在于，其无法很好的应对"变更"。事实上接口不总是一成不变的，我们需要从接口中获取到的字段也是需要变化的，每当进行改动时就要处理一下对应的一个接口，而且你很难从一个相对复杂的项目中确定接口被多少地方引用，需不需要同样进行改动等等......。特别是对前端来讲，所需要的数据被API严格限制，很难灵活扩展，当数据的粒度太大时可能无法满足需求，数据的粒度太小又会产生冗余。因此我们希望能有一种方式能够规避以上问题。



graphQL引入了一种思想，面向数据。本质上它是一种API查询语言，利用语言构建出所需数据的完整描述，后端根据描述返回所需数据，从而实现数据交互。



相较于其他类型的API风格，graphQL具有无法比拟的灵活性。



## 使用GraphQL
graphQL有很多功能插件可供使用，我们示例项目中使用graphql.js + koa-graphql + Koa2。另外， 我们需要一个数据库工具，项目中使用prisma。



安装好各依赖之后，我们创建一个Koa2路由，然后将路由地址设置为目标路径：

```typescript
//路由定义
import Router from "koa-router";
import { graphqlHTTP } from "koa-graphql"
import prisma from '../db';
const router = new Router();

router.all('/graphql', graphqlHTTP({
  schema: schema,   //your schema
  context: prisma, //your db tool
  graphiql: true //help you to debug graphql
}))
```



通过上文，我们将访问路径为/graphql，交由graphqlHTTP进行处理。graphiql是开启一个交互界面以便快速调试，在开发环境可设置为true，在生产环境设置为false。



schema是核心部分。schema是我们的接口定义，明确服务端有哪些字段可以使用，每个字段中包含哪些子字段等。在展示整个过程时，我们定义我们的数据，我们假设数据库有三个表，分别是log，plan，scope。每个scope数据中的数据，在plan中都有若干数据与之对应，同样地，每个plan中的数据都有若干log记录与之对应。

我们设计接口获取log信息，同时携带plan和scope信息，数据表的schema如下，这是使用prisma生成的：

```typescript
//log表
model log {
  id           Int      @id @default(autoincrement())
  plan_id      Int      
  status       String   @default("init") @db.VarChar(255)
  created_time DateTime @default(now()) @db.Timestamp(0)
  updated_time DateTime @default(now()) @db.Timestamp(0)
}

//plan表
model plan {
  id              Int       @id @default(autoincrement())
  shop_id         String    @db.VarChar(255)
  scope_id        Int
  created_time    DateTime  @default(now()) @db.Timestamp(0)
  updated_time    DateTime  @default(now()) @db.Timestamp(0)
}

//scope表
model scope {
  id           Int      @id @default(autoincrement())
  shop_id      Int
  created_time DateTime @default(now()) @db.Timestamp(0)
  updated_time DateTime @default(now()) @db.Timestamp(0)
  scope_from   String?  @db.VarChar(255)
}
```

根据数据库的信息，我们设计我们期望获得的数据结构格式，他看起来大致如下：

```json
{
  "id": 123,
  "plan_id": 2917,
  "status": "success",
  "plan": {
    "id": 2917,
    "shop_id": 275407697,
    "scope_id": 11753,
    "scope": {
    	"id": 11753,
      "shop_id": 275407697
  }
}
```

接下来要做的，就是将我们实际想要获得的数据和graphql所需要的数据模型进行对应。



## 编写schema
我们的schema格式的对象要从graphql中进行建立，首先我们要创建log的schema，如下：

```typescript
import { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLInt, 
  GraphQLList, 
  GraphQLSchema, 
  GraphQLFloat, 
  GraphQLUnionType, 
  GraphQLID 
} from "graphql";

const logSchema = new GraphQLObjectType({
  name: "Logs",
  fields: {
    id: {
      type: GraphQLInt
    },
    plan_id: {
      type: GraphQLInt
    },
    status: {
      type: GraphQLString
    },
    created_time: {
      type: GraphQLFloat
    },
    updated_time: {
      type: GraphQLFloat
    },
    plan: {
      type: planSchema
    }
  }
});

```

我们从graphql中导入各种graphql的格式定义，然后创建我们的schema，其中name字段为Logs，然后是所需要的各种字段，定义在fileds字段下，其中的type为对应字段的数据格式，设置指定的数据格式之后，在graphql进行数据返回时会进行自动转化。我们上后面的代码中使用了几个数据格式：GraphQLInt和GraphQLString对应地是int和string格式，created_time在数据库中的格式是timestamp，我们获取到对应地时间戳，所以使用GraphQLFLoat格式表示。如果你需要使其变成其它格式，例如YYYY-MM-DD，可以通过自定义自己的格式转化规则进行处理（GraphQLScalarType）。同时我们应该注意到，根据我们的设计，plan字段应该是plan表的schema，所以我们也要建立planSchema，然后将plan的类型指向planSchema，同理，plan中的scope也需要具有scope的schema，最后代码如下：

```typescript
import { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLInt, 
  GraphQLList, 
  GraphQLSchema, 
  GraphQLFloat, 
  GraphQLUnionType, 
  GraphQLID 
} from "graphql";

const scopeSchema = new GraphQLObjectType({
  name: "Scopes",
  fields: {
    id: {
      type: GraphQLInt
    }
  }
});

const planSchema = new GraphQLObjectType({
  name: "Plans",
  fields: {
    id: {
      type: GraphQLInt
    },
    shop_id: {
      type: GraphQLInt
    },
    scope_id: {
      type: GraphQLInt
    },
    scope: {
      type: scopeSchema
    }
  }
});

const logSchema = new GraphQLObjectType({
  name: "Logs",
  fields: {
    id: {
      type: GraphQLInt
    },
    plan_id: {
      type: GraphQLInt
    },
    status: {
      type: GraphQLString
    },
    created_time: {
      type: GraphQLFloat
    },
    updated_time: {
      type: GraphQLFloat
    },
    plan: {
      type: planSchema
    }
  }
});
```

定义好每个格式的schema之后，我们建立一个根节点，来定义我们的查询：

```typescript
export const RootSchema = new GraphQLObjectType({
  name: "Roots",
  fields: {
    jobLogs: {
      type: new GraphQLObjectType({
        name: "logs",
        fields: {
          list: {
            type: new GraphQLList(jobSchema)
          },
          pageInfo: {
            type: pageSchema
          }
        }
      }),
      args: {
        pageSize: {
          type: GraphQLInt
        },
        pageIndex: {
          type: GraphQLInt
        },
        id: {
          type: GraphQLInt
        },
        plan_id: {
          type: GraphQLInt
        },
        scope_id: {
          type: GraphQLInt
        }
      },
      resolve: async (
        parent, 
        { pageSize, pageIndex, id, plan_id, scope_id }, 
        context: PrismaClient
      ) => {
        	//do something
        return data;
      }
    }
  }
})
```

分析上面的数据我们可以看到，我们返回的格式在fileds中定义，jobLogs是一个对象，其中包含两个字段，list是详细的数据，数组结构，pageInfo是分页信息，定义为我们所需要的分页格式即可，一般包括当前页，每页size等信息。



作为查询，通常有根据参数进行查询的需求，所以我们的args中包含所有可能的参数和对应类型。



resolve中，我们需要提供对应的数据，这些数据的来源是不定的，通常来自于数据库，所以我们需要有一个能够处理数据的上下文环境。我们之前在定义graphqlHTTP中的context属性时，传入了prisma这个ORM库，当然你也可以使用任何你所需要的工具。以下对于数据的处理代码全都基于prisma建立。



## 获取数据
这一章节，我们主探讨resolve方法的一些编写。在上面我们提到，我们将context设置为prisma，通过prisma进行数据库的模型拉取，我们可以获取到我们的数据库模型，参考我们通过上面提到的prisma生成的model。



我们思考这样一个问题：如果要编写sql，如何实现上面数据格式的需求？我们通常使用的是左连接语句。我们当然可以通过直接执行sql语句获取数据，但是笔者这里使用了ORM库，所以更倾向于用ORM库进行处理。在prisma中，这对应就是关系查询。



在进行关系查询的时候，我们首先要为表建立关系。prisma可以自动建立关联，前提是你的数据表设置了外键关联的话，在获取到的model中会直接体现，如果没有，那就需要手动添加一下。我们分析需求就可以看出，这三个表数据之间是依次的一对多关系：plan中的每条数据，都能在scope表中找到唯一对应的一条数据；log也是一样的，log中的每条数据在plan中至少能够找到一条数据对应，所以我们更改后的表格描述文件如下：  


```typescript
//log表
model log {
  id           Int      @id @default(autoincrement())
  plan_id      Int      
  status       String   @default("init") @db.VarChar(255)
  created_time DateTime @default(now()) @db.Timestamp(0)
  updated_time DateTime @default(now()) @db.Timestamp(0)
  plan         plan?  @relation(fields: [plan_id], references: [id])
}

//plan表
model plan {
  id              Int       @id @default(autoincrement())
  shop_id         String    @db.VarChar(255)
  scope_id        Int
  created_time    DateTime  @default(now()) @db.Timestamp(0)
  updated_time    DateTime  @default(now()) @db.Timestamp(0)
  scope           scope?   @relation(fields: [scope_id], references: [id]) 
  log             log[]
}

//scope表
model scope {
  id           Int      @id @default(autoincrement())
  shop_id      Int
  created_time DateTime @default(now()) @db.Timestamp(0)
  updated_time DateTime @default(now()) @db.Timestamp(0)
  scope_from   String?  @db.VarChar(255)
  plans        plan[]
}
```

我们的log表可预见性的可能会有很多数据，所以我们决定使用分页，而且是基于偏移量的分页，同时还要能够接受基于id，plan_id和scope_id进行的数据筛选。resolve方法的第二个参数就是graphql调用时传入的参数，所以我们最终的ORM代码如下：

```typescript
      resolve: async (
        parent, 
        { pageSize, pageIndex, id, plan_id, scope_id }, 
        context: PrismaClient
      ) => {
        const jobLogs = await context.log.findMany({
          skip: pageSize * (pageIndex - 1),
          take: pageSize,
          orderBy: [{
            created_time: "desc"
          }],
          where: {
            id, plan_id,
            plan: {
              scope_id
            }
          },
          select: {
            id: true,
            status: true,
            plan_id: true,
            created_time: true,
            updated_time: true,
            plan: {
              select: {
                id: true,
                shop_id: true,
                scope_id: true,
                scope: true
              }
            }
          }
        });

        const total = await context.log.count({
          where: {
            id, plan_id,
            plan: {
              scope_id
            }
          }
        })
        return {
          list: jobLogs,
          pageInfo: {
            pageIndex,
            pageSize,
            total
          }
        };
      }
```

我们获取到实际的数据和数据总数，组织成根查询所需要的数据，直接返回即可。到这一步结束，我们的后端部分基本就运行成功了。此时我们启动服务，然后输入服务地址，后接路径/graphql，如果在配置graphqlHTTP部分启用了graphiql，就能够看到一个交互式页面，可以在左侧输入graphql语法，然后右侧查看调用结果。不过我们的接口调用肯定是基于实际项目的，所以下一章将会描述如何在客户端进行调用。



## 调用GraphQL接口
本质上，graphQL的调用就是将制定格式的查询语句以字符串的形式发送到服务端即可，所以对于客户端使用的工具没有特别的要求，你可以使用Axios，也可以使用原生的XHR和Fetch，不过这些工具可能要自己去实现对应的逻辑，需要额外的配置，所以，笔者更推荐使用专门为graphQL设计的调用工具。笔者推荐@Apollo/client进行处理。关于Apollo，可以[点击这里](https://www.apollographql.com/)查看。我们通过apollo的配置生成一个客户端查询工具，然后调用查询：

```typescript
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache({ resultCaching: false }),
});

interface JobLogsGraphqlParams {
  id?: number
  plan_id?: number
  scope_id?: number
  pageInfo: {
    pageIndex: number
    pageSize: number
  }
}

export const queryJobLogs = (params: JobLogsGraphqlParams) => {
  const {
    id, plan_id, scope_id,
    pageInfo: { pageIndex, pageSize } 
  } = params;
  return client.query({
    query: gql`
      query jobLogs(
      $id: Int,
      $plan_id: Int,
      $scope_id: Int,
      $pageIndex: Int!, 
      $pageSize: Int!
      ) {
        jobLogs(
        pageIndex: $pageIndex, 
        pageSize: $pageSize,
        id: $id,
        plan_id: $plan_id,
        scope_id: $scope_id,
        date: $date
        ) {
          list {
            id
            plan_id
            created_time
            updated_time
            plan {
              id
              scope_id
              scope {
                id
              }
            }
          }
          pageInfo {
            pageIndex
            pageSize
            total
          }
        }
      }
    `,
    variables: {
      pageSize: pageSize,
      pageIndex: pageIndex,
      id,
      plan_id,
      scope_id
    }
  })
}
```

其中的核心部分就是client.query部分。该方法接受两个参数，query表示查询的graphql语句，variables则是变量值。



gql函数为格式化与验证查询语句的函数。你可能需要一个vscode插件Apollo GraphQL来进行语句的高亮和验证，这能够大大提高开发效率，否则查询语句部分就单纯的是字符串内容，难易理解层级关系。我们的jobLogs查询需要有多个筛选参数，例如分页信息等，所以在jobLogs函数中用参数进行定义，其中他们都是$开头的变量形式，这表示这是一个变量，然后冒号后跟数据格式，这个语法有点类似于TypeScript，但又有一些不同。例如我们定义$id为整型数字，其表示为$id: Int；有些参数是必填的，我们需要在其后面添加一个感叹号!，这表示该参数不可省略，如果在调用时省略的话，Apollo将会给出报错。不添加!则该参数就是可选的。另外，如果是一个数组格式的数据，我们需要用[]将其包裹，例如浮点数数组，就是[Float]，这与TypeScript也不同。



定义好查询之后，我们要建立起变量之间的映射关系，jobLogs中类似pageIndex: $pageIndex就是将传入的变量和函数接受的形参实现一一对应。



接下来就是定义我们要获取到的数据字段，我们在上面提到，我们的服务端最终返回的数据是类似

```json
{
  "list": {
    "id": 124,
  	"plan": {
      "id": 567,
      scope: {
        "id": 678
      }
    }
  },
  "pageInfo": {
    "pageIndex": 2,
    "pageSize": 50,
    "total": 2314
  }
}
```

形式的，所以gql语法中按照后端定义的数据格式进行字段表达即可。例如想要获取该类型的字段，我们的gql语句就是：

```javascript
list {
  id
  plan_id
  plan {
    id
    scope {
      id
    }
  }
}
pageInfo {
  pageIndex
  pageSize
  total
}
```

最后我们用variables字段表示我们的变量和变量值，如之前代码所示，就可以向后端发起请求了。



Apollo提供的不仅是graphQL的请求发送与处理等，它还提供了React的hook写法的请求方法，可以方便直接处理加载/成功/失败状态，更多内容可以参考文档。



## 告一段落
至此我们实现了一个基于Koa2的graphQL规范的接口，并且实现了查询功能。graphQL中的请求可以分为两大类：查询和变更，变更则包括增删改查，一般通过mutation实现，本文到此为止暂时仅给出查询的流程和代码梳理。实际上，graphQL和restful API并不是相互取代的关系，而是不同业务场景下的功能选择。选用更适合实际业务场景的方案远比无休止的探讨graphQL还是resuful API要重要得多。

