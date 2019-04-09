# Bar
A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.

{% chartjs %}
{
    "type": "bar",
    "data": {
        "labels": [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July"
        ],
        "datasets": [{
            "label": "My First Dataset",
            "data": [65, 59, 80, 81, 56, 55, 40],
            "fill": false,
            "backgroundColor": [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(201, 203, 207, 0.2)"
            ],
            "borderColor": [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)"
            ],
            "borderWidth": 1
        }]
    },
    "options": {
        "scales": {
            "yAxes": [{
                "ticks": {
                    "beginAtZero": true
                }
            }]
        }
    }
}
{% endchartjs %}

## Example Usage
```javascript
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
```

## Dataset Properties
The bar chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the colour of the bars is generally set this way.

柱图的数据集配置.

Some properties can be specified as an array. If these are set to an array value, the first value applies to the first bar, the second value to the second bar, and so on.

| Name | Type | Description
| ---- | ---- | -----------
| `label` | `String` | The label for the dataset which appears in the legend and tooltips.
| `xAxisID` | `String` | The ID of the x axis to plot this dataset on. If not specified, this defaults to the ID of the first found x axis
| `yAxisID` | `String` | The ID of the y axis to plot this dataset on. If not specified, this defaults to the ID of the first found y axis.
| `backgroundColor` | `Color/Color[]` | The fill color of the bar. See [Colors](../general/colors.md#colors)
| `borderColor` | `Color/Color[]` | The color of the bar border. See [Colors](../general/colors.md#colors)
| `borderWidth` | `Number/Number[]` | The stroke width of the bar in pixels.
| `borderSkipped` | `String` | Which edge to skip drawing the border for. [more...](#borderskipped)
| `hoverBackgroundColor` | `Color/Color[]` | The fill colour of the bars when hovered.
| `hoverBorderColor` | `Color/Color[]` | The stroke colour of the bars when hovered.
| `hoverBorderWidth` | `Number/Number[]` | The stroke width of the bars when hovered.

| Name | Type | Description
| ---- | ---- | -----------
| `label` | `String` | 图例和工具提示的文字部分.
| `xAxisID` | `String` | The ID of the x axis to plot this dataset on. If not specified, this defaults to the ID of the first found x axis
| `yAxisID` | `String` | The ID of the y axis to plot this dataset on. If not specified, this defaults to the ID of the first found y axis.
| `backgroundColor` | `Color/Color[]` | 背景颜色. 更多 [Colors](../general/colors.md#colors)
| `borderColor` | `Color/Color[]` | 边框颜色. 更多 [Colors](../general/colors.md#colors)
| `borderWidth` | `Number/Number[]` | 边框宽度.
| `borderSkipped` | `String` | 边框不渲染. [更多...](#borderskipped)
| `hoverBackgroundColor` | `Color/Color[]` | 鼠标悬浮时背景颜色.
| `hoverBorderColor` | `Color/Color[]` | 悬浮边框颜色.
| `hoverBorderWidth` | `Number/Number[]` | 悬浮边框宽度.

### borderSkipped
This setting is used to avoid drawing the bar stroke at the base of the fill. In general, this does not need to be changed except when creating chart types that derive from a bar chart.

生成柱图时设置那个(些)边不渲染,一般不用设置.

Options are:
* 'bottom'
* 'left'
* 'top'
* 'right'

## Configuration Options

The bar chart defines the following configuration options. These options are merged with the global chart configuration options, `Chart.defaults.global`, to form the options passed to the chart.

柱图的全局默认配置

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| `barPercentage` | `Number` | `0.9` | Percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other. [more...](#barpercentage-vs-categorypercentage)
| `categoryPercentage` | `Number` | `0.8` | Percent (0-1) of the available width each category should be within the sample width. [more...](#barpercentage-vs-categorypercentage)
| `barThickness` | `Number` | | Manually set width of each bar in pixels. If not set, the base sample widths are calculated automatically so that they take the full available widths without overlap. Then, the bars are sized using `barPercentage` and `categoryPercentage`.
| `maxBarThickness` | `Number` | | Set this to ensure that bars are not sized thicker than this.
| `gridLines.offsetGridLines` | `Boolean` | `true` | If true, the bars for a particular data point fall between the grid lines. The grid line will move to the left by one half of the tick interval. If false, the grid line will go right down the middle of the bars. [more...](#offsetgridlines)

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| `barPercentage` | `Number` | `0.9` | 用于调整柱形的宽度. [more...](#barpercentage-vs-categorypercentage)
| `categoryPercentage` | `Number` | `0.8` | 用于调整柱形之间的距离. [more...](#barpercentage-vs-categorypercentage)
| `barThickness` | `Number` | |手动设置柱体的宽度,如果不设置,默认使用上面两个配置.
| `maxBarThickness` | `Number` | | 柱体的最大宽度.
| `gridLines.offsetGridLines` | `Boolean` | `true` | 网格线的偏移. [more...](#offsetgridlines)

### offsetGridLines
If true, the bars for a particular data point fall between the grid lines. The grid line will move to the left by one half of the tick interval, which is the space between the grid lines. If false, the grid line will go right down the middle of the bars. This is set to true for a bar chart while false for other charts by default.

This setting applies to the axis configuration. If axes are added to the chart, this setting will need to be set for each new axis.

```javascript
options = {
    scales: {
        xAxes: [{
            gridLines: {
                offsetGridLines: true
            }
        }]
    }
}
```

## Default Options

It is common to want to apply a configuration setting to all created bar charts. The global bar chart settings are stored in `Chart.defaults.bar`. Changing the global options only affects charts created after the change. Existing charts are not changed.

默认全局配置位置`Chart.defaults.bar`

## barPercentage vs categoryPercentage

The following shows the relationship between the bar percentage option and the category percentage option.

```text
// categoryPercentage: 1.0
// barPercentage: 1.0
Bar:        | 1.0 | 1.0 |
Category:   |    1.0    |
Sample:     |===========|

// categoryPercentage: 1.0
// barPercentage: 0.5
Bar:          |.5|  |.5|
Category:  |      1.0     |
Sample:    |==============|

// categoryPercentage: 0.5
// barPercentage: 1.0
Bar:            |1.||1.|
Category:       |  .5  |
Sample:     |==============|
```

## Data Structure

The `data` property of a dataset for a bar chart is specified as a an array of numbers. Each point in the data array corresponds to the label at the same index on the x axis.

data将依次绑定对应的x位置上.

```javascript
data: [20, 10]
```

You can also specify the dataset as x/y coordinates when using the [time scale](../axes/cartesian/time.md#time-cartesian-axis).

使用时间线作为轴坐标[time scale](../axes/cartesian/time.md#time-cartesian-axis).

```javascript
data: [{x:'2016-12-25', y:20}, {x:'2016-12-26', y:10}]
```

# Stacked Bar Chart

Bar charts can be configured into stacked bar charts by changing the settings on the X and Y axes to enable stacking. Stacked bar charts can be used to show how one data series is made up of a number of smaller pieces.

这个配置实现数据的堆叠.

```javascript
var stackedBar = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});
```

## Dataset Properties

The following dataset properties are specific to stacked bar charts.

| Name | Type | Description
| ---- | ---- | -----------
| `stack` | `String` | The ID of the group to which this dataset belongs to (when stacked, each group will be a separate stack)

数据集的特殊堆叠.

# Horizontal Bar Chart

# 水平柱图
A horizontal bar chart is a variation on a vertical bar chart. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.
{% chartjs %}
{
    "type": "horizontalBar",
    "data": {
        "labels": ["January", "February", "March", "April", "May", "June", "July"],
        "datasets": [{
            "label": "My First Dataset",
            "data": [65, 59, 80, 81, 56, 55, 40],
            "fill": false,
            "backgroundColor": [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(201, 203, 207, 0.2)"
            ],
            "borderColor": [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)"
            ],
            "borderWidth": 1
        }]
    },
    "options": {
        "scales": {
            "xAxes": [{
                "ticks": {
                    "beginAtZero": true
                }
            }]
        }
    }
}
{% endchartjs %}

## Example
```javascript
var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
    options: options
});
```

## Config Options
The configuration options for the horizontal bar chart are the same as for the [bar chart](#configuration-options). However, any options specified on the x axis in a bar chart, are applied to the y axis in a horizontal bar chart.

The default horizontal bar configuration is specified in `Chart.defaults.horizontalBar`.
