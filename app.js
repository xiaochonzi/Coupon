//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    console.log('onLaunch')
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this
    console.log('start getUserInfo')
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          console.log(res)
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
      console.log('finish getUserInfo')
    }
  },

  globalData: {
    userInfo: null
  }
})
