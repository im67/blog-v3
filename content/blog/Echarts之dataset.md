---
title: Echarts之dataset
summary: 在接触到数据可视化方面的相关工作时，通常会使用图表库，而echart作为流行的可视化图表库提供了丰富和图表支持，并且在开源协议之下体现出其出色的功能完备性和性能优势。在访问echarts官网中给出示例时，我们可以看到常见的示例中，通常将数据处理在series属性之中。尽管series - xA...
date: 2024-03-11
---
在接触到数据可视化方面的相关工作时，通常会使用图表库，而echart作为流行的可视化图表库提供了丰富和图表支持，并且在开源协议之下体现出其出色的功能完备性和性能优势。



在访问echarts官网中给出示例时，我们可以看到常见的示例中，通常将数据处理在series属性之中。尽管series - xAxis - yAxis的分别配置符合配置图表的思维逻辑，但是这意味着需要将数据进行转化。通常我们使用数据时，更习惯以行/列的形式表达。



自echart 4.x版本之后，echart支持了dataset属性直接进行数据集的设置。这使得数据可以被单独管理，而且更符合数据开发者的的数据直觉。并且利用dataset，可以将图表的样式和数据相对分开，这对于需要进行图表转化相关操作变得更简单。



## Dataset
通常我们可以理解为，dataset就是统一管理数据的属性集合。例如我们用一个最简单的表格数据为例：

![](/yuque/0/2024/png/23007887/1717551086366-09dd409f-1070-4522-bec3-b33784979077.png)

如果我们使用可能更为常用的series进行数据管理，我们需要将数据处理成如下所示

```javascript
option = {
  xAxis: {
    type: 'category',
    data: ['Tom', 'Jack', 'Bob']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      name: '2020',
      data: [55, 78, 27]
    },
    {
      type: 'bar',
      name: '2021',
      data: [74, 71, 45]
    },
    {
      type: 'bar',
      name: '2022',
      data: [89, 40, 74]
    },
    {
      type: 'bar',
      name: '2023',
      data: [60, 96, 91]
    }
  ]
};
```

可以看到数据的处理其实是有点"繁琐"的，我们需要将一组列数据在一个数组中体现，直观的会认为有一种隐式的"行列转化"逻辑包含其中。



相反，如果使用dataset看起来就和原数据符合的多：

```javascript
{
  // other property
  xAxis: { type: 'category' },
  // 声明一个 Y 轴，数值轴。
  yAxis: {},
  // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
    dataset: {
    source: [
      ['year', '2020', '2021', '2022', '2023'], // 可以看做标题行
      ['Tom', 55, 74, 89, 60],
      ['Jack', 78, 71, 40, 96],
      ['Bob', 27,	45,	74,	91],
    ]
  }
}
```

可以看到，这类似于将series中的data部分统一交给dataset来管理，series只负责处理和数据不相干的部分即可。



当然也可以设置为对象的形式，不过此时我们要添加一个dimensions属性，因为对象的情况下，每个键都是同"等级"的，所以无法确立x和y轴。确立了dimensions之后，第一个字段将被作为x轴，后续作为y轴，完成图表关系映射。

```javascript
{
  // other property
  xAxis: { type: 'category' },
  // 声明一个 Y 轴，数值轴。
  yAxis: {},
  // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
    dataset: {
      dimensions: ['name', '2020', '2021', '2022', '2023'],
      source: [
      { name: 'Tom', '2020': 55, '2021': 74, '2022': 89, '2023': 60 },
      { name: 'Jack', '2020': 78, '2021': 71, '2022': 40, '2023': 96 },
      { name: 'Bob', '2020': 27, '2021': 45, '2022': 74, '2023': 91 }
    ]
  }
}
```



## 映射
上面我们提到了dimensions属性，是为了确立映射关系，这其实是dataset方式设置数据的一个关键概念。因为单纯的数据无法形成图，此时就要想办法去建立x和y轴的映射关系。除了dimensions属性，还可以通过series.encode进行处理。

