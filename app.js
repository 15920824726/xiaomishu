//app.js
/*
  模块 共用js  
  自定义组件(注意-数组中:一次刷新,更新新的改变属性是数据不会变化)
*/
import URL from './config/url'
import { ENV } from './config/env'

App({
  onLaunch: function () {
    // 展示本地存储能力
    wx.getSystemInfo({
      success: function(res) {
        wx.setStorageSync('dpr', res.pixelRatio > 2 ? 3: 2)
      },
    })
  },
  api: URL[ENV],
  globalData: {
    userInfo: null
  }
})