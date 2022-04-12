//main
$(function(){
	$(window).resize(function(){
		var h = $(window).height();

		$('main').innerHeight(h);
	});

	$(window).trigger('resize');


    //title_text
    var text01 = 'SUPERVITA CLEANING BAR';
    var text02 = 'SUPERPINK MASSAGE GEMSTONE';
    var text03 = 'SUPERSOFT SEA SPONGE';

    var spanText01 = '';
    var spanText02 = '';
    var spanText03 = '';

    for(var i=1;i<=text01.length;i++){
        spanText01 += '<span>' + text01.charAt(i - 1) + '</span>';
    }
    for(var i=1;i<=text02.length;i++){
        spanText02 += '<span>' + text02.charAt(i - 1) + '</span>';
    }
    for(var i=1;i<=text03.length;i++){
        spanText03 += '<span>' + text03.charAt(i - 1) + '</span>';
    }

    $('.main_contain02 .main_text01 h2').html(spanText01);
    $('.main_contain02 .main_text02 h2').html(spanText02);
    $('.main_contain02 .main_text03 h2').html(spanText03);

    //span delay처리
    $('.main_text01 h2 span').each(function(index){
        $(this).css('transitionDelay', 0.3 + (index * 0.06) + 's');
    });
    $('.main_text02 h2 span').each(function(index){
        $(this).css('transitionDelay', 0.3 + (index * 0.06) + 's');
    });
    $('.main_text03 h2 span').each(function(index){
        $(this).css('transitionDelay', 0.3 + (index * 0.06) + 's');
    });



    var swiper = new Swiper('.main_contain01 .swiper', {
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        speed: 500,
        loop: true,
        allowTouchMove: false,
        navigation: {
            nextEl: "main .swiper-button-next",
            prevEl: "main .swiper-button-prev",
        },
        on: { 
            init: function(){ 
                $('main .swiper-progress').addClass('active');
            },
            slideChangeTransitionStart: function(){ 
                $('main .swiper-progress').removeClass('active');
            },
            slideChangeTransitionEnd: function(){
                $('main .swiper-progress').addClass('active');
            }
        },
    });

    var swiper = new Swiper('.main_contain02 .swiper', {
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        speed: 500,
        loop: true,
        allowTouchMove: false,
        navigation: {
            nextEl: "main .swiper-button-next",
            prevEl: "main .swiper-button-prev",
        },
        on: { 
            init: function(){ 
                $('main .swiper-progress').addClass('active');
            },
            slideChangeTransitionStart: function(){ 
                $('main .swiper-progress').removeClass('active');
            },
            slideChangeTransitionEnd: function(){
                $('main .swiper-progress').addClass('active');
            }
        },
    });

    var swiper = new Swiper(".main_contain03 .swiper", {
        direction: "vertical",
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        speed: 500,
        loop: true,
        allowTouchMove: false,
        navigation: {
            nextEl: "main .swiper-button-next",
            prevEl: "main .swiper-button-prev",
        },
        on: { 
            init: function(){ 
                $('main .swiper-progress').addClass('active');
            },
            slideChangeTransitionStart: function(){ 
                $('main .swiper-progress').removeClass('active');
            },
            slideChangeTransitionEnd: function(){
                $('main .swiper-progress').addClass('active');
            }
        },
    });
});


//magazine
$(window).load(function(){
    $(window).resize(function(){
		var w = window.innerWidth;

		if(w >= 1024){
            var h = $('.magazine .text_table').innerHeight();

            $('.magazine figure').css('height',h);
        }else{
            $('.magazine figure').css('height','auto');
        }
        
	});
    $(window).trigger('resize');

    var swiper = new Swiper(".magazine .swiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
			1023: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
        },
        speed: 600,
        loop: true,
    });
});

//iconpart
$(function(){
    var swiper = new Swiper(".iconpart .swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        loopedSlides: 3,
        pagination: {
          el: ".iconpart .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
            allowTouchMove: false,
          },
        },
        
    });

    //리사이즈 발생하면 스와이퍼 첫화면으로 변경
    $(window).resize(function(){
        swiper.slideTo(1,0);
    });
});

//foodybn
$(function(){
    var swiper = new Swiper(".foodybn .swiper", {
        effect: "fade",
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
    });
});


//scroll_active
$(function(){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var productTop = $('.product').offset().top;
        var introduceTop = $('.introduce').offset().top;

        if(scrollTop >= productTop - 100){
            $('.product h2, .product p, .product li').addClass('active');
        }

        if(scrollTop >= introduceTop - 500){
            $('.introduce h2, .introduce .title_text').addClass('active');
        }
    });
});