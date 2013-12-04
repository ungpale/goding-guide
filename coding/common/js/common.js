/* 메인 - 선명안 네트워크 */
function network(n) {
	for(var i = 1; i < 9; i++) {
		obj = document.getElementById('network'+i);
		if ( n == i ) {
			obj.style.display = "block";  
		} else {
			obj.style.display = "none";
		}
	}

}

/* 메인 sns 탭 */
function tab_sns(n) {
	for(var i = 1; i < 3; i++) {
		obj = document.getElementById('tab_sns'+i);
		if ( n == i ) {
			obj.style.display = "block";  
		} else {
			obj.style.display = "none";
		}
	}
}

/* 메인 - 선명안 SNS */
$(window).load(function() {
	$(".tab_sns a").click(function(){
		$(".tab_sns a").removeClass("on");
		$(this).addClass("on");
	});
});

$(document).ready(function() {

	/* 전체보기메뉴 */
	$("#viewtotal a").click(function(){
		if ($(".total").is(":hidden") == true){
			$("#viewtotal a").addClass("on");
			$(".total").show();
			$(".total").stop(true).animate({height:"131px"},300,"easeOutQuint");
		}else{
			$("#viewtotal a").removeClass("on");
			//$(".total").hide();
			$(".total").stop(true).animate({height:"0px"},300,"easeOutQuint",function(){$(this).hide();});
		}
	});

	/* lnb 롤오버 */
	$("#lnb_area > ul > li > a").hover(function() {
		if($(this).attr("class") != "active"){
		   //$(this).addClass("on");
		   $(this).children().attr("src", $(this).children().attr("src").replace("_off","_on"));
		 }
	 },function() {
		 if($(this).attr("class") != "active"){
		   //$(this).removeClass("on");
		   $(this).children().attr("src", $(this).children().attr("src").replace("_on","_off"));
		 }
	});

	/* lnb 롤오버 */
	$(function() { 
		$("#lnb img").hover(function(){ 
			$(this).attr("src", $(this).attr("src").replace("_off", "_on")); 
		}, function(){ 
			if($(this).parent().attr("class") != "active"){
				$(this).attr("src", $(this).attr("src").replace("_on", "_off")); 
			}
		});
	});

	/* 학회네트워크 버티컬슬라이드	 */
	$(".vertical .jCarouselLite").jCarouselLite({
		btnNext: ".vertical .next",
		btnPrev: ".vertical .prev",
		vertical: true,
		auto: 1500,
		speed: 1000
	});
	
	/* 파트너 */
	$(".partner_list").jCarouselLite({
		btnNext : ".next",
		btnPrev : ".prev",
		visible : 7,
		auto : 3000,
		speed : 1000
	});
})