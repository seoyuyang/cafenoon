$(function(){
    //popup 안보이게 한다.
    $('.popup_wrap').hide();
    //popup_open을 클릭하면,popup이 보인다.
    $('.reservation').click(function(){
        $('.popup_wrap').fadeIn(0);
    });
    //close_btn을 클릭하면,popup이 안보인다.
    $('.btn, .cancel').click(function(){
        $('.popup_wrap').fadeOut(0);
    });
});

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100                                                          ) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
	var height = $(window).scrollTop();
    if (height > 100                                                          ) {
        $('.booking').fadeIn();
    } else {
        $('.booking').fadeOut();
    }
});