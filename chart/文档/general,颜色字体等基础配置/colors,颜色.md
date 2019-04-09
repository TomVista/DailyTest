# Colors

# 颜色

When supplying colors to Chart options, you can use a number of formats. You can specify the color as a string in hexadecimal, RGB, or HSL notations. If a color is needed, but not specified, Chart.js will use the global default color. This color is stored at `Chart.defaults.global.defaultColor`. It is initially set to `'rgba(0, 0, 0, 0.1)'`

你可以使用多种格式来指定图表选项中的颜色.你可以使用十六进制,RGB或者HSL符号来规定颜色字符串的格式.如果没有提供颜色,Chart.js会使用全局默认颜色.这个全局默认颜色存储在`Chart.defaults.global.defaultColor`.颜色初始值为`'rgba(0, 0, 0, 0.1)'`(不透明的灰色).

You can also pass a [CanvasGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient) object. You will need to create this before passing to the chart, but using it you can achieve some interesting effects.

你也可以传递一个[CanvasGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient)对象.你需要在传递给表格之前创建它.使用它能实现一些有意思的东西.

## Patterns and Gradients

## 模式和渐变

An alternative option is to pass a [CanvasPattern](https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern) or [CanvasGradient](https://developer.mozilla.org/en/docs/Web/API/CanvasGradient) object instead of a string colour.

另一种方法是传递[CanvasPattern](https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern)(图案) or [CanvasGradient](https://developer.mozilla.org/en/docs/Web/API/CanvasGradient)(渐变颜色)对象代替字符串格式颜色.

For example, if you wanted to fill a dataset with a pattern from an image you could do the following.

例:如果你想使用图片中的图案来填充背景颜色,你可以按照下面来做[示例](../../fillPattern).

```javascript
var img = new Image();
img.src = 'https://example.com/my_image.png';
img.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var fillPattern = ctx.createPattern(img, 'repeat');

    var chart = new Chart(ctx, {
        data: {
            labels: ['Item 1', 'Item 2', 'Item 3'],
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: fillPattern
            }]
        }
    })
}
```

Using pattern fills for data graphics can help viewers with vision deficiencies (e.g. color-blindness or partial sight) to [more easily understand your data](http://betweentwobrackets.com/data-graphics-and-colour-vision/).

使用图案填充数据图像能够帮助视力不足的用户(例:色盲或局部视力)[更好的理解你的数据](http://betweentwobrackets.com/data-graphics-and-colour-vision/).

Using the [Patternomaly](https://github.com/ashiguruma/patternomaly) library you can generate patterns to fill datasets.

使用[Patternomaly](https://github.com/ashiguruma/patternomaly)库可以帮你生成图案来填充数据集.

```javascript
var chartData = {
    datasets: [{
        data: [45, 25, 20, 10],
        backgroundColor: [
            pattern.draw('square', '#ff6384'),
            pattern.draw('circle', '#36a2eb'),
            pattern.draw('diamond', '#cc65fe'),
            pattern.draw('triangle', '#ffce56'),
        ]
    }],
    labels: ['Red', 'Blue', 'Purple', 'Yellow']
};
```