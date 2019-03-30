//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js');

Page({
  data: {
    boxNumber: '',
    code: '',
    src: '',
    title: '',
    memberId: '',
    loadSuccess:false
  },
  onLoad: function (options) {
    var that=this;
    var global_url = app.globalData.serverUrl;
    var scene = options.scene;
    var src = "";
    wx.showToast({
      title: '请扫码进入！',
      icon: 'none'
    });
    if (scene){
      scene = decodeURIComponent(scene);
      // scene ="138a4689dc5ab14,8";
      if(scene.indexOf(",") != -1){
        console.log("scene.indexOf");
        //将scene（138a4689dc5ab14,0）根据逗号(,)拆分成数组params[0]:boxNumber,params[1]:code
        var params = scene.split(",");
        if (params && params.length > 1) {
          this.setData({
            //0：四国坦克，1：雷霆战车，2：坦克争霸战，3：摇色子
            boxNumber: params[0],
            code: params[1]
          })
            // if (this.data.code == 0) {
            //   src = global_url +"/tank/index.html?boxNumber=" + this.data.boxNumber + "&redirectUrl=/tank/index.html&specialCode=228901";
            // } else if (this.data.code == 1) {
            //   src = global_url +"/gamepad/index.html?boxNumber=" + this.data.boxNumber;
            // } else if (this.data.code == 2) {
            //   src = global_url +"/tank_battle/index.html?boxNumber=" + this.data.boxNumber;
            // } else if (this.data.code == 3) {
            //   src = global_url +"/deadly_dice/index.html?boxNumber=" + this.data.boxNumber;
            // } else if (this.data.code == 4) {
            //   src = global_url +"/KQ_adventure/index.html?boxNumber=" + this.data.boxNumber;
            // } else if (this.data.code == 5) {
            //   src = global_url + "/Braver_Adventure/index.html?boxNumber=" + this.data.boxNumber;
            // } else if (this.data.code == 6) {
            //   src = global_url + "/egg_protect/index.html?boxNumber=" + this.data.boxNumber;
            // } else if (this.data.code == 7) {
            //   src = global_url + "/egret/index.html?boxNumber=" + this.data.boxNumber;
            // }
          wx.request({
            url: global_url + '/wxbackstage/game/getGamePadUrl/' +this.data.code, 
            data: {
              gameCode:this.data.code,
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success(res) {
              console.log(res.data);
              src = res.data.data.gamePadUrl + "?boxNumber=" + that.data.boxNumber;//获得从后台发来的游戏链接
              // src = "http://192.168.0.91:8080/h5/game_lp.html?boxNumber=138a4689dc5ab14"
              console.log("从后台发来的游戏链接：");
              console.log(src);
              that.setData({
                src: src
              });
              //判断是否加载本地首页
              if (that.data.src == '') {
                console.log("src的值为1：" + that.data.src);
                that.setData({
                  loadSuccess: false
                })
              } else {
                console.log("src的值为2：" + that.data.src);
                that.setData({
                  loadSuccess: true
                })
              }
            }
          });
            app.globalData.code = this.data.code
          }
        } else {
          this.setData({
            boxNumber: scene,
            src: global_url +"/tank/index.html?boxNumber=" + scene + "&redirectUrl=/tank/index.html&specialCode=228901"
          })
        }
        app.globalData.boxId = this.data.boxNumber;
      };

      
      console.log("boxNumber:" + this.data.boxNumber + ",code:" + this.data.code + ",src:" + this.data.src);
      
    
  },
  getUserInfo: function (e) {

  },
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  bindmessage: function (e) {
    this.setData({ //存储状态
      title: e.detail
    })
  }, 
  // 请求数据
  getData: function () {
    
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  //将数据保存到缓存
  setValue: function (page) {
    //获取缓存的信息
    wx.setStorageSync('');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log(this.data.title)
    this.data.title = memberId
  }

})