# Legend Configuration

#图例标签配置

The chart legend displays data about the datasets that area appearing on the chart.

图表的图例在图表中显示数据集的数据

## Configuration options

## 配置选项

The legend configuration is passed into the `options.legend` namespace. The global options for the chart legend is defined in `Chart.defaults.global.legend`.

图例配置在`options.legend`中.全局图里配置定义于`Chart.defaults.global.legend`.

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| `display` | `Boolean` | `true` | is the legend shown
| `position` | `String` | `'top'` | Position of the legend. [more...](#position)
| `fullWidth` | `Boolean` | `true` | Marks that this box should take the full width of the canvas (pushing down other boxes). This is unlikely to need to be changed in day-to-day use.
| `onClick` | `Function` | | A callback that is called when a click event is registered on a label item
| `onHover` | `Function` | | A callback that is called when a 'mousemove' event is registered on top of a label item
| `reverse` | `Boolean` | `false` | Legend will show datasets in reverse order.
| `labels` | `Object` | | See the [Legend Label Configuration](#legend-label-configuration) section below.

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| `display` | `Boolean` | `true` | 是否显示图例
| `position` | `String` | `'top'` | 图例的位置 [更多...](#position)
| `fullWidth` | `Boolean` | `true` | (不理解)标记此框应采取画布的完整宽度(向下推其他框).在日常使用中，这不太可能需要改变)
| `onClick` | `Function` | | 注册点击回调函数给一个图例
| `onHover` | `Function` | | 注册悬浮回调函数给一个图例
| `reverse` | `Boolean` | `false` | 反序显示数据集
| `labels` | `Object` | |  下面部分请移步[Legend Label Configuration](#legend-label-configuration).

## Position
Position of the legend. Options are:
* `'top'`
* `'left'`
* `'bottom'`
* `'right'`

## Legend Label Configuration

## 图例标签配置

The legend label configuration is nested below the legend configuration using the `labels` key.

这个配置嵌套在`lenged`中,关键字为`labels`.

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| `boxWidth` | `Number` | `40` | width of coloured box
| `fontSize` | `Number` | `12` | font size of text
| `fontStyle` | `String` | `'normal'` | font style of text
| `fontColor` | `Color` | `'#666'` | Color of text
| `fontFamily` | `String` | `"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"` | Font family of legend text.
| `padding` | `Number` | `10` | Padding between rows of colored boxes.
| `generateLabels` | `Function` | | Generates legend items for each thing in the legend. Default implementation returns the text + styling for the color box. See [Legend Item](#legend-item-interface) for details.
| `filter` | `Function` | `null` | Filters legend items out of the legend. Receives 2 parameters, a [Legend Item](#legend-item-interface) and the chart data.
| `usePointStyle` | `Boolean` | `false` | Label style will match corresponding point style (size is based on fontSize, boxWidth is not used in this case).

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| `boxWidth` | `Number` | `40` | 宽度
| `fontSize` | `Number` | `12` | 字体大小
| `fontStyle` | `String` | `'normal'` | 字体类型
| `fontColor` | `Color` | `'#666'` | 字体颜色
| `fontFamily` | `String` | `"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"` | 字体家族设置.
| `padding` | `Number` | `10` | 图例和顶部的距离,以及图例之间的距离
| `generateLabels` | `Function` | |生成图例的函数 详情: [Legend Item](#legend-item-interface) .
| `filter` | `Function` | `null` | 图例填充函数,携带2个参数:图例本身,图例所代表的数据.
| `usePointStyle` | `Boolean` | `false` | 使用圆型图例,默认方块 (大小基于`fontsize`, `boxwidth`不再适用).

## Legend Item Interface

 `onClick` 是 `labels.generateLabels`的一个返回,它必须完成以下.

```javascript
{
    // Label that will be displayed
    //图例显示的文字
    text: String,

    // Fill style of the legend box
    //图例的填充颜色
    fillStyle: Color,

    // If true, this item represents a hidden dataset. Label will be rendered with a strike-through effect
    hidden: Boolean,

    // For box border. See https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap
    lineCap: String,

    // For box border. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
    lineDash: Array[Number],

    // For box border. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset
    lineDashOffset: Number,

    // For box border. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
    lineJoin: String,

    // Width of box border
    lineWidth: Number,

    // Stroke style of the legend box
    strokeStyle: Color

    // Point style of the legend box (only used if usePointStyle is true)
    pointStyle: String
}
```

## Example

## 示例

The following example will create a chart with the legend enabled and turn all of the text red in color.

下面的例子将创建一个有全红色图例的图表

```javascript
var chart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        legend: {
            display: true,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        }
}
});
```

## Custom On Click Actions

## 鼠标点击事件的动作

It can be common to want to trigger different behaviour when clicking an item in the legend. This can be easily achieved using a callback in the config object.

点击图例有不同的行为是一个常见的需求,通过配置参数对象的回调函数可以容易的实现这个目标.

The default legend click handler is:
默认的图例点击事件:
```javascript
//点击隐藏数据
function(e, legendItem) {
    var index = legendItem.datasetIndex;
    var ci = this.chart;
    var meta = ci.getDatasetMeta(index);

    // See controller.isDatasetVisible comment
    meta.hidden = meta.hidden === null? !ci.data.datasets[index].hidden : null;

    // We hid a dataset ... rerender the chart
    ci.update();
}
```

Lets say we wanted instead to link the display of the first two datasets. We could change the click handler accordingly.

如果想代替并连接前两个图例的显示,我们可以改变相应的点击控制器.

```javascript
var defaultLegendClickHandler = Chart.defaults.global.legend.onClick;
var newLegendClickHandler = function (e, legendItem) {
    var index = legendItem.datasetIndex;

    if (index > 1) {
        // Do the original logic
        defaultLegendClickHandler(e, legendItem);
    } else {
        let ci = this.chart;
        [ci.getDatasetMeta(0),
         ci.getDatasetMeta(1)].forEach(function(meta) {
            meta.hidden = meta.hidden === null? !ci.data.datasets[index].hidden : null;
        });
        ci.update();
    }
};

var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        legend: {

        }
    }
});
```

Now when you click the legend in this chart, the visibility of the first two datasets will be linked together.

现在,当你点击图表的图例,这个图表的前两个数据集的可用性将连接到一起.

## HTML Legends
//不会用
Sometimes you need a very complex legend. In these cases, it makes sense to generate an HTML legend. Charts provide a `generateLegend()` method on their prototype that returns an HTML string for the legend.

使用`generateLegend()`的一个方法创建复杂的HTM图例.

To configure how this legend is generated, you can change the `legendCallback` config property.

指出图例如何生成,你可以使用`legendCallback`.

```javascript
var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        legendCallback: function(chart) {
            // Return the HTML string here.
        }
    }
});
```

Note that legendCallback is not called automatically and you must call `generateLegend()` yourself in code when creating a legend using this method.

注意，legendCallback不会自动调用，并且当使用此方法创建图例时，您必须在代码中自己调用`generateLegend()'。