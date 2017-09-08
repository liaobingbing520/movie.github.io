/**
 * Created by Administrator on 2017/9/8.
 */
$(function () {
    //搜索
    var id= location.search.slice(1);
    var idd=decodeURIComponent(id);//跳转后需要进行中文转码
    $.ajax({
        type:'get',
        dataType:'jsonp',
        url:'https://api.douban.com/v2/movie/search?q='+idd,
        success:function (data) {
            var srthtml=template('searchTep',data);
            $(".filmdetails").html(srthtml);
            $(".jieg").html("为您查询到"+data.total+"条数据")
        }
    })

})