//获取页面元素
function $id(id){
    return document.getElementById(id)
}
//获取随机数
function  rand(min,max){
    return Math.round(Math.random()*(max-min)+min)
}
//存cookie的函数
function setCookie(key,value,days){
	var now = new Date();
	now.setTime(now.getTime() + days*24*60*60*1000 ) 
	document.cookie=key+"="+value + ";expires="+now+";Path="+escape("/");
}
//验证
var fm=document.querySelector("form");

 //判断密码是否正确
 var flagPwd=null;
 $id("password").onkeyup=function(){
     var strPwd=$id("password").value;
     var regNum=/^\d+$/;
     var regZi=/^[a-z]+$/i;
     var regTs=/^[^0-9a-z]+$/i;
     //包含
     var _regNum=/\d+/;
     var _regZi=/[a-z]+/i;
     var _regTs=/[^0-9a-z]+/i;
     
     $id("r").style.backgroundColor="white";
     $id("z").style.backgroundColor="white";
     $id("q").style.backgroundColor="white";
     if(strPwd.length<5){
         return;
     }
     if(regNum.test(strPwd)||regZi.test(strPwd)||regTs.test(strPwd)){
         $id("r").style.backgroundColor="rgb(177, 84,79)";
     }else if(_regNum.test(strPwd)&&_regZi.test(strPwd)&&_regTs.test(strPwd)){
         $id("q").style.backgroundColor="orange";
         
     }else{
         $id("z").style.backgroundColor="green";
         }
     }
 //再次确认密码
 var flagQpwd=null;
 $id("password_again").onblur=function(){
     var strPwd=$id("password").value;
     var strQpwd=$id("password_again").value;
     if(!strQpwd==""){
          if(strQpwd==strPwd){
         flagQpwd=true;
         $id("error_pwd2").innerHTML="正确";
         $id("error_pwd2").style.color="green";
     }else{
         flagQpwd=false;
         $id("error_pwd2s4").innerHTML="两次密码不一致";
        // $id("s4").style.color="red";
     }
     }
    
 }
 
 //判断手机号
   var flagTel=null;
 $id("mobile").onblur=function(){
     var strTel=$id("mobile").value;
     var reg=/^[1-9]\d{10}$/;
     if(reg.test(strTel)){
         flagTel=true;
         $id("error_mobile").innerHTML="正确";
        $id("error_mobile").style.color="green";
     }else if(strTel==""){
         $id("error_mobile").innerHTML="不能为空";
             
     }else{
         $id("error_mobile").innerHTML="必须是手机号";
        // $id("s5").style.color="red";
     }
 }
 //验证码
 function yzm(){
    var str="";
    for(var i=0;i<6;i++){
        var code=rand(48,122);
        if(code>=58&&code<=64 ||code>=91&&code<=96){
            i--;
        }else{
            str+=String.fromCharCode(code);
        }
    }
    return str;
}
   $id("yz").innerHTML=yzm();
   $id("btn").onclick=function(){
    $id("yz").innerHTML=yzm();
  }  
  $id("v_code").onblur=function(){
      console.log(1);
      var txt=$id("v_code").value;
      var txt1=$id("yz").innerHTML;
      if(txt!==txt1){
        $id("ti").innerHTML="不能为空";
      }
  }
  //验证图片码不能为空
//   $id("v_code").onblur=function(){
//     // var  v_code=$("v_code").value;
//      if($id("v_code").value==""){
//         $id("ti").innerHTML="不能为空";
//      }
//     // alert("a");
//   }
  //验证短信不能为空
 $id("yzm").onblur=function(){
    //  alert(1)
     if($id("yzm").value==""){
        $id("getcodeerror").innerHTML="不能为空";
     }
 }
fm.onsubmit=function(){
    if( ! flagQpwd ){
        // return true;
    return false;

    }else{
        alert("注册成功!");
    }
}
  //cookie存数据
  var arr=[];
  $("#mobile_reg_submit").click(function(){
      var strName=$("#mobile").val();
      var strPwd=$("#password").val();
      arr.push({
          "username":strName,
          "userpwd":strPwd
      })
     setCookie("userlist",JSON.stringify(arr),2);
     
     console.log(arr);
     console.log("userlist");
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