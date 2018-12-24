import {MyModel} from '../../models/my.js'

const myModel = new MyModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    login:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this._checkUserStatus();
  },

  _checkUserStatus(){
    wx.getSetting({
      success:res=>{
        if(res.authSetting['scope.userInfo']){  
          // 已登录
            this._getUserInfo();
        }else{
          // 未登录
          this.setData({
            login:false
          })
        }
      }
    })
  },

  _getUserInfo(){
    wx.getUserInfo({
      success:res=>{
        this.setData({
          userInfo:res.userInfo,
          login: true
        })
      }
    })
  },

  onGetUserInfo(event){
    this._checkUserStatus();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    myModel.getMyFavor()
      .then(res => {
        this.setData({
          favorDatas: res
        })
      })
  },

  itemClick(event){
    const id = event.detail.data.id
    const type = event.detail.data.type
    wx.navigateTo({
      url: `/pages/my-item-detail/my-item-detail?id=${id}&type=${type}`,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})