/**
 * Created by DEV on 2016/6/21.
 */
/**
 * Created by DEV on 2016/6/21.
 */

var Jquery = $ = require("jquery");

$("html").on('click',"#sign_submit",function(){
    var register_password =  $("#sign_password").val();
    var card =  $("#sign_card").val();
    var information = {
        card:card,
        password:register_password
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
        url:"api/sign",
        dataType:"json",
        cache:false,
        data:information,
        success:function(data){
            if(data.status){
                alert("登陆成功!");
                window.location.href  = "/";
            }else {
                alert(data.result.errorInfo);
            }

        },
        error: function (data) {
            alert("登陆失败!");
        }
    });

});
