Page({
  data: {
    userImgUrl: '../../static/images/icon_touxiang.png',
    array1:[{
      id:1,
      value:"简历",
      img:'../../static/images/icon_jianli.png',
      link:'/pages/resume/resume'
    }, {
      id: 2,
      value: "机会",
      img: '../../static/images/icon_jihui.png',
      link: '/pages/resume/resume'
    }],
    array2: [{
      id: 1,
      value: "收藏",
      img: '../../static/images/icon_shoucang.png',
      link: '/pages/resume/resume'
    }, {
      id: 2,
      value: "意见反馈",
      img: '../../static/images/icon_yijian.png',
      link: '/pages/resume/resume'
    }, {
      id: 3,
      value: "设置",
      img: '../../static/images/icon_shezhi.png',
      link: '/pages/resume/resume'
    }]
  },
  onLoad: function () {
    wx.getStorage({
      key: 'userImgUrl',
      success: (res) =>{
        this.setData({
          userImgUrl: res.data
        })
      },
    })
    
  },
  onShow: function(){
    wx.getStorage({
      key: 'userImgUrl',
      success: (res) =>{
        this.setData({
          userImgUrl: res.data
        })
      },
    })
  }
})