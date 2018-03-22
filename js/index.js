/**
 * Created by Administrator on 2017/9/3.
 */
//swiper3轮播

window.onload=function () {
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        autoplay: 2000,//可选选项，自动滑动
        autoplayDisableOnInteraction : false, //解决拖动后的不自动轮播
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',

    })
}
//尾部导航
   function navlist() {
       $('.slider-for').slick({
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows: false,
           fade: true,
           asNavFor: '.officeImg',
       });
       //
       $('.officeImg').slick({
           infinite: false,
           arrows: true,
           focusOnSelect: true,
           asNavFor: '.slider-for',
           speed: 300,
           slidesToShow: 4,
           slidesToScroll: 1,
           responsive: [
               {
                   breakpoint: 800,
                   settings: {
                       slidesToShow: 3,
                       slidesToScroll: 3,
                       infinite: true,
                       dots: false
                   }
               }
           ]
       });
   };
       navlist()

  //轮播影片
function lunbo() {
    $.ajax({
        url:'https://api.douban.com/v2/movie/in_theaters',
        dataType:'jsonp',
        type:'get',
        data:{
            count:6
        },
        // beforeSend:function () {
        //
        // },
        success:function (data) {
            var htmlStr=template('lunbolist',data);
            $(".swiper-wrapper").html(htmlStr);
        }
    });
    $(".swiper-wrapper").on("click",".swiper-slide",function () {
         var id=$(this).data("id");
         location.href="static/filmdetails.html?"+id;
    })
}
lunbo();
  // 正在热映数据渲染
function in_theaters() {
    $.ajax({
        url: 'https://api.douban.com/v2/movie/in_theaters',
        dataType: "jsonp",
        type: 'get',
        data: {
            count: 3,
        },
        success: function (data) {
            var htmlStr = template("intheaters", data);
            $(".soonlists").html(htmlStr);
        },
    });
    $(".soonlists").on("click", '.movie1', function () {
        var id = $(this).data("id")
        location.href = "static/filmdetails.html?" + id;
    });
};
    in_theaters()
function coming_soon() {
    // 即将上映数据渲染
    $.ajax({
        url: "https://api.douban.com/v2/movie/coming_soon",
        type: 'get',
        dataType: 'jsonp',
        data: {
            count: 3,
        },
        success: function (data) {
            //console.log(data);
            var htmlStr = template("comingsoon", data);
            $(".cominglists").html(htmlStr);
        }
    });
    $(".cominglists").on("click", '.movie2', function () {
        var id = $(this).data("id")
        location.href = "static/filmdetails.html?" + id;
    });
};
    coming_soon()
    function top250() {
        // top250数据渲染
        $.ajax({
            url: "https://api.douban.com/v2/movie/top250",
            type: 'get',
            dataType: 'jsonp',
            data: {
                count: 3,
            },
            success: function (data) {
                var htmlStr = template("top250", data);
                $(".toplists").html(htmlStr);
            }
        });
    };
        $(".toplists").on("click", '.movie3', function () {
            var id=$(this).data("id")
            location.href ="static/filmdetails.html?"+id;
        });
        top250()

function us_box() {
    // 北美票房榜
    $.ajax({
        url: "https://api.douban.com/v2/movie/us_box",
        type: 'get',
        dataType: 'jsonp',
        data: {
            stars: 3,
        },
        success: function (data) {
            var htmlStr = template("usBox", data);
            $(".foreignlists").html(htmlStr);
        }
    });
};
    $(".foreignlists").on("click", '.movie4', function () {
        var id=$(this).data("id")
        location.href ="static/filmdetails.html?"+id;
    })
    us_box();

function searchs() {
    // 搜索框
    $(window).on("scroll", function () {
        var searchsTop = $(".searchs").offset().top;
        // 页面滚动的距离
        var scrollTop = document.body.scrollTop;
        var windowHei = $(window).height()
        if (windowHei - searchsTop < scrollTop) {
            $(".searchs").css({'position': 'fixed', "top": 50})
        } else {
            $(".searchs").css({'position': 'relative', 'top': 0})
        }
    });
    $('#ss').on("click", function () {
        var inpt = $("#inpt").val();
        if (inpt.length != 0) {
            if (inpt.match(/^[\u4e00-\u9fa5]+$/)) {
                location.href = "static/search.html?" + encodeURIComponent(inpt);//跳转前需要转码
                $("#inpt").val("");
            } else {
                alert('请输入中文名');

            }

        }
    })
};
searchs();

