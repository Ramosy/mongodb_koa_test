/**
 * Created by DEV on 2016/6/21.
 */

var Jquery = $ = require("jquery");

$("html").on('click',"#register_submit",function(){
    var register_password =  $("#register_password").val();
    var register_password_again =  $("#register_password_again").val();
    var name =  $("#register_name").val();
    var mobile =  $("#register_mobile").val();
    var card =  $("#register_card").val();
    if(!(register_password == register_password_again)){alert("两次密码输入不一致!");return;}
    var information = {
        name:name,
        password:register_password_again,
        mobile:mobile,
        card:card
    };
    //空判断
    for(key in information){
        if(!information[key]){
            alert(key+"不能为空!");
            return;
        }
    }
    $.ajax({
        type:"post",
        url:"api/register",
        dataType:"json",
        cache:false,
        data:information,
        success:function(data){
            alert("成功注册!");
        },
        error: function (data) {
            alert("注册失败!");
        }
    });

});
