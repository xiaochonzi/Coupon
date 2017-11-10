// pages/list/list.js
var config = require('../../config.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cat:{},
    itemList:[],
    loadOver:false,
    isLoading:true,
    pageNo:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cat:wx.getStorageSync('cat')
    })
    this.getItem()
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
      itemList: [],
      loadOver: false,
      isLoading: true,
      pageNo: 1
    })
    this.getItem()
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      isLoading: true,
      loadOver: false,
      pageNo:this.data.pageNo+1
    })
    this.getItem()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getItem:function(){
    var that = this
    wx.request({
      url: config.goods_item,
      data:{
        cat:that.data.cat.cid,
        page_no:that.data.pageNo
      },
      success:function(resp){
        if(resp.data.result==1){
          that.setData({
            itemList:that.data.itemList.concat(resp.data.data),
            isLoading: false
          })
        }else{
          that.setData({
            isLoading: true,
            loadOver: true
          })
        }
      }
    })
  },
  setItem:function(e){
    wx.setStorageSync('item', e.currentTarget.dataset.item)
  }
})