
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

var id =window.location.search.substring(4);
$.ajax({
    type:"get",
    url:"/data.json",
    dataType:"json",
    success:function(data){
        
        // console.log(data);
        var  str="";
        var  str1="";
        var str2="";
        var str3="";
        for(var i=0;i<data.data.length;i++){
            if(data.data[i].good_id==id){
                for(var j=0;j<6;j++){
                    str1+=`
                    <li><img src="${data.data[i].list[j]}" alt=""/></li>
                 `
                 }
                 for(var s=6;s<12;s++){
                    str2+=`
                    <img src="${data.data[i].list[s]}" alt="" /> 
                    `
                 }
                 for(var z=12;z<18;z++){
                    str3+=`
                    <img src="${data.data[i].list[z]}" class="bigImage"/>
                    `
                 }
                str+=`
                <h1 class="goods-name">${data.data[i].good_name}</h1>
                <div class="product-id clearfix">
                        <span>商品编码：</span>
                        <span id="goodsBn" updatespec="text_bn">1010100856</span>
                </div>
                <span>${data.data[i].good_price}</span>
                <div class="goods-price-box clearfix" style="margin-bottom:5px;">
                        <span style="display:inline-block;width:50px;text-align:center;font-size: 12px;color:#ffffff;background:#7F5B42;padding:2px 5px;font-weight: bold;border-radius:3px 3px;">会员价</span>
                        <span class="mlvprice" style="color:#7F5B42;padding-left:10px;font-weight: bold;">￥47</span>
                        <a style="color:#ff0000;text-decoration: none;" target="_blank" href="http://www.dapu.com/index.php/article-bangzhuzhongxin_tesesuwu-24.html">如何成为会员？</a>
                </div>
                <div id="promotion_show" class="clearfix" style="margin-bottom: 5px;">
                        <span style="display:inline-block;width:50px;text-align:center;font-size: 12px;color:#ffffff;background:#b1544f;padding:2px 5px;font-weight: bold;border-radius:3px 3px;">促销</span>
                          <span id="promotion_msg" style="padding-left:10px;"></span>
                </div>
                <div class="score-wrap">
                        <ul>
                            <li>
                                <p class="score-num">${data.data[i].good_xiaoling}</p>
                                <p class="score-name">销量</p>
                            </li>
                            <li>
           
            <p class="score-num">${data.data[i].good_comment}</p>
                                <p class="score-name">用户评论数</p>
                            </li>
                            <li>
                                <p class="score-num">${data.data[i].good_cumulative}</p>
                                <p class="score-name">评论送积分</p>
                            </li>
                        </ul>
                </div>
                <div class="tagline">
                    1、原料：精选新疆长绒棉原料，天然健康；棉花纤维柔长，洁白光泽；
                    <br>2、纱支：采用40支合股纱工艺，毛圈面吸水性好；正面精致割绒，手感好；
                    <br>3、花鸟印花设计：以不同的花鸟元素进行活性印花，传达不同的意境；
                </div>
                <div id="goods-spec" class="goods-spec">
                        <div class="spec-item specItem">
                          <label><span><em>颜色：</em></span></label>
                          <div class="rightdiv1">
                              <ul>
                                      <li>
                              <a href="javascripts:;" ><span style="background-image:url(/images/goodspecbg.gif)"><nobr>灵舞</nobr></span>
                                          <i title="点击取消选择">&nbsp;</i>
                              </a>
                              </li>
                                      <li>
                              <a href="javascripts:;"><span style="background-image:url(/images/goodspecbg.gif)"><nobr>落春</nobr></span>
                                          <i title="点击取消选择">&nbsp;</i>
                              </a>
                              </li>
                                      <li>
                              <a href="javascripts:;"> <span style="background-image:url(/images/goodspecbg.gif)"><nobr>曦</nobr></span>
                                          <i title="点击取消选择">&nbsp;</i>
                              </a>
                              </li>
                                      <li>
                              <a href="javascripts:;"> <span style="background-image:url(/images/goodspecbg.gif)"><nobr>灵舞/落春/曦 三条装</nobr></span>
                                          <i title="点击取消选择">&nbsp;</i>
                              </a>
                              </li>
                                    </ul>
                          </div>
                        </div>
                          <!-- 颜色-->
                 
                 </div>
                <div class="buyinfo clearfix">
                                <label>数量：</label>
                                <div style="width:120px;" class="ctn Numinput">
                                <ul style="display:inline; class="detail">
                                <li style="display:inline; padding-top:3px;"><span style="background-image:url(/images/jian.jpg); height:20px; line-height:20px;" class="btnReduce decrease numadjust"></span></li>
                                <li style="display:inline; height:20px; line-height:20px;"><input type="text" id="pro_count" value="1" ></li>
                                <li style="display:inline; padding-top:4px; padding-left:8px;"><span style="background-image:url(/images/jia.jpg); height:20px; line-height:20px;" class="btnAdd increase numadjust"></span></li>
                                </ul>
                               </div>
                </div>
                <div class="hightline">
                    <div style="clear:both; height:10px; overflow:hidden; border-top:1px #e6e6e6 solid; margin-left:10px;margin-top:5px; margin-right:20px;"></div>
                    <div class="btnBar clearfix" style="visibility: visible;">
                            <div class="clown flt btnwrap">
                             <input class="actbtn btn-buy" value="加入购物车" type="submit">
                             </div>
                     </div>
                </div>`;    
            }
        }
        console.log(str1);
        $(".content-right").html(str);
        $(".bottom").html(str1);
        $(".small").html(str2);
        $("#big").html(str3);
        //加入购物车事件
$(".btn-buy").click(function(){
    location.href="/car/car.html";
})
    }
})
//放大镜效果
// $("#bottom li").mouseenter(function(){
//     console.log(1);
//     var index=$(this).index();
//     // $("#small img").eq(index).show().siblings("img").hide();//鼠标移入小图时让中图显示出来
//     // $("#small").find("img").eq(index).show().end().siblings().find("img").hide();
//     $("#big img").eq(index).show().siblings().hide();//鼠标移入小图时让大图显示出来
// })
$("#bottom").on("mouseover","li",function(){
  let src= $(this).find("img").prop("src")
  $("#small img").prop("src",src);
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

$(".detail").click(function(e){
    var target=$(e.target);
    if(target.attr("id")=="btnReduce"){
        var value=target.next().next().val();
        if(value<=1){
            value=1;
        }else{
            value--;
        }
        target.next().next().val(value);
    }
    if(target.attr("id")=="btnAdd"){
        var value=target.prev().prev().val();
        value++;
        target.prev().val(value);
   }
   
})