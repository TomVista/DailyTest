# Interactions

#交互体验

The hover configuration is passed into the `options.hover` namespace. The global hover configuration is at `Chart.defaults.global.hover`. To configure which events trigger chart interactions, see [events](./events.md#events).

悬浮配置在`options.hover`的位置,默认悬浮配置在`Chart.defaults.global.hover`.想要配置图表交互触发事件请移步[events](./events.md#events).

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| `mode` | `String` | `'nearest'` | Sets which elements appear in the tooltip. See [Interaction Modes](./modes.md#interaction-modes) for details.
| `intersect` | `Boolean` | `true` | if true, the hover mode only applies when the mouse position intersects an item on the chart.
| `axis` | `String` | `'x'` | Can be set to `'x'`, `'y'`, or `'xy'` to define which directions are used in calculating distances. Defaults to `'x'` for `index` mode and `'xy'` in `dataset` and `nearest` modes.
| `animationDuration` | `Number` | `400` | Duration in milliseconds it takes to animate hover style changes.

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| `mode` | `String` | `'nearest'` | `tooltip` 出现的原因,详情[Interaction Modes](./modes.md#interaction-modes).
| `intersect` | `Boolean` | `true` | 如果为`true`,`mode`仅被应用在鼠标悬浮于图表项目上.
| `axis` | `String` | `'x'` |设置`'x'`, `'y'`,或 `'xy'` 来决定哪个方向被用来计算距离.在数据集中,默认的是: `index`模式使用`'x'`选项, `neareset`模式使用`xy`选项.
| `animationDuration` | `Number` | `400` | 悬浮动画持续时间,默认400毫秒.