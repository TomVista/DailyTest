# Layout Configuration

# 布局配置

The layout configuration is passed into the `options.layout` namespace. The global options for the chart layout is defined in `Chart.defaults.global.layout`.

布局配置在`options.layout`中设置.图标布局全局选项定义于`Chart.defaults.global.layout`.

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| `padding` | `Number` or `Object` | `0` | The padding to add inside the chart. [more...](#padding)

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| `padding` | `Number` or `Object` | `0` | 图表的内边距 [更多...](#padding)

## Padding
If this value is a number, it is applied to all sides of the chart (left, top, right, bottom). If this value is an object, the `left` property defines the left padding. Similarly the `right`, `top`, and `bottom` properties can also be specified.

如果值是一个数值,将会配置left, top, right, bottom4个内边距.如果时一个对象,将根据对应数值配置图表内边距.

Lets say you wanted to add 50px of padding to the left side of the chart canvas, you would do:

例:

```javascript
let chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        layout: {
            padding: {
                left: 50,
                right: 0,
                top: 0,
                bottom: 0
            }
        }
    }
});
```