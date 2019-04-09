# Responsive Charts

# 响应式图表

When it comes to change the chart size based on the window size, a major limitation is that the canvas *render* size (`canvas.width` and `.height`) can **not** be expressed with relative values, contrary to the *display* size (`canvas.style.width` and `.height`). Furthermore, these sizes are independent from each other and thus the canvas *render* size does not adjust automatically based on the *display* size, making the rendering inaccurate.

涉及到基于窗体大小改变图表大小,有一个重要的限制:`canvas`的渲染大小(`canvas.width`和`.height`)**不能**被相对值表达,这和显示尺寸(`canvas.style.width`和`.height`)相反.此外,渲染大小独立于其他大小,渲染大小不会基于显示大小自动调整,这使渲染不准确.

The following examples **do not work**:

不要学下面的例子:

- `<canvas height="40vh" width="80vw">`: **invalid** values, the canvas doesn't resize ([example](https://codepen.io/chartjs/pen/oWLZaR))
- `<canvas style="height:40vh; width:80vw">`: **invalid** behavior, the canvas is resized but becomes blurry ([example](https://codepen.io/chartjs/pen/WjxpmO))

Chart.js provides a [few options](#configuration-options) to enable responsiveness and control the resize behavior of charts by detecting when the canvas *display* size changes and update the *render* size accordingly.

Chart.js提供一些[选项](#configuration-options) 来实现响应式,当画布显示大小改变时,通过监测来控制图表重绘行为,并且按照显示大小更新渲染大小.

## Configuration Options

## 配置选项

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| `responsive` | `Boolean` | `true` | Resizes the chart canvas when its container does ([important note...](#important-note)).
| `responsiveAnimationDuration` | `Number` | `0` | Duration in milliseconds it takes to animate to new size after a resize event.
| `maintainAspectRatio` | `Boolean` | `true` | Maintain the original canvas aspect ratio `(width / height)` when resizing.
| `onResize` | `Function` | `null` | Called when a resize occurs. Gets passed two arguments: the chart instance and the new size.

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| `responsive` | `Boolean` | `true` | 当图表容器大小改变时,重绘图表([注意!](#important-note)).
| `responsiveAnimationDuration` | `Number` | `0` | 重绘动画的持续事件单位毫秒.
| `maintainAspectRatio` | `Boolean` | `true` | 重绘时保持原始画布的纵横比.
| `onResize` | `Function` | `null` | Called when a resize occurs. Gets passed two arguments: the chart instance and the new size.

## Important Note

##重要的注意事项

Detecting when the canvas size changes can not be done directly from the `CANVAS` element. Chart.js uses its parent container to update the canvas *render* and *display* sizes. However, this method requires the container to be **relatively positioned** and **dedicated to the chart canvas only**. Responsiveness can then be achieved by setting relative values for the container size ([example](https://codepen.io/chartjs/pen/YVWZbz)):

当画布大小改变时不能直接在画布元素上进行检查.Chart.js使用画布父容器来更新画布的渲染大小和显示大小.然而,这个方法需要容器元素**相对定位**并且**只有一个子元素且为画布元素**.然后响应式可以通过设置画布大小为相对于容器的大小来实现([例](https://codepen.io/chartjs/pen/YVWZbz)):

```html
<div class="chart-container" style="position: relative; height:40vh; width:80vw">
    <canvas id="chart"></canvas>
</div>
```

The chart can also be programmatically resized by modifying the container size:

图表可以 以代码方式修改容器大小 进而实现重绘

```javascript
chart.canvas.parentNode.style.height = '128px';
```

## Printing Resizeable Charts

## 打印响应式图表

CSS media queries allow changing styles when printing a page. The CSS applied from these media queries may cause charts to need to resize. However, the resize won't happen automatically. To support resizing charts when printing, one needs to hook the [onbeforeprint](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeprint) event and manually trigger resizing of each chart.

Css媒体查询允许在打印一个页面时改变样式. 这个特性会导致图表重绘.然而,这个重绘不是自动发生的.想要支持打印重绘,请访问钩子函数[onbeforeprint](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeprint),来手动触发每个表格的重绘行为

```javascript
function beforePrintHandler () {
  for (var id in Chart.instances) {
    Chart.instances[id].resize()
  }
}
```
