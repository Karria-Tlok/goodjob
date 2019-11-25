// pages/resume/resume.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:"../../static/images/icon_touxiang.png",
    information:[{
      id:1,
      key:'姓名',
      value:'刘慕白'
    },{
      id: 2,
      key: '性别',
      value: '男'
    },{
      id: 3,
      key: '最高学历',
      value: '本科'
    },{
      id: 4,
      key: '工作年限',
      value: '5年'
    },{
      id: 5,
      key: '所在城市',
      value: '北京'
    },{
      id: 6,
      key: '联系电话',
      value: '13811112222'
    },{
      id: 7,
      key: '一句话描述',
      value: '不怕吃苦，不怕吃亏'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    var that = this;
    wx.getStorage({
      key: 'userImgUrl',
      success: function (res) {
        that.setData({
          imgUrl: res.data
        })
      },
    })
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

  },


  handleClickPicture: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res) => {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        
        wx.setStorage({
          key: 'userImgUrl',
          data: tempFilePaths
        })
        
        that.setData({ imgUrl: tempFilePaths })
        this.onShow();
      }
    })
    // var that = this;
    // wx.getStorage({
    //   key: 'userImgUrl',
    //   success: function (res) {
    //     that.setData({
    //       imgUrl: res.data
    //     })
    //   },
    // })
  }
  
})