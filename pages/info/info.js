// pages/info/info.js
var util = require("../../utils/util.js")
var config = require('../../config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{},
    pic:[],
    loadingBtn: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      item: wx.getStorageSync('item')
    })
    var item = that.data.item
    var pic = []
    if (item.small_images==null){
      pic.push(item.pict_url);
    }else{
      pic = item.small_images.string
    }
    that.setData({
      pic:pic
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
  
  },
  getTkl:function(){
    var that = this
    that.setData({
      loadingBtn: true
    })
    var item_url = that.data.item.item_url
    var index = item_url.indexOf(':')
    item_url = 'https' + item_url.substring(index)
    wx.request({
      url: config.item_tkl,
      data: {
        text: '新优惠新体验',
        url: item_url
      },
      dataType: 'json',
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (resp) {
        if (resp.data.result == 1) {
          wx.setClipboardData({
            data: resp.data.data,
            success: function (res) {
              wx.showToast({
                title: '淘口令复制成功，打开手机淘宝即可获取优惠券～',
                icon: 'success',
                duration: 2000
              })
            }
          })
          that.setData({
            loadingBtn: false
          })
        }
      }
    })
  }
})