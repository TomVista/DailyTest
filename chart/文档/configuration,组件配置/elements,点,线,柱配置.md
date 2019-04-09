# Elements

# 元素

While chart types provide settings to configure the styling of each dataset, you sometimes want to style **all datasets the same way**. A common example would be to stroke all of the bars in a bar chart with the same colour but change the fill per dataset. Options can be configured for four different types of elements: **[arc](#arc-configuration)**, **[lines](#line-configuration)**, **[points](#point-configuration)**, and **[rectangles](#rectangle-configuration)**. When set, these options apply to all objects of that type unless specifically overridden by the configuration attached to a dataset.

虽然图类型提供配置来指定每一个数据集的样式,但有时你想用同样的样式格式化所有数据集.一个普通的例子:所有的柱图使用同样的颜色,但不同的数据集颜色不一样.有4个选项可以被指定.当设置他们的时候,这些选项应用于所有对象除非有特殊的重写属性指定给附属的数据集.

## Global Configuration

##全局配置

The element options can be specified per chart or globally. The global options for elements are defined in `Chart.defaults.global.elements`. For example, to set the border width of all bar charts globally you would do:

这个元素选项可以被特殊指定或着使用全局配置.元素全局配置定义于`Chart.defaults.global.elements`.例:给所有的柱形图设置边框宽度.

```javascript
Chart.defaults.global.elements.rectangle.borderWidth = 2;
```

## Point Configuration

## 点配置

Point elements are used to represent the points in a line chart or a bubble chart.

用于设置线图和气泡图中的点的样式

Global point options: `Chart.defaults.global.elements.point`

全局点元素选项:`Chart.defaults.global.elements.point`

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| `radius` | `Number` | `3` | Point radius.
| [`pointStyle`](#point-styles) | `String` | `circle` | Point style.
| `backgroundColor` | `Color` | `'rgba(0,0,0,0.1)'` | Point fill color.
| `borderWidth` | `Number` | `1` | Point stroke width.
| `borderColor` | `Color` | `'rgba(0,0,0,0.1)'` | Point stroke color.
| `hitRadius` | `Number` | `1` | Extra radius added to point radius for hit detection.
| `hoverRadius` | `Number` | `4` | Point radius when hovered.
| `hoverBorderWidth` | `Number` | `1` | Stroke width when hovered.

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| `radius` | `Number` | `3` | 点的半径
| [`pointStyle`](#point-styles) | `String` | `circle` | 点的形状.
| `backgroundColor` | `Color` | `'rgba(0,0,0,0.1)'` | 点的填充颜色.
| `borderWidth` | `Number` | `1` |点的边框宽度.
| `borderColor` | `Color` | `'rgba(0,0,0,0.1)'` | 点的边框颜色.
| `hitRadius` | `Number` | `1` | 添加额外的半径到点的命中半径(散点分布图).
| `hoverRadius` | `Number` | `4` | 悬浮事件触发时的半径.
| `hoverBorderWidth` | `Number` | `1` | 悬浮事件触发的边框宽度.

### Point Styles

### 点的形状

The following values are supported:
- `'circle'`
- `'cross'`
- `'crossRot'`
- `'dash'`
- `'line'`
- `'rect'`
- `'rectRounded'`
- `'rectRot'`
- `'star'`
- `'triangle'`

If the value is an image, that image is drawn on the canvas using [drawImage](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/drawImage).

如果值是一张图片,使用[drawImage](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/drawImage)在画布上绘出图片.

## Line Configuration

## 线配置

Line elements are used to represent the line in a line chart.

用于线图中的线的配置

Global line options: `Chart.defaults.global.elements.line`

全局配置:`Chart.defaults.global.elements.line`

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| `tension` | `Number` | `0.4` | Bézier curve tension (`0` for no Bézier curves).
| `backgroundColor` | `Color` | `'rgba(0,0,0,0.1)'` | Line fill color.
| `borderWidth` | `Number` | `3` | Line stroke width.
| `borderColor` | `Color` | `'rgba(0,0,0,0.1)'` | Line stroke color.
| `borderCapStyle` | `String` | `'butt'` | Line cap style (see [MDN](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap)).
| `borderDash` | `Array` | `[]` | Line dash (see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)).
| `borderDashOffset` | `Number` | `0` | Line dash offset (see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)).
| `borderJoinStyle` | `String` | `'miter` | Line join style (see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin)).
| `capBezierPoints` | `Boolean` | `true` | `true` to keep Bézier control inside the chart, `false` for no restriction.
| `fill` | `Boolean/String` | `true` | Fill location: `'zero'`, `'top'`, `'bottom'`, `true` (eq. `'zero'`) or `false` (no fill).
| `stepped` | `Boolean` | `false` | `true` to show the line as a stepped line (`tension` will be ignored).

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| `tension` | `Number` | `0.4` | 曲线弯曲程度(0为折线图).
| `backgroundColor` | `Color` | `'rgba(0,0,0,0.1)'` | 曲线颜色.
| `borderWidth` | `Number` | `3` | 曲线边框宽度.
| `borderColor` | `Color` | `'rgba(0,0,0,0.1)'` | 曲线边框颜色.
| `borderCapStyle` | `String` | `'butt'` | 线两端样式 (see [MDN](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap)).
| `borderDash` | `Array` | `[]` | 虚线 (see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)).
| `borderDashOffset` | `Number` | `0` | 虚线位置偏移 (see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)).
| `borderJoinStyle` | `String` | `'miter` | 线的弯折样式 (see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin)).
| `capBezierPoints` | `Boolean` | `true` | `true` 表示控两端在图表内不,`false`表示随意.
| `fill` | `Boolean/String` | `true` | Fill location: `'zero'`, `'top'`, `'bottom'`, `true` (eq. `'zero'`) or `false` (no fill).
| `stepped` | `Boolean` | `false` | `true` 表示使用阶梯线/折线 (`tension` 将被覆盖).

