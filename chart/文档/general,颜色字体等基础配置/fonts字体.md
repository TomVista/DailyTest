# Fonts

# 字体

There are 4 special global settings that can change all of the fonts on the chart. These options are in `Chart.defaults.global`. The global font settings only apply when more specific options are not included in the config.

在chart中有4个特殊全局设置可以改变图表中的全部字体.这些选项在`Chart.defaults.global`.这个全局字体设置仅在字体没有被特殊设置时被使用.

For example, in this chart the text will all be red except for the labels in the legend.

例:在下面的图表中除了图例中的标签为黑色,其他字体都是红色

```javascript
Chart.defaults.global.defaultFontColor = 'red';
let chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'black'
            }
        }
    }
});
```

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| `defaultFontColor` | `Color` | `'#666'` | Default font color for all text.
| `defaultFontFamily` | `String` | `"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"` | Default font family for all text.
| `defaultFontSize` | `Number` | `12` | Default font size (in px) for text. Does not apply to radialLinear scale point labels.
| `defaultFontStyle` | `String` | `'normal'` | Default font style. Does not apply to tooltip title or footer. Does not apply to chart title.

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `defaultFontColor` | `Color` | `'#666'` | 所有文字的默认颜色.
| `defaultFontFamily` | `String` | `"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"` | 所有文字的默认字体.
| `defaultFontSize` | `Number` | `12` | 所有文字的默认大小(单位:px). 不适用于radialLinear刻度标签.
| `defaultFontStyle` | `String` | `'normal'` | 默认字体样式. 不适用于提示标题和页脚. 不适用于图表标题.

## Non-Existant Fonts

## 不存在的字体

If a font is specified for a chart that does exist on the system, the browser will not apply the font when it is set. If you notice odd fonts appearing in your charts, check that the font you are applying exists on your system. See [issue 3318](https://github.com/chartjs/Chart.js/issues/3318) for more details.

如果把系统中不存在的字体指定给图表,那么浏览器将不应用这个字体设置.如果,图表中有奇怪的字体,请检查你是否使用了一个系统中存在的字体.从[issue 3318](https://github.com/chartjs/Chart.js/issues/3318)中查看更多信息