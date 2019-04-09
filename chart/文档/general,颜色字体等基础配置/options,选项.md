# Options

# 选项

## Scriptable Options

## 脚本选项



Scriptable options also accept a function which is called for each data and that takes the unique argument `context` representing contextual information (see [option context](options.md#option-context)).

脚本选项也允许 每一个数据使用function回调.它使用唯一的参数`context`作为上下文信息(详见 [option context](options.md#option-context)).

Example:

例:

```javascript
color: function(context) {
    var index = context.dataIndex;
    var value = context.dataset.data[index];
    return value < 0 ? 'red' :  // draw negative values in red
        index % 2 ? 'blue' :    // else, alternate values in blue and green
        'green';
}
```

> **Note:** scriptable options are only supported by a few bubble chart options.

> **Note:** 脚本选项仅被一部分气泡图标支持


## Indexable Options

## 索引选项

Indexable options also accept an array in which each item corresponds to the element at the same index. Note that this method requires to provide as many items as data, so, in most cases, using a [function](#scriptable-options) is more appropriated if supported.

索引选项也允许使用数组,数组的子项通过索引和元素对应.注意:这个方法需要提供和数据一样多的子项,所以,在大部分的时候使用[function]更好,前提是[function]被支持.

Example:

例:

```javascript
color: [
    'red',    // color for data at index 0
    'blue',   // color for data at index 1
    'green',  // color for data at index 2
    'black',  // color for data at index 3
    //...
]
```

## Option Context

##选项上下文

The option context is used to give contextual information when resolving options and currently only applies to [scriptable options](#scriptable-options).

选项上下文用于提供解析选项的上下文信息.目前仅被[scriptable options](#scriptable-options)支持.

The context object contains the following properties:

这个上下文对象包含以下属性:

- `chart`: the associated chart
- `dataIndex`: index of the current data
- `dataset`: dataset at index `datasetIndex`
- `datasetIndex`: index of the current dataset

- `chart`: 图表对象
- `dataIndex`: 当前/对应数据的索引
- `dataset`: 数据集
- `datasetIndex`: 当前/对应数据集的索引

**Important**: since the context can represent different types of entities (dataset, data, etc.), some properties may be `undefined` so be sure to test any context property before using it.

**Important**: `context`能够代表不同类型的实体(dataset, data等.),一些属性可能`undefined`,所以在使用前先做好测试.
