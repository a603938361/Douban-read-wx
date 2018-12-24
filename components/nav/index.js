// components/nav/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
  },

  /**
   * 组件的初始数据
   */
  data: {

    first: true,
    laster: true,
    leftSrc: 'images/triangle.dis@left.png',
    leftSrc_sel: 'images/triangle@left.png',
    rightSrc: 'images/triangle.dis@right.png',
    rightSrc_sel: 'images/triangle@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft(event){
      this.properties.first && this.triggerEvent('left', {}, {})
    },
    onRight(event){
      this.properties.laster && this.triggerEvent('right', {}, {})
    }
  }
})
