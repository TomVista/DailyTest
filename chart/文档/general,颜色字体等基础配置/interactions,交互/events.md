# Events
The following properties define how the chart interacts with events.

下面的性质决定图表怎样通过事件进行交互.

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| `events` | `String[]` | `["mousemove", "mouseout", "click", "touchstart", "touchmove", "touchend"]` | The `events` option defines the browser events that the chart should listen to for tooltips and hovering. [more...](#event-option)
| `onHover` | `Function` | `null` | Called when any of the events fire. Called in the context of the chart and passed the event and an array of active elements (bars, points, etc).
| `onClick` | `Function` | `null` | Called if the event is of type 'mouseup' or 'click'. Called in the context of the chart and passed the event and an array of active elements

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| `events` | `String[]` | `["mousemove", "mouseout", "click", "touchstart", "touchmove", "touchend"]` | 选项定义了图表需要为悬浮或提示工具监听的浏览器事件.[更多...](#event-option)
| `onHover` | `Function` | `null` | 悬浮调用事件. 调用图表上下文,并传递事件和活动元素数组(柱图, 点集等).
| `onClick` | `Function` | `null` | 鼠标抬起或点击调用事件. 调用图表上下文,并传递事件和活动元素数组(柱图, 点集等).

## Event Option
For example, to have the chart only respond to click events, you could do

举例:图表响应点击事件.

```javascript
var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        // This chart will not respond to mousemove, etc
        events: ['click']
    }
});
```
