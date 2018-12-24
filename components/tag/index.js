// components/tag/index.js
Component({
  /**
   * 组件的属性列表
   */

  // 启动组件中的插槽
  options:{
    multipleSlots:true
  },

  externalClasses:[
    "tag-class"
  ],

  properties: {
    text:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
      tagClick() {
          this.triggerEvent('tag', { text: this.properties.text }, {});
      }
  }
})
