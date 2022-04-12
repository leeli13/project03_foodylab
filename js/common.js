//popup
$(function(){
    function setCookie(name,value,expiredays){
        var today = new Date();
        today.setDate(today.getDate() + expiredays);
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + today.toGMTString() + ';';
    }

    var popup = '.popup'
    $(popup).find('.close_btn').click(function(e){
        e.preventDefault();
        $(popup).stop().fadeOut(0);
        $('html, body').css('overflow','visible');
    });
    $(popup).find('.today_close').click(function(e){
        e.preventDefault();
        setCookie('exCookie','yes',1);
        $(popup).stop().fadeOut(0);
        $('html, body').css('overflow','visible');
    });

    var cookieData = document.cookie;

    if(cookieData.indexOf('exCookie=yes') < 0){
        $(popup).fadeIn(0);
        $('html,body').css('overflow','hidden');
    }else{
        $(popup).fadeOut(0);
        $('html,body').css('overflow','visible');
    }
});


//header
$(function(){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var productTop = $('.product').offset().top;

        if(scrollTop >= productTop - 100){
            $('header').slideUp('fast');
        }else{
            $('header').slideDown('fast');
        }
        
    });
});


//gnb
$(function(){
    $('.main_nav').mouseenter(function(){
        $(this).next().stop().fadeIn('fast');

        $(this).parent().mouseleave(function(){
            $(this).find('.sub_nav').stop().fadeOut('fast');
        });
    });
});

//panel_icon
$(function(){

    function pPanel(){
        $('.panel_icon a, .pmain_nav').off('click');

        //하위메뉴 무조건 보이기
        $('.psub_nav').stop().slideDown('fast');

        $('.panel_icon a').click(function(){   
                
            $(this).toggleClass('active');
            $('.panel_gnb').toggleClass('active');
            $('.panelbg').fadeToggle(500);
    
            var has = $(this).hasClass('active');
    
            if(has){ //활성상태라면
                $('html, body').css('overflow','hidden');
    
            }else{
                $('html, body').css('overflow','visible');
                
            }
        });
    }

    function tPanel(){
        $('.panel_icon a, .pmain_nav').off('click');

        //하위메뉴 무조건 보이기
        $('.psub_nav').stop().slideUp('fast');

        $('.pmain_nav').click(function(){
            var is = $(this).next().is(':hidden');
    
            if(is){
                $('.psub_nav').stop().slideUp('fast');
                $(this).next().stop().slideDown('fast');
            }else{
                $(this).next().stop().slideUp('fast');
            }
        });

        $('.panel_icon a').click(function(){   
                
            $(this).toggleClass('active');
            $('.panel_gnb').toggleClass('active');
            $('.panelbg').fadeToggle(500);
    
            var has = $(this).hasClass('active');
    
            if(has){ //활성상태라면
                $('html, body').css('overflow','hidden');
    
            }else{
                $('html, body').css('overflow','visible');
                $('.psub_nav').stop().delay(900).slideUp('fast');
            }
        });
    }


   

        $(window).resize(function(){
        var w = window.innerWidth;
        if( w < 1024){
            tPanel();
        }else{
            pPanel();
        }
    });

});
