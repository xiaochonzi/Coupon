// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    couponInfo:{},
    picWidth:wx.getSystemInfoSync().windowWidth,
    platformTypeUrl:"../../images/taobao.png",
    loadingBtn:false,
    showStatus:false,
    taoKouLing:"",
    maxLength:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      couponInfo:wx.getStorageSync('couponInfo')
    })
    if(this.data.couponInfo.PlatformType=="天猫"){
      this.setData({
        platformTypeUrl:"../../images/tmall.png"
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    wx.setStorageSync("isDetailBack", true)
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
  
  },
  hideView:function(){
    this.setData({
      showStatus:false
    })
  },
  getCoupon:function(options){
    var that = this
    that.setData({
      loadingBtn:true
    })
    wx.request({
      url:"",
      data:{
        "itemId": that.data.couponInfo.ItemId,
        "couponId": that.data.couponInfo.CouponId,
      },
      method:"POST",
      success:function(ret){
        if(ret.data.result == 1){
          that.setData({

          })
        }
      }
    })
  }
})