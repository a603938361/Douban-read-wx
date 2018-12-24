import { classicBeh} from '../classic-beh.js'

const mMgr = wx.getBackgroundAudioManager();

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],

  properties: {
    src:String,
    title:String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing:false,
    playSrc: 'images/player@play.png',
    pauseSrc: 'images/player@pause.png'
  },

  attached:function(){
    console.log('attachted')
    this._checkMusicState();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickMusic:function(){

      if(this.data.playing){
        this.setData({
          playing: false
        })
        mMgr.pause();
      }else{
        this.setData({
          playing: true
        })
        mMgr.src = this.properties.src;
        mMgr.title = this.properties.title;
      }
    },

    _checkMusicState:function(){

      if(mMgr.src == this.properties.src){
        this.setData({
          playing: true
        })
      }else{
        this.setData({
          playing: false,
        })
      }
    }
  }
})
