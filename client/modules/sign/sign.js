/**
 * Created by DEV on 2016/6/21.
 */
/**
 * Created by DEV on 2016/6/21.
 */

var Jquery = $ = require("jquery");

$("html").on('click',"#sign_submit",function(){
    var register_password =  $("#sign_password").val();
    var name =  $("#sign_name").val();
    var information = {
        name:name,
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
            alert("登陆成功!");
        },
        error: function (data) {
            alert("登陆失败!");
        }
    });

});
