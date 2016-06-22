/**
 * Created by DEV on 2016/6/21.
 */
var Jquery = $ = require("jquery");
$("#subMessage").click(function(){
    var information = {
        name:$("#name").val(),
        age:$("#age").val(),
        company:$("#company").val()
    };

    $.ajax({
        type:"post",
        url:"api/test",
        dataType:"json",
        cache:false,
        data:information,
        success:function(data){
            alert("成功发送信息!");
            $("#subMessage").append(JSON.stringify(data));
        },
        error: function (data) {
            alert("发送信息失败!");
            $("#subMessage").append(JSON.stringify(data));
        }
    });

});