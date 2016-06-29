/**
 * Created by DEV on 2016/6/21.
 */
var Jquery = $ = require("jquery");
$("#find").click(function(){
    var information = {
        name:$("#name").val(),
        password:$("#password").val(),
        mobile:$("#mobile").val()
    };

    $.ajax({
        type:"post",
        url:"api/findOne",
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
$("#add").click(function(){
    var information = {
        name:$("#name").val(),
        password:$("#password").val(),
        mobile:$("#mobile").val()
    };

    $.ajax({
        type:"post",
        url:"api/add",
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
$("#delete").click(function(){
    var information = {
        name:$("#name").val(),
        password:$("#password").val(),
        mobile:$("#mobile").val()
    };

    $.ajax({
        type:"post",
        url:"api/delete",
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
$("#update").click(function(){
    var information = {
        name:$("#name").val(),
        password:$("#password").val(),
        mobile:$("#mobile").val()
    };

    $.ajax({
        type:"post",
        url:"api/findOne",
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