import {
  HTTP
} from '../utils/http-p.js'

class KeyWordModel extends HTTP {

  key = 'q'
  maxLen = 10;

  getHistory() {
    const words = wx.getStorageSync(this.key)
    if (!words) {
      return [];
    } else {
      return words;
    }
  }

  getHot() {
    return this.ruquest({
      url: '/book/hot_keyword'
    })
  }

  addToHistory(keyword) {

    let words = this.getHistory()
    const has = words.includes(keyword)
    if (!has) {
      const length = words.length;
      if (length >= this.maxLen) {
        words.pop();
      }

      words.unshift(keyword)
      wx.setStorage({
        key: this.key,
        data: words,
      })
    }
  }
}

export {
  KeyWordModel
}