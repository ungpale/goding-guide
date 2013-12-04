$(document).ready(function() {
	//Lnb
	//조건 연산 (조건)?(조건이 참일 때의 값) : (조건이 거짓일 때의 값)
	$(".lnb li.dropdown > a").click(function () {
        $(this).parent("li").hasClass("open") ? $(this).parent("li").removeClass("open") : $(this).parent("li").addClass("open");
        return !1
    });
});