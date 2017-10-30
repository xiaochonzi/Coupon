//index.js
//获取应用实例
var util = require("../../utils/util.js")
var app = getApp()
Page({
  data: {
    couponList:[],
    pageIndex:0,
    isLoading:true,
    loadOver:false,
    categoryList:[{cid:'all',name:'全部',pic:'all'}],
    selectCategory:'16',
    showCategoryName:"全部",
    selectCategoryPic:'all',
    selectIndex:0,
    inputContent:""
  },
  onLoad: function (options) {
    //页面载入
    this.getCategoryList()
  },
  onShow:function(){
    //页面展示
    if(wx.getStorageSync('isDetailBack')){
      wx.removeStorageSync('isDetailBack')
      return
    }
    this.setData({
      couponList:[],
      pageIndex:0,
      isloading:true,
      loadOver:false
    })
    this.getCouponList()
  },
  getCouponList:function(){
    //获取优惠商品
    var that = this
    wx.request({
      url: 'https://xiaochonzi.com/api/item',
      data:{
        q:that.data.inputContent,
        cat:that.data.selectCategory,
        page_no:that.data.pageIndex
      },
      dataType:'json',
      method:'GET',
      header:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(resp){
        if(resp.data.result==1){
          that.setData({
            isLoading: false,
            couponList: resp.data.data.concat(that.data.couponList)
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
  getCategoryList:function(){
    //获取分类
    var that = this
    wx.request({
      url: 'https://xiaochonzi.com/api/cate',
      data:{
      },
      method:"GET",
      success:function(resp){
        if(resp.data.result==1){
          that.setData({
            categoryList: resp.data.data.concat(that.data.categoryList)
          })
        }
      }
    })
  },
  bindPickerChange:function(e){
    var that = this
    that.setData({
      couponList:[],
      loadOver:false,
      isLoading:true,
      pageIndex:0,
      selectIndex:e.detail.value,
      selectCategory:that.data.categoryList[e.detail.value].cid,
      showCategoryName:that.data.categoryList[e.detail.value].name
    })
    that.getCouponList()
  },
  selectByCategory:function(e){
    //按分类查询
    var that = this
    that.setData({
      couponList:[],
      pageIndex:0,
      isLoading:true,
      loadOver:false,
      selectCategory:e.currentTarget.dataset.categoryId,
    })
    that.getCouponList()
  },
  inputChange:function(e){
    var that = this
    that.setData({
      inputContent:e.detail.value
    })
  },
  selectByItemName:function(e){
    var that = this
    that.getCouponList()
  },
  setCouponInfo:function(e){
    var coupon = this.data.couponList[e.currentTarget.dataset.index]
    wx.setStorageSync('couponInfo',coupon)
  },
  onPullDownRefresh:function(){
    this.setData({
      couponList:[],
      loadOver:false,
      isLoading:true,
      pageIndex:0
    })
    this.getCouponList()
    wx.stopPullDownRefresh()
  },
  onReachBottom:function(){
    this.setData({
      isLoading:true,
      loadOver:false,
      pageIndex:this.data.pageIndex+1
    })
    this.getCouponList()
  }
})
