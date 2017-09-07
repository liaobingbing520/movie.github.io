/**
 * Created by Administrator on 2017/9/4.
 */
$(function () {
    // 北美票房榜
    function render4(page) {
        $.ajax({
            url: "https://api.douban.com/v2/movie/us_box",
            type: 'get',
            dataType:'jsonp',
            data:{
                // count:page||18,
            },
            success:function (data) {
                //console.log(data);
                var htmlStr=template("usBox",data);
                $(".foreignpage").html(htmlStr);
            }
        });
    }
    render4();
    // var page=18;
    // $(window).on('scroll',function() {
    //     /*距离顶部的偏移*/
    //     var offsetTop = $('.foreignpage').offset().top;
    //
    //     /*页面滚动的距离*/
    //     var scrollTop = document.body.scrollTop;
    //     /*当前窗口的高*/
    //     var windowHeight = $(window).height();
    //     if ((offsetTop - scrollTop - windowHeight) < 80) {
    //         page += 18
    //         render4(page);
    //     }
    // })
});
$(function () {
    $(".foreignpage").on("click",'.lists',function () {
        var id=$(this).data("id");
        location.href='../static/filmdetails.html?'+id;
    })
})