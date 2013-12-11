$(document).ready(function() {
	//Lnb
	//조건 연산 (조건)?(조건이 참일 때의 값) : (조건이 거짓일 때의 값)
	// $(".lnb li.dropdown > a").click(function () {
    //        $(this).parent("li").hasClass("open") ? $(this).parent("li").removeClass("open") : $(this).parent("li").addClass("open");
    //        return !1
    //    });

    $('.lnb > li > a').on('click',function (e){
    	var depth1 = $(this)
    	var lst = $(this).parent('li');

        if (lst.hasClass('dropdown')) {
            e.preventDefault();
            //lst.siblings('li').removeClass('open');
    		lst.toggleClass('open');
    	} 
     //    else {
    	// 	lst.siblings('li').removeClass('open');
    	// 	// lst.addClass('open');
    	// }
    	
    });
});