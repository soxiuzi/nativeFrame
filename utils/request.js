// const app = getApp();

// // 不需要进行身份验证的接口
// const notNeedAuthorization = [
//   "192.168.1.100:8080",
//   "192.168.1.100:8081",
// ]

// /**
//  * 使用promise封装request请求
//  * @param { String } urlRole 请求的角色，例：login（登录系统），service（业务系统）
//  * @param { String } url 请求地址 例：'/tutor/getTutorInfos'
//  * @param { String } method 请求方式 例：GET,POST
//  * @param { Object } data 请求数据 例：{ key: value }
//  */
// const request = (urlRole, url, method, data) => {
//   let urlPath = urlRole == 'login' && app.globalData.loginUrlPath ||
//     urlRole == 'service' && app.globalData.serviceUrlPath ||
//     urlRole == 'pay' && app.globalData.payUrlPath;
//   if(notNeedAuthorization.includes(urlPath)) {
//     return new Promise(function(resolve, reject) {
//       wx.request({
//         url: `${urlPath}${url}`,
//         method: method,
//         data: data,
//         header: {
//           "Content-type": "application/json"
//         },
//         success: function(res) {
//           resolve(res)
//         },
//         fail: function(err) {
//           reject(err)
//         }
//       })
//     })
//   }else {
//     return new Promise(function(resolve, reject) {
//       wx.request({
//         url: `${urlPath}${url}`,
//         method: method,
//         data: data,
//         header: {
//           'Authotrization': app.globalData.token
//         },
//         success: function(res) {
//           resolve(res)
//         },
//         fail: function(err) {
//           reject(err)
//         }
//       })
//     })
//   }
// }

// export default request;

class request {
  baseUrl

  constructor() {
    this.baseUrl = 'http://192.168.1.100:8080'
  }

  requestAll() {
    return new Promise(function(resolve, reject) {
      
    })
  }
}

export default request