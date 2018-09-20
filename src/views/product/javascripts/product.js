
//放大镜效果
$("#bottom li").mouseenter(function(){
    var index=$(this).index();
    $("#small img").eq(index).show().siblings("img").hide();//鼠标移入小图时让中图显示出来
    $("#big img").eq(index).show().siblings().hide();//鼠标移入小图时让大图显示出来
})
$("#small").on({
    "mouseover":function(){
    $("#mask").show(); //鼠标移入时中图时让移动的div显示出来
    $("#big").show();//鼠标移入时中图时让大图显示出来
},
    "mouseout":function(){
    $("#mask").hide();//鼠标移出时中图时让移动的div隐藏
    $("#big").hide();//鼠标移出时中图时让大图隐藏
},
    "mousemove":function(evt){//鼠标移动div
        var e=evt||event;
        //获取鼠标的left值和top值
        var x=e.clientX-$("#small").offset().left-$("#mask").width()/2;
        var y=e.clientY-$("#small").offset().top-$("#mask").height()/2;
        //边界处理
        var mx=$("#small").width()-$("#mask").width();
        var my=$("#small").height()-$("#mask").height();
        x=x<=0?0:(x>=mx?mx:x);
        y=y<=0?0:(y>=my?my:y);
        //大图宽度/小图宽度 = 大图偏移 / mask的偏移
        var bigImageX=-x*$(".bigImage").width()/$("#small").width();
        var bigImageY=-y*$(".bigImage").height()/$("#small").height();
        //给移动的div设置left值和top值
        $("#mask").css({
            "left":x+"px",
            "top":y+"px"
        })
        //放大的图片和中图显示的一样
        $(".bigImage").css({
            "left":bigImageX+"px",
            "top":bigImageY+"px"
        })
        
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