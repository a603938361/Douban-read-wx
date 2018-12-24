import {
  HTTP
} from '../utils/http.js'

class ClassicModel extends HTTP {

  // 获取首页最新数据
  getLatest(callback) {
    this.request({
      url: '/classic/latest',
      success: (res) => {
        callback(res)
        this._setLasterIndex(res.index)
      }
    })
  }
  //  获取上一期或者下一期数据
  getClassic(index, nextOrProve, callback) {
    this.request({
      url:  `/classic/${index}${nextOrProve}`,
      success: (res) => {
        callback(res)
      }
    })
  }

  isFirst(index) {
    return index == 1 ? true : false;
  }

  isProcice(index) {
    let lasterIndex = this._getLasterIndex();
    console.log(index)
    return lasterIndex == index ? true : false;
  }

  _setLasterIndex(index) {
    wx.setStorageSync('laster', index)
  }

  _getLasterIndex() {
    return wx.getStorageSync('laster')
  }

}

export {
  ClassicModel
}