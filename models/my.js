import {
  HTTP
} from '../utils/http-p.js'

class MyModel extends HTTP {
  getMyFavor() {
    return this.ruquest({
      url: '/classic/favor'
    })
  }

  getClassicDetail(type, id){
    return this.ruquest({
      url: `/classic/${type}/${id}`
    })
  }
}

export {
  MyModel
}