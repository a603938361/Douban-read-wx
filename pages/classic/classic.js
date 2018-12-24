// pages/classic/classic.js
import { ClassicModel } from '../../models/classic.js'
import { LikeModel } from '../../models/like.js'

let classic = new ClassicModel();
let likeModel = new LikeModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic:null,
    first:false,
    laster:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    classic.getLatest(res=>{
      this.setData({
        classic:res
      })
    })
  },

  clickLike(event){
    let behiver = event.detail.behavier;
    likeModel.like(behiver, this.data.classic.id, this.data.classic.type);
  },

  onPrivice:function(){
    classic.getClassic(this.data.classic.index, '/previous', (res)=>{
      console.log(res)
      this.setData({
        classic: res
      })
    })
  },

  onNext:function(){
    classic.getClassic(this.data.classic.index, '/next', (res) => {
      console.log(res)
      this.setData({
        classic: res
      })
    })
  },

  

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})