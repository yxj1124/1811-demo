
require('./modules/a')

//取cookie的封装函数
function getCookie(key){
	var str=document.cookie;
	if(str){//如果cookie存在 根据key取对应的值
		str=str.replace(/\s/g,"");//去掉cookie中的空格
		var arr=str.split(";");//将字符串拆成数组
		for(var i=0;i<arr.length;i++){
			var item=arr[i].split("=");
			if(item[0]==key){
				return item[1];
			}
		}
		//循环结束后 如果没有找到对应的key  返回"";
		return "";
	}
	//cookie 不存在 返回""
	return "";
}
//取cookie 
$("#login").click(function(){
	 var str=getCookie("userlist");
    console.log(document.cookie);
    var arr=JSON.parse(str);
    var cookieName=arr[0].username;
   var  cookiePwd=arr[0].userpwd;
    var strName1=$("#uname").val();
    var strPwd1=$("#password").val();
    if(cookieName==strName1&&cookiePwd==strPwd1){
		alert("登录成功");
		location.href="/index/index.html";

    }else{
        alert("用户名或密码错误");
        
    }
})
 //选项卡效果
 $(".nav-one-box").on("mouseenter", function(){
	var This = $(this);
	This.addClass('nav-one-box-on');
	This.find(".dh-show-tab").show();
    $(".zhezhao").show();
});
   
$(".nav-one-box").on("mouseleave", function(){
	$(this).removeClass('nav-one-box-on');
	$(this).find(".dh-show-tab").hide();
    $(".zhezhao").hide();
});