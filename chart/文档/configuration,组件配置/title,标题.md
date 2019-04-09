# Title

# 标题

The chart title defines text to draw at the top of the chart.

定义图表需要画出的标题文字.

## Title Configuration

## 标题配置
The title configuration is passed into the `options.title` namespace. The global options for the chart title is defined in `Chart.defaults.global.title`.

标题实例在`options.title`,全局配置在`Chart.defaults.global.title`.

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| `display` | `Boolean` | `false` | is the title shown
| `position` | `String` | `'top'` | Position of title. [more...](#position)
| `fontSize` | `Number` | `12` | Font size
| `fontFamily` | `String` |  `"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"` | Font family for the title text.
| `fontColor` | `Color` | `'#666'` | Font color
| `fontStyle` | `String` | `'bold'` | Font style
| `padding` | `Number` | `10` | Number of pixels to add above and below the title text.
| `lineHeight` | `Number/String` | `1.2` | Height of an individual line of text (see [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height))
| `text` | `String/String[]` | `''` | Title text to display. If specified as an array, text is rendered on multiple lines.

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| `display` | `Boolean` | `false` | 是否显示标题
| `position` | `String` | `'top'` | 标题的位置. [更多...](#position)
| `fontSize` | `Number` | `12` | 字体大小
| `fontFamily` | `String` |  `"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"` | 字体格式.
| `fontColor` | `Color` | `'#666'` | 字体颜色
| `fontStyle` | `String` | `'bold'` | 字体样式
| `padding` | `Number` | `10` | 上内边距和下内边距.
| `lineHeight` | `Number/String` | `1.2` | 行高(查看 [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height))
| `text` | `String/String[]` | `''` | 标题文字,若为数组,则呈现多行文本.

### Position
Possible title position values are:
* `'top'`
* `'left'`
* `'bottom'`
* `'right'`

## Example Usage

## 用法示例

The example below would enable a title of 'Custom Chart Title' on the chart that is created.

下面的例子将创建一个标题为'Custom Chart Title'的图表

```javascript
var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        title: {
            display: true,
            text: 'Custom Chart Title'
        }
    }
})
```
