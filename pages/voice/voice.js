Page({
  data:{
    // text:"这是一个页面"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数


    var that = this;

    wx.request({
  url: 'https://route.showapi.com/255-1',
  data: {
     page: '1' ,
     showapi_appid: '19791',
     type:'31',
     showapi_sign:'BAFEDEB29FC86D76D329B00415AC50D8'
  },
  method: 'GET', 
  header: {
      'Content-Type': 'application/json'
  },
  success: function(res) {
      console.log(res.data)
    if(res.data.showapi_res_code == 0){
that.setData({
         hidden1: true,
          satins:res.data.showapi_res_body.pagebean.contentlist
      })
    }else{
      that.setData({
          toast2Hidden:false,
          msg:res.data.showapi_res_error,
      })
    }
  }
})
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  loadMore:function(){
    console.log('aaa');
  },
refesh:function(){
  console.log('bbb');
},


playVoice:function(e){
  wx.playBackgroundAudio({
      dataUrl: e.currentTarget.dataset.voiceuri
    })
}
})