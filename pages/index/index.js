// pages/index/index.js
var config = require('../../config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageWidth:wx.getSystemInfoSync().windowHeight,
    currentCateId:"16",
    couponList:[],
    query:'',
    pageNo:1,
    isLoading:true,
    loadOver:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCouponList()
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
    this.setData({
      couponList:[],
      loadOver:false,
      isLoading:true,
      pageNo:1
    })
    this.getCouponList()
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      isLoading:true,
      loadOver:false,
      pageNo:this.data.pageNo+1
    })
    this.getCouponList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getCouponList:function(){
    var that = this
    wx.request({
      url: config.coupon_item,
      data:{
        'q': that.data.query,
        'cat':that.data.currentCateId,
        'page_no':that.data.pageNo
      },
      method:'GET',
      dataType:'json',
      success:function(resp){
        if(resp.data.result==1){
          that.setData({
            couponList:that.data.couponList.concat(resp.data.data),
            isLoading:false,
          })
        }else{
          that.setData({
            isLoading:true,
            loadOver:true
          })
        }
      }
    })
  },
  selectByCate: function(e){
    console.log(e)
    var that = this
    that.setData({
      couponList: [],
      isLoading:true,
      loadOver:false,
      currentCateId:e.currentTarget.dataset.cateId,
    })
    that.getCouponList()
  }
})