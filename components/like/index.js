// components/like/index.js

// like 组件
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: Boolean,
    count: Number,
    readOnly:Boolean
    // count:{
    //     type:Number,
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeImg: 'images/like.png',
    noLikeImg: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(event) {

      if(this.properties.readOnly) return 

      let like = this.properties.like;
      let count = this.properties.count;
      count = like ? count-1 : count + 1;
      this.setData({
        count:count,
        like:!like
      })

      let behavier = this.properties.like ? 'like':'cancel';
      // 激活事件，传递给最上层
      this.triggerEvent('func', {
        behavier: behavier
      }, {});
    }
  }
})