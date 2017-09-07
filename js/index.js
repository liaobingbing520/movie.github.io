/**
 * Created by Administrator on 2017/9/3.
 */
//轮播图
$(function(){
    // 轮播图
    TouchSlide({
        slideCell:"#indexFlashTel",
        titCell:".btnDiv", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell:".bd ul",
        effect:"leftLoop",
        autoPage:true,//自动分页
        autoPlay:true //自动播放
    });
})
//尾部导航
$(function () {
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
        arrows:true,
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
});
  // 正在热映数据渲染
$(function () {
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
        var id =$(this).data("id")
        location.href ="static/filmdetails.html?"+id;
    })
})
$(function () {
    // 即将上映数据渲染
    $.ajax({
        url: "https://api.douban.com/v2/movie/coming_soon",
        type: 'get',
        dataType: 'jsonp',
        data:{
            count:3,
        },
        success:function (data) {
            //console.log(data);
            var htmlStr=template("comingsoon",data);
            $(".cominglists").html(htmlStr);
        }
    });
    $(".cominglists").on("click", '.movie2', function () {
        var id=$(this).data("id")
        location.href ="static/filmdetails.html?"+id;
    })
})
    $(function () {
        // top250数据渲染
        $.ajax({
            url: "https://api.douban.com/v2/movie/top250",
            type: 'get',
            dataType:'jsonp',
            data:{
                count:3,
            },
            success:function (data) {
                var htmlStr=template("top250",data);
                $(".toplists").html(htmlStr);
            }
        });
        $(".toplists").on("click", '.movie3', function () {
            var id=$(this).data("id")
            location.href ="static/filmdetails.html?"+id;
        })
    })


$(function () {
    // 北美票房榜
    $.ajax({
        url: "https://api.douban.com/v2/movie/us_box",
        type: 'get',
        dataType:'jsonp',
        data:{
            stars:3,
        },
        success:function (data) {
            //console.log(data);
            var htmlStr=template("usBox",data);
            $(".foreignlists").html(htmlStr);
        }
    });
    $(".foreignlists").on("click", '.movie4', function () {
        var id=$(this).data("id")
        location.href ="static/filmdetails.html?"+id;
    })
})

