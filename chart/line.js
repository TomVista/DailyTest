 /**
  * chart.js曲线图---options
  */
 line.options = {
     /**
      * 动画配置
      */
     "animation": {
         /**
          * 动画进行时间
          */
         "duration": 1000,
         /**
          * 动画模式
          */
         "easing": "easeOutQuart",
         /**
          * @callback 动画完成回调
          */
         "onComplete": ƒ(),
         /**
          * @callback 动画完成每一步后回调
          */
         "onProgress": ƒ()
     },
     /**
      * 默认颜色
      */
     "defaultColor": "rgba(0,0,0,0.1)",
     /**
      * 默认字体颜色
      */
     "defaultFontColor": "#666",
     /**
      * 默认字体系列
      */
     "defaultFontFamily": "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
     /**
      * 默认字体大小
      */
     "defaultFontSize": 12,
     /**
      * 默认字体样式
      */
     "defaultFontStyle": "normal",
     /**
      * 元素配置
      */
     "elements": {
         /**
          * 饼图,圈图,极坐标图中曲线配置
          */
         "arc": {
             /**
              * 背景颜色
              */
             "backgroundColor": "rgba(0,0,0,0.1)",
             /**
              * 边框颜色
              */
             "borderColor": "#fff",
             /**
              * 边框宽度
              */
             "borderWidth": 2,
         },
         /**
          * 曲线图线的配置
          */
         "line": {
             /**
              * 背景颜色"rgba(0,0,0,0.1)"
              */
             "backgroundColor": "rgba(0,0,0,0.1)",
             /**
              * 用于描述线段终点"square","round","butt"
              */
             "borderCapStyle": "butt",
             /**
              * 边框颜色"rgba(0,0,0,0.1)"
              */
             "borderColor": "rgba(0,0,0,0.1)",
             /**
              * 用于描述虚线划分方式
              */
             "borderDash": [],
             "length": 0,
             /**
              * 虚线偏移量
              */
             "borderDashOffset": 0,
             /**
              * 描述线和线的连接处"round","bevel","miter".
              */
             "borderJoinStyle": "miter",
             /**
              * 边框宽度
              */
             "borderWidth": 3,
             /**
              * 贝塞尔曲线点是否控制到图表内
              */
             "capBezierPoints": true,
             /**
              * 是否填充
              */
             "fill": true,
             /**
              * 贝塞尔曲线张力
              */
             "tension": 0.4
         },
         /**
          * 曲线图线上的点和点图的点的配置
          */
         "point": {
             /**
              * 背景颜色
              */
             "backgroundColor": "rgba(0,0,0,0.1)",
             /**
              * 边框颜色
              */
             "borderColor": "rgba(0,0,0,0.1)",
             /**
              * 边框宽度
              */
             "borderWidth": 1,
             /**
              * 散点分部半径
              */
             "hitRadius": 1,
             /**
              * 悬浮事件触发时边框宽度增加量
              */
             "hoverBorderWidth": 1,
             /**
              * 悬浮事件触发时点的半径
              */
             "hoverRadius": 4,
             /**
              * 点的样式
              */
             "pointStyle": "circle",
             /**
              * 点的半径
              */
             "radius": 3
         },
         /**
          * 柱形图中,柱形的配置
          */
         "rectangle": {
             /**
              * 背景颜色
              */
             "backgroundColor": "rgba(0,0,0,0.1)",
             /**
              * 边框颜色
              */
             "borderColor": "rgba(0,0,0,0.1)",
             /**
              * 隐藏边框
              */
             "borderSkipped": "bottom",
             /**
              * 边框宽度
              */
             "borderWidth": 0
         }
     },
     /**
      * 弹出tooltip的事件
      */
     "events": [
         "mousemove",
         "mouseout",
         "click",
         "touchstart",
         "touchmove"
     ],
     /**
      * 鼠标悬停事件配置
      */
     "hover": {
         /**
          * 动画进行时间
          */
         "animationDuration": 400,
         /**
          * 设置以那个轴为准,触发hover事件
          */
         "axis": "x",
         /**
          * 是否横断,如果是true,只有鼠标悬停到元素上才会触发hover事件,否则鼠标附近最近的元素触发hover事件
          */
         "intersect": true,
         /**
          * 设置那些元素接收悬停
          */
         "mode": "label",
         /**
          * @callback hover事件的回调
          */
         "onHover": ƒ()
     },
     /**
      * 布局配置
      */
     "layout": {
         /**
          * 内边距
          */
         "padding": {
             "bottom": 0,
             "left": 0,
             "right": 0,
             "top": 0
         }
     },
     /**
      * 标签配置
      */
     "legend": {
         /**
          * 是否显示标签
          */
         "display": true,
         /**
          * 是否占满canvas宽度
          */
         "fullWidth": true,
         /**
          * 标签图形配置
          */
         "labels": {
             /**
              * 图形宽度
              */
             "boxWidth": 40,
             /**
              * 字体颜色
              */
             "fontColor": "rgb(255, 99, 132)",
             /**
              * 标签生成函数
              */
             "generateLabels": ƒ(chart),
             /**
              * 内边距 
              * */
             "padding": 10,
             /**
              * 是否使用圆型标签
              */
             "usePointStyle": true
         },
         /**
          * @event 标签点击事件
          */
         "onClick": ƒ(e, legendItem),
         /**
          * @event 标签鼠标悬停事件
          */
         "onHover": ƒ(),
         /**
          * 标签位置,非全局配置只能使用"top","bottom"
          */
         "position": "top",
         /**
          * 标签顺序是否和数据集相反
          */
         "reverse": false,
         /**
          * 宽度
          */
         "weight": 1000
     },
     "legendCallback": ƒ(e),
     /**
      * 重新调整大小时是否保持原始比例
      */
     "maintainAspectRatio": true,
     /**
      * @event 图表的点击事件
      */
     "onClick": null,
     /**
      * 插件配置
      */
     "plugins": {
         "filler": {
             "propagate": true
         }
     },
     /**
      * 是否动态调整大小
      */
     "responsive": true,
     /**
      * 动态调整动画进行时间
      */
     "responsiveAnimationDuration": 0,
     /**
      * 横纵坐标轴配置
      */
     "scales": {
         /**
          * x轴配置
          */
         "xAxes": [{
             /**
              * 是否显示轴
              */
             "display": true,
             /**
              * 轴线配置
              */
             "gridLines": {
                 /**
                  * 圆型轴线,只在雷达图中适用
                  */
                 //"circular":true
                 /**
                  * 虚线格式
                  */
                 "borderDash": [],
                 /**
                  * 虚线偏移
                  */
                 "borderDashOffset": 0,
                 /**
                  * 轴颜色
                  */
                 "color": "rgba(0, 0, 0, 0.1)",
                 /**
                  * 轴线是否显示
                  */
                 "display": true,
                 /**
                  * 是否启用轴和图的边距
                  */
                 "drawBorder": true,
                 /**
                  * 是否在轴线的区域内启用网格线
                  */
                 "drawOnChartArea": true,
                 /**
                  * 刻度线是否显示
                  */
                 "drawTicks": true,
                 /**
                  * 轴线宽度
                  */
                 "lineWidth": 1,
                 "offsetGridLines": false,
                 /**
                  * 刻度线的高度
                  */
                 "tickMarkLength": 10,
                 "zeroLineBorderDash": [],
                 "zeroLineBorderDashOffset": 0,
                 "zeroLineColor": "rgba(0,0,0,0.25)",
                 "zeroLineWidth": 1
             },
             /**
              * 轴id,格式特定,用于连接数据集和轴
              */
             "id": "x-axis-0",
             /**
              * 坐标偏移,并缩放至合适大小
              */
             "offset": false,
             /**
              * 轴的位置
              */
             "position": "bottom",
             /**
              * 轴线的名字配置,位于轴的下方正中间
              */
             "scaleLabel": {
                 /**
                  * 是否显示轴线名称
                  */
                 "display": false,
                 /**
                  * 轴线名称
                  */
                 "labelString": "",
                 /**
                  * 轴线名称行高
                  */
                 "lineHeight": 1.2,
                 /**
                  * 轴线名称定为
                  */
                 "padding": {
                     "bottom": 4,
                     "top": 4
                 }
             },
             /**
              * 轴上的刻度配置
              */
             "ticks": {
                 /**
                  * 自动配置轴上刻度数量.
                  * 如果超出显示范围则按某规则隐藏;
                  * 如果为false,显示所有刻度.
                  */
                 "autoSkip": true,
                 "autoSkipPadding": 0,
                 /**
                  * 坐标从零开始.
                  */
                 "beginAtZero": false,
                 "callback": ƒ(value),
                 /**
                  * 是否显示轴上刻度
                  */
                 "display": true,
                 "labelOffset": 0,
                 "major": {
                     "autoSkip": true,
                     "autoSkipPadding": 0,
                     "beginAtZero": false,
                     "callback": ƒ(value),
                     "display": true,
                     "labelOffset": 0,
                     "maxRotation": 50,
                     "minRotation": 0,
                     "mirror": false,
                     "padding": 0,
                     "reverse": false
                 },
                 /**
                  * 水平标签上的刻度文字最大旋转角度
                  */
                 "maxRotation": 50,
                 /**
                  * 水平标签上的刻度文字最小旋转角度
                  */
                 "minRotation": 0,
                 "minor": {
                     "autoSkip": true,
                     "autoSkipPadding": 0,
                     "beginAtZero": false,
                     "callback": ƒ(value),
                     "display": true,
                     "labelOffset": 0,
                     "maxRotation": 50,
                     "minRotation": 0,
                     "mirror": false,
                     "padding": 0,
                     "reverse": false
                 },
                 "mirror": false,
                 /**
                  * 标签和轴之间的距离
                  */
                 "padding": 0,
                 "reverse": false
             },
             /**
              * 轴类型,用来控制刻度格式
              */
             "type": "category"
         }],
         /**
          * y轴配置
          */
         "yAxes": [{
             "display": true,
             "gridLines": {
                 "borderDash": [],
                 "borderDashOffset": 0,
                 "color": "rgba(0, 0, 0, 0.1)",
                 "display": true,
                 "drawBorder": true,
                 "drawOnChartArea": true,
                 "drawTicks": true,
                 "lineWidth": 1,
                 "offsetGridLines": false,
                 "tickMarkLength": 10,
                 "zeroLineBorderDash": [],
                 "zeroLineBorderDashOffset": 0,
                 "zeroLineColor": "rgba(0,0,0,0.25)",
                 "zeroLineWidth": 1
             },
             "id": "y-axis-0",
             "offset": false,
             "position": "left",
             "scaleLabel": {
                 "display": false,
                 "labelString": "",
                 "lineHeight": 1.2,
                 "padding": {
                     "bottom": 4,
                     "top": 4
                 }
             },
             "ticks": {
                 "autoSkip": true,
                 "autoSkipPadding": 0,
                 "beginAtZero": false,
                 "callback": ƒ(tickValue, index, ticks),
                 "display": true,
                 "labelOffset": 0,
                 "major": {
                     "autoSkip": true,
                     "autoSkipPadding": 0,
                     "beginAtZero": false,
                     "callback": ƒ(tickValue, index, ticks),
                     "display": true,
                     "labelOffset": 0,
                     "maxRotation": 50,
                     "minRotation": 0,
                     "mirror": false,
                     "padding": 0,
                     "reverse": false
                 },
                 "maxRotation": 50,
                 "minRotation": 0,
                 "minor": {
                     "autoSkip": true,
                     "autoSkipPadding": 0,
                     "beginAtZero": false,
                     "callback": ƒ(tickValue, index, ticks),
                     "display": true,
                     "labelOffset": 0,
                     "maxRotation": 50,
                     "minRotation": 0,
                     "mirror": false,
                     "padding": 0,
                     "reverse": false
                 },
                 "mirror": false,
                 "padding": 0,
                 "reverse": false
             },
             "type": "linear"
         }]
     },
     "showLines": true,
     "spanGaps": false,
     /**
      * 图表标题配置
      */
     "title": {
         /**
          * 是否显示标题
          */
         "display": false,
         /**
          * 标题样式
          */
         "fontStyle": "bold",
         /**
          * 是否占据图表宽度
          */
         "fullWidth": true,
         /**
          * 标题行高
          */
         "lineHeight": 1.2,
         /**
          * 标题内边距
          */
         "padding": 10,
         /**
          * 标题位置
          */
         "position": "top",
         /**
          * 标题名称
          */
         "text": "",
         /**
          * 标题宽度
          */
         "weight": 2000
     },
     /**
      * 提示框配置
      */
     "tooltips": {
         "axis": "x",
         /**
          * 提示框的背景颜色
          */
         "backgroundColor": "rgba(0,0,0,0.8)",
         /**
          * 主体文字对齐方式
          */
         "bodyAlign": "left",
         /**
          * 主体文字颜色
          */
         "bodyFontColor": "#fff",
         /**
          * 主体每个提示行的间距
          */
         "bodySpacing": 2,
         /**
          * 边框颜色
          */
         "borderColor": "rgb(1,2,3)",
         /**
          * 边框宽度
          */
         "borderWidth": 10,
         "callbacks": {
             "afterBody": ƒ(),
             "afterFooter": ƒ(),
             "afterLabel": ƒ(),
             "afterTitle": ƒ(),
             "beforeBody": ƒ(),
             "beforeFooter": ƒ(),
             "beforeLabel": ƒ(),
             "beforeTitle": ƒ(),
             "footer": ƒ(),
             "label": ƒ(tooltipItem, data),
             "labelColor": ƒ(tooltipItem, chart),
             "labelTextColor": ƒ(),
             "title": ƒ(tooltipItems, data),
         },
         /**
          * 提示框箭头定位
          */
         "caretPadding": 10,
         /**
          * 提示框箭头大小
          */
         "caretSize": 10,
         /**
          * 提示框圆角弧度
          */
         "cornerRadius": 10,
         /**
          * 自定义提示框生成函数
          */
         "custom": null,
         /**
          * 是否显示标签颜色提示
          */
         "displayColors": true,
         /**
          * 是否启用提示
          */
         "enabled": true,
         /**
          * 页脚对齐方式
          */
         "footerAlign": "left",
         /**
          * 页脚字体颜色
          */
         "footerFontColor": "#fff",
         /**
          * 页脚字体样式
          */
         "footerFontStyle": "bold",
         /**
          * 页脚上边距
          */
         "footerMarginTop": 6,
         /**
          * 页脚中的行间距
          */
         "footerSpacing": 2,
         /**
          * 只有鼠标悬停到元素上才显示提示框
          */
         "intersect": false,
         /**
          * 提示框中显示的元素的选择方法
          */
         "mode": "index",
         "multiKeyBackground": "#000",
         /**
          * 提示框定位方式
          */
         "position": "average",
         /**
          * 标题对齐方式
          */
         "titleAlign": "left",
         /**
          * 标题字体颜色
          */
         "titleFontColor": "#fff",
         /**
          * 标题字体样式
          */
         "titleFontStyle": "bold",
         /**
          * 标题的下边距
          */
         "titleMarginBottom": 6,
         /**
          * 多行标题的行间距
          */
         "titleSpacing": 2,
         /**
          * 横向内边距
          */
         "xPadding": 6,
         /**
          * 纵向内边距
          */
         "yPadding": 6
     }
 }