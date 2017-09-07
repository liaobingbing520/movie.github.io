/**
 * Created by Administrator on 2017/9/4.
 */
$(function () {
    // top250数据渲染
    function render3(page) {
        $.ajax({
            url: "https://api.douban.com/v2/movie/top250",
            type: 'get',
            dataType:'jsonp',
            data:{
                count:page||18,
            },
            success:function (data) {
                var htmlStr=template("top250",data);
                $(".top250page").html(htmlStr);
            }
        });
    }
    render3();
    var page=18;
    $(window).on('scroll',function() {
        /*距离顶部的偏移*/
        var offsetTop = $('.top250page').offset().top;

        /*页面滚动的距离*/
        var scrollTop = document.body.scrollTop;
        console.log(scrollTop);
        /*当前窗口的高*/
        var windowHeight = $(window).height();
        if ((offsetTop - scrollTop - windowHeight) < 100) {
            page += 18
            render3(page);
        }
    })

})
$(function () {
    $(".top250page").on("click",'.lists',function () {
        var id=$(this).data("id");
        location.href="../static/filmdetails.html?"+id;
    })
})