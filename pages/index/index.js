//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banner: [
      {
        id:1,
        url:"https://www.lgstatic.com/i/image2/M01/AB/6E/CgoB5l3WWmGAexGNAAFtTUcm04c444.JPG"
      },{
        id:2,
        url:"https://www.lgstatic.com/i/image2/M01/AB/65/CgoB5l3WTTOARkz9AAE4YrCdayI109.JPG"
      },{
        id:3,
        url:"https://www.lgstatic.com/i/image2/M01/AB/86/CgotOV3WTbGALTYQAAFpnvl-LjU469.JPG"
      }
    ],
    menu:[
      {
        title:'日常任务',
        id:'one',
        img:'../../static/images/icon_renwu.png'
      },{
        title: '直播LIVE',
        id:'two',
        img: '../../static/images/icon_zhibo.png'
      }, {
        title: '首发专场',
        id: 'three',
        img: '../../static/images/icon_shoufa.png'
      }, {
        title: '城市专场',
        id: 'four',
        img: '../../static/images/icon_chengshi.png'
      }
    ],
    list:[]
  },
  onLoad: function () {
    wx.setStorage({
      key: 'jobList',
      data: [
        {
          id: 1,
          src: 'https://www.lgstatic.com/thumbnail_120x120/i/image/M00/B1/1A/Cgp3O1i41miAcqAtAAFIpcEdu4s331.jpg',
          title: "前端开发 拼多多",
          company: "上市公司 2000以上 移动互联网",
          base: "上海 长宁区 3-5年 本科",
          time: "11月07日"
        },
        {
          id: 2,
          src: 'https://www.lgstatic.com/thumbnail_120x120/image1/M00/00/03/CgYXBlTUV_qALGv0AABEuOJDipU378.jpg',
          title: "前端开发 腾讯",
          company: "上市公司 2000以上 移动互联网",
          base: "深圳 3-5年 本科",
          time: "11月08日"
        },
        {
          id: 3,
          src: 'https://www.lgstatic.com/thumbnail_160x160/i/image2/M00/26/EF/CgoB5lof5AuADFWJAAAK3VU74GU045.png',
          title: "java 快手",
          company: "上市公司 2000以上 移动互联网",
          base: "北京 苏州街 3-5年 本科",
          time: "02月07日"
        },
        {
          id: 4,
          src: 'https://www.lgstatic.com/thumbnail_160x160/image1/M00/00/06/CgYXBlTUWAeANQBuAABHTL1SBa8889.jpg',
          title: "产品经理 去哪儿网",
          company: "上市公司 2000以上 移动互联网",
          base: "北京 海淀区 3-5年 本科",
          time: "02月07日"
        },
        {
          id: 5,
          src: 'https://www.lgstatic.com/thumbnail_160x160/image1/M00/00/03/CgYXBlTUV_uAY85GAAAVtFKXIv8322.jpg',
          title: "java 小米",
          company: "上市公司 2000以上 移动互联网",
          base: "北京 西二旗 1-3年 本科",
          time: "02月07日"
        }
      ]
    })
  },
  onShow: function () {
    var that = this;
    wx.getStorage({
      key: 'jobList',
      success: function(res) {
        that.setData({
          list: res.data
        })
      },
    })
  }
})
