$(function(){
	$(".faqs> li> .question").click(function(){
		$(this).next().slideToggle();
	});
});

$(function(){
	$(".faqs> li> ul").click(function(){
		$(this).children().children("img").toggleClass("turn");
	});
});

































































