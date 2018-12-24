import {
  HTTP
} from '../utils/http-p.js'

class BookModel extends HTTP {
  getHotList(){
    return this.ruquest({
      url:'/book/hot_list'
    })
  }

  getMyBookCount(){
    return this.ruquest({
      url: '/book/favor/count'
    })
  }

  getBoolDetail(bid){
    return this.ruquest({
      url: `/book/${bid}/detail`
    })
  }

  getBookFavor(bid){
    return this.ruquest({
      url: `/book/${bid}/favor`
    })
  }

  getBookComment(bid){
    return this.ruquest({
      url: `/book/${bid}/short_comment`
    })
  }

    postBookComment(bid, text) {
        return this.ruquest({
            url: '/book/add/short_comment',
            method: "POST",
            data: {
                book_id: bid,
                content: text
            }
        })
    }

    getBookSearch(keyword){
        return this.ruquest({
            url: '/book/search',
            data: {
                q: keyword
            }
        })
    }
}

export { BookModel}