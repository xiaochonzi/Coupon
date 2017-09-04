//index.js
//获取应用实例
var util = require("../../utils/util.js")
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    couponList:[],
    pageIndex:0,
    isLoading:true,
    loadOver:false,
    categoryList:[{CateGoryID:"",CategoryName:"其他"},{CateGoryID:"all",CategoryName:"全部"}],
    selectCategory:"all",
    selectIndex:0,
    inputContent:""
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  getCategoryList:function(){
    var that = this
    wx.request({
      url: '',
      data:{
        "account":''
      },
      method:'POST',
      success:function(ret){
        if(ret.data.result==1){
          that.setData(
            {
              
            }
          )
        }
      }
    })
  },
  bindPickerChange:function(e){
    this.setData(
      {

      }
    )
    if(!false){
      wx.setStorageSync('showCategoryName','all')
    }else{
      wx.setStorageSync('showCategoryName', 'other')
    }
  },
  getMoreCouponList:function(){

  },
  onPullDownRefresh:function(){
    wx.stopPullDownRefresh()
    console.log('onPullDownRefresh')
    this.getMoreCouponList()
  },
  onReachBottom:function(){
    console.log('onReachBottom')
    this.getMoreCouponList()
  }
})
