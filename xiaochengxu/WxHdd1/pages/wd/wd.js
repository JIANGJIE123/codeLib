var app = getApp();
const util = require('../../utils/util.js');
Page({
  data: {
    show: "",//扫码
    userInfo: {
      avatarUrl: "",//用户头像
      nickName: ""//用户昵称
    },
    navH:""
  },
  wdjqFunc() {
    wx.navigateTo({
      url: 'wdjq/wdjq',
    })
  },
  wdidFunc() {
    wx.navigateTo({
      url: 'wdid/wdid',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      navH: app.globalData.navHeight
    }) 
  },
  click: function () {
    var that = this;
    var show;
    wx.scanCode({
      success: (res) => {
        this.show = { "path": "pages/index?query=1", "width": 430 }
        that.setData({
          show: this.show
        })
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: (res) => {
        wx.showToast({
          title: '失败',
          icon: 'success',
          duration: 2000
        })
      },
      complete: (res) => {

      }
    })
  },
  bing: function () {
    wx.request({
      url: '',
      header: {

      },
      success: function (res) {
        console.log(res.data);
      }
    })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
}) 