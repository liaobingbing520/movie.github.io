/**
 * Created by Administrator on 2017/9/4.
 */
$(function () {
    function render2(page) {
        //即将上映数据渲染
        $.ajax({
            url: "https://api.douban.com/v2/movie/coming_soon",
            type: 'get',
            dataType: 'jsonp',
            data:{
                count:page||18,
            },
            success:function (data) {
                console.log(data);
                var htmlStr=template("comingsoon",data);
                $(".comingsoonpage").html(htmlStr);
                // var lists=$(".lists");

            }
        });

    }
    render2();
    var page=18;
    $(window).on('scroll',function(){
        /*距离顶部的偏移*/
        var offsetTop = $('.pages').offset().top;

        /*页面滚动的距离*/
        var scrollTop = document.body.scrollTop;
        /*当前窗口的高*/
        var windowHeight = $(window).height();
        if((offsetTop-scrollTop-windowHeight) < 100 ){
            page+=18
            render2(page);
        }

    });

})
$(function () {
    $(".comingsoonpage").on("click",".lists",function () {
        //https://api.douban.com/v2/movie/subject/1470865
               var id=$(this).data("id");
                //console.log(id);
                location.href="../static/filmdetails.html?"+id;
    })
})