encode的作用是指定哪一列可以被用来当做什么，一般会有三个属性:x, y, tooltip。可以是一个或者多个维度。例如上文中通过对象填入的数据，如果不写dimensions，使用series.encode则可以表示为:

```javascript
{
  // other property
  xAxis: { type: 'category' },
  // 声明一个 Y 轴，数值轴。
  yAxis: {},
  // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
  series: [
    { type: 'bar',encode: { x: 'name', y: '2020' } },
    { type: 'bar',encode: { x: 'name', y: '2021' } },
    { type: 'bar',encode: { x: 'name', y: '2022' } },
    { type: 'bar',encode: { x: 'name', y: '2023' } }
  ],
    dataset: {
    source: [
      { name: 'Tom', '2020': 55, '2021': 74, '2022': 89, '2023': 60 },
      { name: 'Jack', '2020': 78, '2021': 71, '2022': 40, '2023': 96 },
      { name: 'Bob', '2020': 27, '2021': 45, '2022': 74, '2023': 91 }
    ]
  }
}
```

在series中声明4个系列的数据的x轴和y轴分别的映射关系，生成最终的图表。同样地，可以在encode中声明tooltip的内容。



## 处理函数
统一维护数据另一个好处在于，对于一些fomatter的实现，是能够提供诸多好处的。举例来讲，假如我想要在tooltip中展示的内容中包含当前柱的值，还想要包含相较于其他年份的"变化量"。如果我们使用通常的series中设置数据的方式，其tooltip.formatter中的第一个参数格式如下：

```json
{
  "componentType": "series",
  "componentSubType": "bar",
  "componentIndex": 0,
  "seriesType": "bar",
  "seriesIndex": 0,
  "seriesId": "\u00002020\u00000",
  "seriesName": "2020",
  "name": "Tom",
  "dataIndex": 0,
  "data": 55,
  "value": 55,
  "color": "#5470c6",
  "dimensionNames": [
    "x",
    "y"
  ],
  "encode": {
    "x": [
      0
    ],
    "y": [
      1
    ]
  },
  "$vars": [
    "seriesName",
    "name",
    "value"
  ],
  "marker": "<span style=\"display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#5470c6;\"></span>"
}
```

可以看到data和value仅包含当前的数值，我们据此无法得到更多信息，这需要我们提前进行数据处理，或者在函数中去对其他数据进行获取和计算。



但是如果我们在dataset中进行数据维护，则参数如下：

```json
{
    "componentType": "series",
    "componentSubType": "bar",
    "componentIndex": 0,
    "seriesType": "bar",
    "seriesIndex": 0,
    "seriesId": "\u0000series\u00000\u00000",
    "seriesName": "series\u00000",
    "name": "Tom",
    "dataIndex": 0,
    "data": {
        "2020": 55,
        "2021": 74,
        "2022": 89,
        "2023": 60,
        "name": "Tom"
    },
    "value": {
        "2020": 55,
        "2021": 74,
        "2022": 89,
        "2023": 60,
        "name": "Tom"
    },
    "color": "#5470c6",
    "dimensionNames": [
        "2020",
        "2021",
        "2022",
        "2023",
        "name"
    ],
    "encode": {
        "y": [
            0
        ],
        "x": [
            4
        ]
    },
    "$vars": [
        "seriesName",
        "name",
        "value"
    ],
    "marker": "<span style=\"display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#5470c6;\"></span>"
}
```

我们可以看到data和value包含了完整的数据值，我们可以直接在其中挑选数据进行运算。



这不仅仅在tooltip中可以方便进行处理，在label等处理中也可以获得方便。



## 数据处理与转化
数据处理与转化部分的内容，笔者处理的相对较少，这一部分特指在Echart 5.x版本中新增的，基于dataset的数据处理方式。日常中还是更习惯于自己构建代码进行数据预处理。

