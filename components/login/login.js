// components/login/login.js

const app = getApp()

Component({
  externalClasses: ['my-class'],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 微信登录
    WXlogin(e) {
      if(e.detail.userInfo) {
        // 已授权
        wx.login
      }else {
        // 未授权
        wx.showToast({
          title: '请接受授权操作后再进行登录！',
          mask: true,
          icon: "none"
        })
      }
    }
  }
})
