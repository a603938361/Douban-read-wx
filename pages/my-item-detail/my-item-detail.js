
import { MyModel } from '../../models/my.js'
import { LikeModel} from '../../models/like.js'

const myModel = new MyModel();
const likeModel = new LikeModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainData:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    const id = options.id
    const type = options.type
    this._requestMainData(id, type)
  },

  _requestMainData(id, type){
    myModel.getClassicDetail(type, id)
    .then(res=>{
      console.log(res)
      this.setData({
        mainData:res
      })
    })
  },

  onGetUserInfo(event){
    console.log(event)
  },

  clickLike(event){
    const behavier = event.detail.behavier;
    likeModel.like(behavier, this.data.mainData.id, this.data.mainData.type)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})