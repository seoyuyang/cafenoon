$(function(){
    //submenu를 숨긴다.
    $(".submenu_wrap").hide();
    $(".gnb li").mouseenter(function(){
        $(".submenu_wrap").stop().slideDown();
    });
    $("#gnb_wrap").mouseleave(function(){
        $(".submenu_wrap").stop().slideUp();
    });
});
$(function(){
    //submenu 숨긴다.
    $('.m_submenu').hide();
    //마우스를 li에 올리면, submenu가 아래로 미끌어지듯 내려온다.
    $('.menu_wrap li').mouseenter(function(){
        $(this).children('.m_submenu').stop().slideDown();
    });
    //마우스가 li(submenu포함)를 벗어나면, submenu가 위로 미끌어지듯 올라간다.
    $('.menu_wrap li').mouseleave(function(){
        $(this).children('.m_submenu').stop().slideUp();
    });
});