// components/epsolider/epsolider.js

// 首页左上角时间组件
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type: String,
      observer:function(newVal, oldVal, path){
        let val = newVal<10 ? '0'+newVal : newVal;
        this.setData({
          _index:val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    year:0,
    mouth:'',
    _index:'',
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  },

  attached:function(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    //console.log(this.data.months[month])
    this.setData({
      year:year,
      month: this.data.months[month]
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
