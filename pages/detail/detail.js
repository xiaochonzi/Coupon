// pages/detail/detail.js
var util = require("../../utils/util.js")
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    couponInfo:{},
    picWidth:wx.getSystemInfoSync().windowWidth,
    loadingBtn:false,
    showStatus:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      couponInfo:wx.getStorageSync('couponInfo')
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
  getCoupon:function(e){
    var that = this
    var item_url = that.data.couponInfo.item_url
    var index = item_url.indexOf(':')
    item_url = 'https'+item_url.substring(index)
    wx.request({
      url: 'https://xiaochonzi.com/api/coupon_tkl',
      data:{
        text:'特价精选',
        url:item_url
      }, 
      dataType: 'json',
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(resp){
        console.log(resp)
      }
    })
  }
})