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