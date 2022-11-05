$('body').css('overflow','hidden')

$(window).on('load', function() {
    setTimeout(function(){
        $(".loading").fadeOut();
        $('body').css('overflow-y','auto')
        $('html').animate({scrollTop: 0},0);
    }, 1000);
    setTimeout(function(){
        $(function() {

            // main--------------------------------------------------------

            $('.main .mokup-img').mouseover(function(){
                $('.main .bg-img').css('animationPlayState','running')
            })
            $('.main .mokup-img').mouseleave(function(){
                $('.main .bg-img').css('animationPlayState','pause')
            })
            // grid-------------------------------------------------------

            $('.grid-contents').hover(function() {
                $(this).addClass('grid-contents-hover')
                $(this).find('.grid-text').children('.title').addClass('grid-contents-hover')
                $(this).find('.grid-text').children('p').addClass('grid-contents-hover')
            },function() {
                $(this).removeClass('grid-contents-hover')
                $(this).find('.grid-text').children('.title').removeClass('grid-contents-hover')
                $(this).find('.grid-text').children('p').removeClass('grid-contents-hover')
            })
            $('.nav-box > ul > li').click(function(e){
                e.preventDefault();
                n = $(this).index();
        
                distance = $('.section').eq(n).offset().top;
                if(n == 3) {
                    $('html').animate({scrollTop: distance + -200},600);
                } else {
                    $('html').animate({scrollTop: distance - 100},600);
                }
                // console.log(distance)
            })
        
            $('.grid-contents').click(function(e){
                e.preventDefault();
        
                n = $(this).index();
                distance = $('.section').eq(n).offset().top;
        
                $('html').animate({scrollTop: distance - 100},600);
                // console.log(distance)
            })

            // section-------------------------------------------------------

            $(window).scroll(function() {
                const sct = $(window).scrollTop();
                const h = $(window).height();
                function sectionOffset(section) {
                    var secOff = $(section).offset();
                    return secOff.top;
                }

                if (sct > sectionOffset('.grid')- 800) {
                    $('.grid').addClass('moving');
                }
                if (sct > sectionOffset('.section1')- 800) {
                    $('.section1').children('.box1').addClass('moving')
                    $('.section1').children('.box2').addClass('moving')
                }
                if (sct > sectionOffset('.section2')- 800) {
                    $('.section2').children('.box1').addClass('moving')
                    $('.section2').children('.box2').addClass('moving')
                }
                if (sct > sectionOffset('.section3')- 800) {
                    $('.section3').children('.box1').addClass('moving')
                    $('.section3').children('.box2').addClass('moving')
                }
                if (sct > sectionOffset('.section4')- 800) {
                    $('.section4').children('.box').addClass('moving')
                }

                if(sct <= h-200) {
                    $('nav').removeClass('move');
                    $('.nav-box > ul > li p').removeClass('move');
                }
                if(sct > h-200) {
                    $('nav').addClass('move');
                    $('.nav-box > ul > li p').addClass('move');
                } 
                if (sct < h) {
                    $('nav').removeClass('down');
                    $('.nav-box > ul > li p').removeClass('down');
                }
                if (sct >= h-170) {
                    $('nav').addClass('down');
                    $('.nav-box > ul > li p').addClass('down');
                } 
            })

        })
    }, 1200);
});