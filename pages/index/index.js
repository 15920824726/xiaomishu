//index.js
//获取应用实例
const app = getApp()
import initCalendar from '../../template/calendar/index';

const set_calendar = {
  multi: false, // 是否开启多选,
  disablePastDay: true, // 是否禁选过去日期,
  afterTapDay: (currentSelect) => {
    console.log(currentSelect)
   }
}

const conf = {
  onShow: function () {
    initCalendar(set_calendar); // 使用默认配置初始化日历
  }
};

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    svgUrl: ''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow: function () {
    initCalendar(set_calendar); // 使用默认配置初始化日历
    this.setData({
      svgUrl: ''
    })
  },
  login: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 进入菜单页面
  goMenu: function() {
    console.log('okok')
    wx.navigateTo({
      url: '../menu/menu'
    })
  },

  goMenu1: function() {
    // 查看是否授权
    wx.getUserInfo({
      success: function (res) {
        console.log(res.userInfo)
      }
    })
  }


})
