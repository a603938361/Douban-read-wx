import {
  config
} from '../config.js'

const tips = {
  1:'错误代码1',  // 默认错误
  1005:'错误代码1005',
  1008:'错误代码1008'
}


class HTTP {
  request(params) {
    wx.request({
      url: config.apiUrl + params.url,
      method: params.method,
      data: params.data,
      header: {
        'Content-Type': 'application/json',
        appKey: config.appKey
      },
      success: (res) => {
        let code = res.statusCode.toString();
        if (code.startsWith('2')) {
          // 判断params中是否有success，如果有执行成功回调，反之不执行回调
          // 等同于
          // if(params.success){
          //   params.success(res.data);
          // }
          params.success && params.success(res.data);
        } else {
          this._show_error(res.data.errorcode)
        }
      },
      fail: (error) => {
        this._show_error(res.data.errorcode)
      }
    })
  }

  _show_error(errorcode){

    if(!errorcode){
      errorcode = 1;
    }

    wx.showToast({
      title: tips[errorcode],
    })
  }
}

export {
  HTTP
}