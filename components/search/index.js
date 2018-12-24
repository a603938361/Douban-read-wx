// components/search/index.js

import {
    KeyWordModel
} from '../../models/keyword.js'

import {
    BookModel
} from '../../models/book.js'

const keyWordModel = new KeyWordModel();
const boolModel = new BookModel();

Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        historyWords: [],
        hotWords: [],
        searchDataView: false,
        searchKey:null,
        showNoData:false
    },

    attached() {
        const historyWords = keyWordModel.getHistory();
        this.setData({
            historyWords: historyWords
        })

        keyWordModel.getHot()
            .then(res => {
                console.log(res)
                this.setData({
                    hotWords: res.hot
                })
            })
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onCancel() {
            if (this.data.searchDataView) {
                this.setData({
                    searchDataView: false
                })
            } else {
                this.triggerEvent('cancel')
            }
            this.setData({
                searchKey: ''
            })
        },

        confirm(event) {
            const word = event.detail.value;
            this._search(word);
        },

        onClearnText() {
            this.setData({
                searchKey:''
            })
        },

        tagClick(event) {
            const word = event.detail.text;
            this._search(word);
        },

        _search(text) {
            wx.showLoading({});

            keyWordModel.addToHistory(text)
            this.setData({
                searchDataView: true,
                searchKey: text,
                searchResultsBook:[]
            })
            boolModel.getBookSearch(text)
                .then(res => {
                    console.log(res.total)
                    this.setData({
                        searchResultsBook: res.books,
                    })
                    if(res.total == 0){
                      this.setData({
                        showNoData:true
                      })
                    }else{
                      this.setData({
                        showNoData: false
                      })
                    }
                    wx.hideLoading();
                })

        }
    }
})