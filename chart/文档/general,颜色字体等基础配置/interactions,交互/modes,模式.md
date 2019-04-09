# Interaction Modes

#交互模式

When configuring interaction with the graph via hover or tooltips, a number of different modes are available.

一些不同的模式可选用于图或工具提示的悬浮交互配置.

The modes are detailed below and how they behave in conjunction with the `intersect` setting.

下面会详细说明这些模式,以及他们怎样结合`intersect`选项使用.

## point
Finds all of the items that intersect the point.

查找所有于点相交的项.

```javascript
var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        tooltips: {
            mode: 'point'
        }
    }
})
```

## nearest
Gets the item that is nearest to the point. The nearest item is determined based on the distance to the center of the chart item (point, bar). If 2 or more items are at the same distance, the one with the smallest area is used. If `intersect` is true, this is only triggered when the mouse position intersects an item in the graph. This is very useful for combo charts where points are hidden behind bars.

获得离点最近的项.这个最近的项被确认于离图表项(点,柱)水平中心的距离.如果存在2个以上或者跟多的项有相同的距离,使用其中面积最小的.如果`intersect`为`true`,只有鼠标点到图表项上才会触发.这个选项将在混合图表中点隐藏在柱图后面时特别有用.

```javascript
var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        tooltips: {
            mode: 'nearest'
        }
    }
})
```

## single (deprecated)
Finds the first item that intersects the point and returns it. Behaves like 'nearest' mode with intersect = true.

返回鼠标悬浮的第一个项(不赞成使用).行为和`nearest`+`intersect`为`true`相似.

## label (deprecated)
See `'index'` mode

移步`'index'`模式

## index
Finds item at the same index. If the `intersect` setting is true, the first intersecting item is used to determine the index in the data. If `intersect` false the nearest item, in the x direction, is used to determine the index.

查找索引指向的项.如果`intersect`配置为`true`,第一个被相交的项被用来确定数据的索引.如果`intersect`配置为`false`,x轴方向上最近的项被用来确定索引.

```javascript
var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        tooltips: {
            mode: 'index'
        }
    }
})
```

To use index mode in a chart like the horizontal bar chart, where we search along the y direction, you can use the `axis` setting introduced in v2.7.0. By setting this value to `'y'` on the y direction is used.

在类似水平柱图的图表中使用`index`模式,索引取决于y轴,你可以使用在v2.7.0.版本引进的`axis`设置,通过设置这个值为`'y'`可以指定使用y轴查找索引.

```javascript
var chart = new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
    options: {
        tooltips: {
            mode: 'index',
            axis: 'y'
        }
    }
})
```

## x-axis (deprecated)
Behaves like `'index'` mode with `intersect = false`.

行为和`'index'`+`intersect=true`相似

## dataset
Finds items in the same dataset. If the `intersect` setting is true, the first intersecting item is used to determine the index in the data. If `intersect` false the nearest item is used to determine the index.

查找本数据集中的所有项.如果`intersect`为`true`,第一个相交元素被用于指定数据索引.如果`intersect`为`false`,最近的元素被用于指定索引.

```javascript
var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        tooltips: {
            mode: 'dataset'
        }
    }
})
```

## x
Returns all items that would intersect based on the `X` coordinate of the position only. Would be useful for a vertical cursor implementation. Note that this only applies to cartesian charts

返回和鼠标`X`坐标的轴相交的所有项.对于垂直光标实现很有帮助.注意:选项仅适用于笛卡尔图(直角坐标系和斜坐标系的).

```javascript
var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        tooltips: {
            mode: 'x'
        }
    }
})
```

## y
Returns all items that would intersect based on the `Y` coordinate of the position. This would be useful for a horizontal cursor implementation. Note that this only applies to cartesian charts.

返回和鼠标`y`坐标的轴相交的所有项.对于垂直光标实现很有帮助.注意:选项仅适用于笛卡尔图(直角坐标系和斜坐标系的).

```javascript
var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        tooltips: {
            mode: 'y'
        }
    }
})
```