# Animations

#动画

Chart.js animates charts out of the box. A number of options are provided to configure how the animation looks and how long it takes

Chart.js在容器中使用动画绘制图表.提供一系列的选项用来配置动画长什么样和动画持续时间.

## Animation Configuration

#动画选项

The following animation options are available. The global options for are defined in `Chart.defaults.global.animation`.

下面的动画选项是可用的,全局选项定义于``.Chart.defaults.global.animation`.

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| `duration` | `Number` | `1000` | The number of milliseconds an animation takes.
| `easing` | `String` | `'easeOutQuart'` | Easing function to use. [more...](#easing)
| `onProgress` | `Function` | `null` | Callback called on each step of an animation. [more...](#animation-callbacks)
| `onComplete` | `Function` | `null` | Callback called at the end of an animation. [more...](#animation-callbacks)

| Name | Type | Default | Description
| -----| ---- | --------| -----------
| `duration` | `Number` | `1000` | 动画持续时间,单位毫秒,默认1s.
| `easing` | `String` | `'easeOutQuart'` | 一些动画效果 [更多...](#easing)
| `onProgress` | `Function` | `null` | Callback called on each step of an animation. [more...](#animation-callbacks)
| `onComplete` | `Function` | `null` | 动画完成后回调函数 [更多...](#animation-callbacks)

## Easing
 Available options are:
* `'linear'`
* `'easeInQuad'`
* `'easeOutQuad'`
* `'easeInOutQuad'`
* `'easeInCubic'`
* `'easeOutCubic'`
* `'easeInOutCubic'`
* `'easeInQuart'`
* `'easeOutQuart'`
* `'easeInOutQuart'`
* `'easeInQuint'`
* `'easeOutQuint'`
* `'easeInOutQuint'`
* `'easeInSine'`
* `'easeOutSine'`
* `'easeInOutSine'`
* `'easeInExpo'`
* `'easeOutExpo'`
* `'easeInOutExpo'`
* `'easeInCirc'`
* `'easeOutCirc'`
* `'easeInOutCirc'`
* `'easeInElastic'`
* `'easeOutElastic'`
* `'easeInOutElastic'`
* `'easeInBack'`
* `'easeOutBack'`
* `'easeInOutBack'`
* `'easeInBounce'`
* `'easeOutBounce'`
* `'easeInOutBounce'`

See [Robert Penner's easing equations](http://robertpenner.com/easing/).

## Animation Callbacks

## 动画回调函数

The `onProgress` and `onComplete` callbacks are useful for synchronizing an external draw to the chart animation.

`onProgress`和`onComplete`对协调图表动画和页面整体动画很有用.

The callback is passed a `Chart.Animation` instance:

这个回调函数 传递一个`Chart.Animation`实例

```javascript
{
    // Chart object
    chart: Chart,

    // Current Animation frame number 
    //当前动画帧号
    currentStep: Number,

    // Number of animation frames
    //动画帧数
    numSteps: Number,

    // Animation easing to use
    //动画效果
    easing: String,

    // Function that renders the chart
    //图表渲染函数
    render: Function,

    // User callback
    onAnimationProgress: Function,

    // User callback
    onAnimationComplete: Function
}
```

The following example fills a progress bar during the chart animation.

下面的例子是,在图表动画期间,填充进度条.

```javascript
var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        animation: {
            onProgress: function(animation) {
                progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
            }
        }
    }
});
```

Another example usage of these callbacks can be found on [Github](https://github.com/chartjs/Chart.js/blob/master/samples/advanced/progress-bar.html): this sample displays a progress bar showing how far along the animation is.

其他的使用这个回调函数的例子可以在[Github](https://github.com/chartjs/Chart.js/blob/master/samples/advanced/progress-bar.html)找到.
这个一个用进度条显示动画多长的例子.
