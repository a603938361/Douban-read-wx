// components/book/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book:Object,
    // 是否显示喜欢
    showLike:{
        type: Boolean,
        value:true
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(){
      wx.navigateTo({
        url: `/pages/book-detail/book-detail?id=${this.properties.book.id}`,
      })
    }
  }
})
