//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: this.globalData.serverUrl+'/wxbackstage/wechat/getOpenId',
          data: {
            code: res.code
          },
          header: {
            "Content-Type": "application/json"
          },
          success: res => {
            this.globalData.openId = res.data.data.openId;
            console.log(this.globalData.openId);
          }
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo;
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              };
            }
          })
        }else{
          console.log("用户信息未获得成功")
        }
      }
    })
    // 获取手机系统信息
    wx.getSystemInfo({
      success: res => {
        //导航高度
        this.globalData.navHeight = res.statusBarHeight + 46;
      }, fail(err) {
        console.log(err);
      }
    })
  },
  globalData: {
    navHeight:"",
    userInfo: null,
    openId: "",
    memberId: "",
    boxId: "",
    code: "",
    serverUrl: 'https://game.hdiandian.com' // 测试地址
    // serverUrl: 'https://h5.hdiandian.com', // 正式地址 memberId: "94180",boxId: "408d5cbc1371",11
  }
})