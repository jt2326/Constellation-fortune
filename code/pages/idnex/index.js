// pages/idnex/index.js
var list=[]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images:[
"https://img.xingzuo.com/picture/images/0/69/69757_20180921141951852_1.jpg","https://img.xingzuo.com/picture/images/0/69/69757_20180921141951555_1.jpg","https://img.xingzuo.com/picture/images/0/69/69757_20180921141951570_1.jpg","https://img.xingzuo.com/Picture/images/201809216367313638028030093831389.jpg","https://img.xingzuo.com/Picture/images/201809216367313638090527468188997.jpg","https://img.xingzuo.com/picture/images/0/69/69757_20180921141951820_1.jpg","https://img.xingzuo.com/Picture/images/201809216367313638141630166275083.jpg","https://img.xingzuo.com/Picture/images/201809216367313638060841009631862.jpg","https://img.xingzuo.com/picture/images/0/69/69757_20180921141951836_1.jpg","https://img.xingzuo.com/Picture/images/201809216367313638135379735490236.jpg","https://img.xingzuo.com/Picture/images/201809216367313638103027655460519.jpg","https://img.xingzuo.com/Picture/images/201809216367313638112402929190531.jpg",
    ],
    imagepath:"https://img.xingzuo.com/picture/images/0/69/69757_20180921141951852_1.jpg",
    constellation:"白羊座",
    constellation_list: ["白羊座","金牛座","双子座","巨蟹座","狮子座","处女座","天秤座","天蝎座","射手座","摩羯座","水瓶座","双鱼座"],
    constellation_info:{},
    index : 0,
    wH:"",
  },
  bindPickerChange(e) {
    // console.log('picker发送选择改变，携带值为',     e.detail.value)
    this.setData({
      index: e.detail.value
    })
    this.setData({
      imagepath: this.data.images[this.data.index]
    })
    this.getinfo(this.data.constellation_list[this.data.index])
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx,wx.getSystemInfo({
      success: function(res) {
        that.setData({
          wH:res.windowHeight+"px"
        })
        that.getinfo(that.data.constellation)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  getinfo: function (constellation_listitem) {
    var that = this
    wx.request({
      url: 'http://web.juhe.cn:8080/constellation/getAll?consName='+constellation_listitem+'&type=today&key=00d880387c639ff5f2957b004f2a79ca',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          constellation_info:res.data
        })
      }
    })
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})