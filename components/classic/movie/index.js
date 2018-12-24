// components/classic/movie/index.js
import { classicBeh } from '../classic-beh.js'

// 首页电影组件
Component({
  /**
   * 组件的属性列表
   */

  behaviors: [classicBeh],
  
  properties: {
    img:String,
    content:String,
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

  }
})