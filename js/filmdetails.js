/**
 * Created by Administrator on 2017/9/4.
 */
$(function () {
    // function queryString(){
        var id= location.search.slice(1);
        // var searchArr = search.split('&');
        // var o = {}; //
        // for (var i = 0; i < searchArr.length; i++) {
        //     var temp = searchArr[i].split('=');
        //     o[temp[0]] = temp[1];
        // }
        // return o;
    // }
    // var id=queryString().id;
    // console.log(id);
    $.ajax({
        type:'get',
        dataType:'jsonp',
        url:'https://api.douban.com/v2/movie/subject/'+id,
        success:function (data) {

            var htmlStr=template("filmdTem",data);
            $(".filmdetails").html(htmlStr);
        }
    })
})