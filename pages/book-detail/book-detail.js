import {
    BookModel
} from '../../models/book.js'

import {
    LikeModel
} from '../../models/like.js'

const bookModel = new BookModel();
const likeModel = new LikeModel();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        posting: false,
        comment:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        const id = options.id;

        wx.showLoading({});

        const detail = bookModel.getBoolDetail(id)
        // .then(res => {
        //   console.log(res)
        //   this.setData({
        //     book:res
        //   })
        // })

        const favor = bookModel.getBookFavor(id)
        // .then(res => {
        //   this.setData({

        //   })
        // })

        const comment = bookModel.getBookComment(id)
        // .then(res => {
        //   this.setData({
        //     comment:res.comments
        //   })
        // })

        //  并行请求
        Promise.all([detail, favor, comment])
            .then(res => {
                console.log(res)
                this.setData({
                    book: res[0],
                    comment: res[2].comments
                })
                console.log(this.data)
                wx.hideLoading();
            })
    },

    onLike() {
        // 未完成
        const status = event.detail.behavier;
        likeModel.like(status, this.data.book.id, 400);
    },

    onFakePost() {
        this.setData({
            posting: !this.data.posting
        })
    },

    onCancel() {
        this.setData({
            posting: false
        })
    },

    onPost(event) {
        console.log(event)
        var text = event.detail.text || event.detail.value;
        if (text.length > 12) {
            text = text.substring(0, 12);
        }
        bookModel.postBookComment(this.data.book.id, text)
            .then(() => {
                wx.showToast({
                    title: "+1",
                })

                this.setData({
                    posting: false
                })
            })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

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