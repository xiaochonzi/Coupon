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
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo()
  }
})
