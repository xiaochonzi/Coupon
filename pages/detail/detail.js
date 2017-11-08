// pages/detail/detail.js
var util = require("../../utils/util.js")
var config = require('../../config.js')
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
    password:'',
    maxLength:0
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
    that.setData({
      loadingBtn:true
    })
    var item_url = that.data.couponInfo.coupon_click_url
    var index = item_url.indexOf(':')
    item_url = 'https'+item_url.substring(index)
    wx.request({
      url: config.coupon_tkl,
      data:{
        text:'新优惠新体验',
        url:item_url
      }, 
      dataType: 'json',
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(resp){
        if(resp.data.result==1){
          that.setData({
            password:resp.data.data,
            showStatus:true,
            loadingBtn:false,
            maxLength:resp.data.data.length
          })
        }
      }
    })
  }
})