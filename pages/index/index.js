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
    categoryList:[{CategoryID:"",CategoryName:"其他"},{CategoryID:"all",CategoryName:"全部"}],
    selectCategory:"all",
    showCategoryName:"全部",
    selectIndex:0,
    inputContent:""
  },
  onLoad: function (options) {
    this.getCategoryList()
    console.log('onLoad')
  },
  getCategoryList:function(){
    var that = this
    wx.request({
      url: 'https://taoquan.cillbiz.com/GetCategory.ashx',
      data:{
        "Acount":{
          "UserName":app.globalData.Acount.UserName,
          "Password": app.globalData.Acount.Password
        }
      },
      method:"POST",
      success:function(resp){
        if(resp.data.Result=="请求成功"){
          that.setData({
            categeoryList:resp.data.Categorys.concat(that.data.categoryList),
            selectIndex:resp.data.Categorys.length + 1
          })
        }
      }
    })
  }
})
