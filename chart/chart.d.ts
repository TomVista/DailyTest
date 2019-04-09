interface Chart {
  defaults: {
    global: {
      /**
       * 是否响应父容器大小变化
       */
      responsive: boolean,
      /**
       * 响应父容器大小变化时播放动画的时间
       */
      responsiveAnimationDuration: number,
      /**
       * 原始宽/高比值
       *  * 如果在style中设置了父容器的高,此项不生效
       */
      aspectRatio:number,
      /**
       * 是否保持原始宽/高比例
       * * 此选项优先级比较高,通过js调整容器大小时需要此项为false,否则图表大小以宽高比和父容器宽度为准
       */
      maintainAspectRatio: boolean,

    }
  }
}