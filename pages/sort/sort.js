// pages/sort/sort.js
Page({

    /**
     * 页面的初始数据
     */
    

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(option) {
        const posts = [{
          
           imgSrc:"/images/b1.jpg",
                 
       },{
       
        imgSrc:"/images/b3.jpg",
          
       
         imgSrc1:"/images/b4.jpg",
        
   },{
   
    imgSrc:"/images/b5.jpg",
   
     imgSrc1:"/images/b6.jpg",
    
   }]
       
       this.setData({
           posts
       })
       console.log(posts)
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