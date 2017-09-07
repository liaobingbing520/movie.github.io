/**
 * Created by Administrator on 2017/9/4.
 */

    $(function () {
        // 正在热映数据渲染
        function render1(page) {
            $.ajax({
                url: 'https://api.douban.com/v2/movie/in_theaters',
                dataType: "jsonp",
                type: 'get',
                data: {
                    count:page||18,
                },
                success: function (data) {
                    var htmlStr = template("intheaters", data);
                    $(".hotshowingpage").html(htmlStr)
                }
            });
        }
        render1();
           var page=18;
           $(window).on('scroll',function(){
               /*距离顶部的偏移*/
               var offsetTop = $('.hotshowingpage').offset().top;

               /*页面滚动的距离*/
               var scrollTop = document.body.scrollTop;
               /*当前窗口的高*/
               var windowHeight = $(window).height();
               if((offsetTop-scrollTop-windowHeight) < 100 ){
                   page+=18
                   render1(page);
               }

           });
    });
    $(function () {
        $(".hotshowingpage").on("click",'.lists',function () {
            var id=$(this).data("id");
            location.href="../static/filmdetails.html?"+id;
        })
    })







