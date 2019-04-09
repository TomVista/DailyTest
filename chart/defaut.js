/* 默认配置 */
var defaults = {
  /* 全局配置 */
  global: {
    responsive: true,
    responsiveAnimationDuration: 0,
    maintainAspectRatio: true,
    events: [
      'mousemove',
      'mouseout',
      'click',
      'touchstart',
      'touchmove'
    ],
    hover: {
      onHover: null,
      mode: 'nearest',
      intersect: true,
      animationDuration: 400
    },
    onClick: null,
    defaultColor: 'rgba(0, 0, 0, 0.1)',
    defaultFontColor: '#666',
    defaultFontFamily: "'Helvetica Neue','Helvetica','Arial',sans-serif",
    defaultFontSize: 12,
    defaultFontStyle: 'normal',
    showLines: true,
    elements: {
      arc: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderColor: '#fff',
        borderWidth: 2
      },
      line: {
        tension: 0.4,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 3,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: 'miter',
        capBezierPoints: true,
        fill: true
      },
      point: {
        radius: 3,
        pointStyle: 'circle',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderColor: ' rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        hitRadius: 1,
        hoverRadius: 4,
        hoverBorderWidth: 1
      },
      rectangle: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderSkipped: 'bottom',
        borderWidth: 0
      }
    },
    layout: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    plugins: {
      filler: {
        propagate: true
      }
    },
    animation: {
      duration: 1000,
      easing: 'easeOutQuart'
    },
    tooltips: {
      enabled: true,
      custom: null,
      mode: 'nearest',
      position: 'average',
      intersect: true,
      backgroundColor: ' rgba(0, 0, 0, 0.8)',
      titleFontStyle: 'bold',
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleFontColor: '#fff',
      titleAlign: 'left',
      bodySpacing: 2,
      bodyFontColor: '#fff',
      bodyAlign: 'left',
      footerFontStyle: 'bold',
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFontColor: '#fff',
      footerAlign: 'left',
      yPadding: 6,
      xPadding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      multiKeyBackground: '#fff',
      displayColors: true,
      borderColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 0,
      callbacks: {}
    },
    legend: {
      display: true,
      position: 'top',
      fullWidth: true,
      reverse: false,
      weight: 1000,
      onHover: null,
      labels: {
        boxWidth: 40,
        padding: 10
      }
    },
    title: {
      display: false,
      fontStyle: 'bold',
      fullWidth: true,
      lineHeight: 1.2,
      padding: 10,
      position: 'top',
      text: '',
      weight: 2000
    }
  },
/* 坐标轴 */
  scale: {
    display: true,
    position: 'left',
    offset: false,
    gridLines: {
      display: true,
      color: 'rgba(0, 0, 0, 0.1)',
      lineWidth: 1,
      drawBorder: true,
      drawOnChartArea: true,
      drawTicks: true,
      tickMarkLength: 10,
      zeroLineWidth: 1,
      zeroLineColor: 'rgba(0, 0, 0, 0.25)',
      zeroLineBorderDash: [],
      zeroLineBorderDashOffset: 0,
      offsetGridLines: false,
      borderDash: [],
      borderDashOffset: 0
    },
    scaleLabel: {
      display: false,
      labelString: '',
      lineHeight: 1.2,
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      beginAtZero: false,
      minRotation: 0,
      maxRotation: 50,
      mirror: false,
      padding: 0,
      reverse: false,
      display: true,
      autoSkip: true,
      autoSkipPadding: 0,
      labelOffset: 0,
      minor: {},
      major: {}
    }
  },
/* 柱形图 */
  bar: {
    hover: {
      mode: 'label'
    },
    scales: {
      xAxes: [{
        type: 'category',
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        offset: true,
        gridLines: {
          offsetGridLines: true
        }
      }],
      yAxes: [{
        type: 'linear'
      }]
    }
  },
/* 水平柱形图 */
  horizontalBar: {
    hover: {
      mode: 'index',
      axis: 'y'
    },
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom'
      }],
      yAxes: [{
        position: 'left',
        type: 'category',
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        offset: true,
        gridLines: {
          offsetGridLines: true
        }
      }]
    },
    elements: {
      rectangle: {
        borderSkipped: 'left'
      }
    },
    tooltips: {
      callbacks: {},
      mode: 'index',
      axis: 'y'
    }
  },
/* 点阵图 */
  bubble: {
    hover: {
      mode: 'single'
    },
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom',
        id: 'x - axis - 0'
      }],
      yAxes: [{
        type: 'linear',
        position: 'left',
        id: 'y - axis - 0'
      }]
    },
    tooltips: {
      callbacks: {}
    }
  },
/* 环图 */
  doughnut: {
    animation: {
      animateRotate: true,
      animateScale: false
    },
    hover: {
      mode: 'single'
    },
    legend: {
      labels: {}
    },
    cutoutPercentage: 50,
    rotation: -1.5707963267948966,
    circumference: 6.283185307179586,
    tooltips: {
      callbacks: {}
    }
  },
/* 饼图,圆形统计图 */
  pie: {
    animation: {
      animateRotate: true,
      animateScale: false
    },
    hover: {
      mode: 'single'
    },
    legend: {
      labels: {}
    },
    cutoutPercentage: 0,
    rotation: -1.5707963267948966,
    circumference: 6.283185307179586,
    tooltips: {
      callbacks: {}
    }
  },
/* 曲线图 */
  line: {
    showLines: true,
    spanGaps: false,
    hover: {
      mode: 'label'
    },
    scales: {
      xAxes: [{
        type: 'category',
        id: 'x - axis - 0'
      }],
      yAxes: [{
        type: 'linear',
        id: 'y - axis - 0'
      }]
    }
  },
/* 极坐标图 */
  polarArea: {
    scale: {
      type: 'radialLinear',
      angleLines: {
        display: false
      },
      gridLines: {
        circular: true
      },
      pointLabels: {
        display: false
      },
      ticks: {
        beginAtZero: true
      }
    },
    animation: {
      animateRotate: true,
      animateScale: true
    },
    startAngle: -1.5707963267948966,
    legend: {
      labels: {}
    },
    tooltips: {
      callbacks: {}
    }
  },
/* 雷达图 */
  radar: {
    scale: {
      type: 'radialLinear'
    },
    elements: {
      line: {
        tension: 0
      }
    }
  },
/* 曲线图没有线只有点的图 */
  scatter: {
    hover: {
      mode: 'single'
    },
    scales: {
      xAxes: [{
        id: 'x - axis - 1',
        type: 'linear',
        position: 'bottom'
      }],
      yAxes: [{
        id: 'y - axis - 1',
        type: 'linear',
        position: 'left'
      }]
    },
    showLines: false,
    tooltips: {
      callbacks: {}
    }
  }
}
