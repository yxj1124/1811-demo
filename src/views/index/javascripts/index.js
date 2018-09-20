//index 要放banner和 header
//引入banner 因为banner并没有暴露一些东西给index用 所以就用下面的方法引入进来就可以了
require('./modules/banner')
require('./modules/header')
// console.log('index')

   //吸顶效果
   var h = 120;
   var nav = document.getElementById("jid");
   window.onscroll = function(){
       //获取页面滚走距离
       var sTop = document.documentElement.scrollTop || document.body.scrollTop;
       if( sTop > h ){
           nav.style.position = "fixed";
           nav.style.top = 0;
           nav.style.zIndex=23;
       }else{
           nav.style.position = "static";
       }
   }
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
    
       //轮播图效果
     var timer=null;
     var index=0;
     var $alist=$("#banner_list a");
     $alist.click(function(){
         alert(d);
     })
     var $ulist=$("#flex-control-nav li")
     timer=setInterval(autoPlay,4000);
     function autoPlay(){
         index++;
         if(index==$alist.size()){
            index=0;
         }
         $ulist.eq(index).addClass("yuan").siblings().removeClass("yuan");
         $alist.eq(index).fadeIn(500).siblings().fadeOut(500);
     }
     $ulist.mouseenter(function(){
         clearInterval(timer);
         index=$(this).index()-1;
         autoPlay();
     }).mouseleave(function(){
         $ulist.eq(index).addClass("yuan").siblings().removeClass("yuan");
         timer=setInterval(autoPlay,4000);
     })
     //图片导航效果
   $(".recoldmodel").mouseenter(function(){
       $(this).find(".review-wrapper").animate({"opacity":1,"height":45,"left":0},100);
   }).mouseleave(function(){
       $(this).find(".review-wrapper").animate({"opacity":0,"height":0,"left":0},100);
   })
   $(".nav-img").mouseenter(function(){
       $(this).find(".review-wrapper").animate({"opacity":1,"height":45},100);
   }).mouseleave(function(){
       $(this).find(".review-wrapper").animate({"opacity":0,"height":0},100);
   })
   //楼梯效果
   var $list = $("#LoutiNav li:not(.last)");
   var $floor = $(".Louti");
   var flag = true; //假设为真时，滚动条可以操作了
   $list.click(function(){
       flag = false;
       $(this).find("span")
              .addClass("active")
              .end()
              .siblings()
              .find("span")
              .removeClass();
              //获取当前点击的li的下标
              var index = $(this).index();
              //找到对应的下标对应的楼梯，获取top距离
              var t = $floor.eq(index).offset().top-255;
              //设置页面滚走距离
              $("body,html").animate({"scrollTop" : t},2000,function(){
                    flag = true;
              });
   })
   $(".last").click(function(){
       $list.find("span").removeClass("active");
       $("body,html").animate({"scrollTop" : 0},1000);
   })
   $(window).scroll(function(){
       if(flag){
           var sTop = $(document).scrollTop();
           //条件：当前楼梯top - 页面滚走距离 < 当前楼梯高度的一半
           var $f = $floor.filter(function(){
               return Math.abs($(this).offset().top - sTop) < $(this).height()/2;
           })
           var index = $f.index();
          console.log(index);
           if(index != -1){
               $list.eq(index-4).find("span")
                              .addClass("active")
                              .end()
                              .siblings()
                              .find("span")
                              .removeClass("active");
           }
           if(sTop < 100){
               $list.find("span").removeClass("active");
           }
       }
   })