## Rectangle Configuration

## 矩形配置
Rectangle elements are used to represent the bars in a bar chart.

柱图的柱子的配置.

Global rectangle options: `Chart.defaults.global.elements.rectangle`

全局矩形配置:`Chart.defaults.global.elements.rectangle`

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| `backgroundColor` | `Color` | `'rgba(0,0,0,0.1)'` | Bar fill color.
| `borderWidth` | `Number` | `0` | Bar stroke width.
| `borderColor` | `Color` | `'rgba(0,0,0,0.1)'` | Bar stroke color.
| `borderSkipped` | `String` | `'bottom'` | Skipped (excluded) border: `'bottom'`, `'left'`, `'top'` or `'right'`.

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| `backgroundColor` | `Color` | `'rgba(0,0,0,0.1)'` | 柱形填充颜色.
| `borderWidth` | `Number` | `0` | 柱形边框宽度.
| `borderColor` | `Color` | `'rgba(0,0,0,0.1)'` | 柱形边框颜色.
| `borderSkipped` | `String` | `'bottom'` | 不渲染边框: `'bottom'`, `'left'`, `'top'` or `'right'`.

## Arc Configuration

## 弧配置
Arcs are used in the polar area, doughnut and pie charts.

饼图的配置

Global arc options: `Chart.defaults.global.elements.arc`.

全局弧选项:`Chart.defaults.global.elements.arc`.

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| `backgroundColor` | `Color` | `'rgba(0,0,0,0.1)'` | Arc fill color.
| `borderColor` | `Color` | `'#fff'` | Arc stroke color.
| `borderWidth`| `Number` | `2` | Arc stroke width.

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| `backgroundColor` | `Color` | `'rgba(0,0,0,0.1)'` | 填充颜色.
| `borderColor` | `Color` | `'#fff'` | 边框颜色.
| `borderWidth`| `Number` | `2` | 边框宽度.
