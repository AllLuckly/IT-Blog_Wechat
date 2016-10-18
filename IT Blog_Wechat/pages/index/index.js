//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    newList:[{url:"baidu.com",title:"微信小程序开发教程-从零开始（1）",classification:"微信小程序",time:"2016-10-17",imgURL:"../../image/wechatHL.png"},
             {url:"baidu.com",title:"Swift3.0学习系列之Swift实战-单例模式",classification:"投稿",time:"2016-10-17",imgURL:"../../image/wechatHL.png"},
             {url:"baidu.com",title:"Swift3.0学习系列之Swift实战-享元模式",classification:"投稿",time:"2016-10-17",imgURL:"../../image/wechatHL.png"},
             {url:"baidu.com",title:"iOS开发之iOS10推送必看(高阶2)",classification:"投稿",time:"2016-10-17",imgURL:"../../image/wechatHL.png"},
             {url:"baidu.com",title:"iOS开发之UITextField的那点事",classification:"投稿",time:"2016-10-17",imgURL:"../../image/wechatHL.png"},
             {url:"baidu.com",title:"iOS开发之iOS10推送必看(高阶1)",classification:"投稿",time:"2016-10-17",imgURL:"../../image/wechatHL.png"},
             {url:"baidu.com",title:"iOS开发之iOS10推送必看(基础篇)",classification:"投稿",time:"2016-10-17",imgURL:"../../image/wechatHL.png"},
             {url:"baidu.com",title:"iOS开发之Xcode8兼容适配iOS 10资料整理笔记",classification:"投稿",time:"2016-10-17",imgURL:"../../image/wechatHL.png"},
             {url:"baidu.com",title:"Xcode8开发iOS10推送通知过程",classification:"投稿",time:"2016-10-17",imgURL:"../../image/wechatHL.png"},
             {url:"baidu.com",title:"iOS开发之按钮动画",classification:"投稿",time:"2016-10-17",imgURL:"../../image/wechatHL.png"}
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }

})
