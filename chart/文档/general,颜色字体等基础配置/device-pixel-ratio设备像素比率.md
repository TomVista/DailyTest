# Device Pixel Ratio

# 设备像素比率

By default the chart's canvas will use a 1:1 pixel ratio, unless the physical display has a higher pixel ratio (e.g. Retina displays).

默认的图表画布使用1:1的像素比率,除非物理设备有更高的像素比率(例:Retina设备).

For applications where a chart will be converted to a bitmap, or printed to a higher DPI medium it can be desirable to render the chart at a higher resolution than the default.

对于需要将图表生成位图或者打印为更高DPI介质的应用程序,需要以一个合适的高于默认值的方案来渲染图表

Setting `devicePixelRatio` to a value other than 1 will force the canvas size to be scaled by that amount, relative to the container size. There should be no visible difference on screen; the difference will only be visible when the image is zoomed or printed.

将`devicePixelRatio`设置为1以外的值将强制画布大小相对于容器大小按该量缩放。 屏幕上应该没有明显的差异; 只有在缩放或打印图像时才能看到差异。

## Configuration Options

## 选项描述

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| `devicePixelRatio` | `Number` | window.devicePixelRatio | Override the window's default devicePixelRatio.
