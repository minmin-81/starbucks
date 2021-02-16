$(document).ready(function(){
    $('.main_text1').delay(100).fadeIn()
    $('.main_box1').delay(500).fadeIn()
    $('.main_box2').delay(900).fadeIn()
    $('.main_box3').delay(1300).fadeIn()
    $('.main_box4').delay(1700).fadeIn()
    $('.main_box5').delay(2100).fadeIn()
    $('.main_bt').delay(2500).animate({'opacity':'1'})

    $('.logobox_slide').delay(500).animate({'left':'0'},200,function a(){
        $('.logobox_slide').delay(1200).animate({'left':'-100%'},200,function(){
            $('.logobox_slide').delay(1900).animate({'left':'-200%'},200,function(){
                $('.logobox_slide').delay(2600).animate({'left':'-300%'},200,function(){
                    $('.logobox_slide').delay(3300).animate({'left':'-400%'},200,function(){
                        $('.logobox_slide').delay(4000).animate({'left':'-500%'},200,function(){
                            $('.logobox_slide').delay(4700).animate({'left':'0'},200,a)
                        })
                    })
                })
            })
        })
    })
    $('.header_icon li:nth-child(3)').click(function(){
        $('.menu_popup').animate({'right':'0'},400)
        $('.wrap').animate({'left':'-60%'},400)
    })
    $('.menu_popup_closebt').click(function(){
        $('.menu_popup').animate({'right':'-160%'},400)
        $('.wrap').css({'left':'0'})
    })
    $('.footer_menu_arrow').click(function(){
        $(this).hide()
        $(this).siblings('.footer_menu_arrow2').show()
        $(this).siblings('.footer_menu_sub').slideDown()
    })
    $('.footer_menu_arrow2').click(function(){
        $(this).hide()
        $(this).siblings('img').show()
        $(this).siblings('.footer_menu_sub').slideUp()
    })
    $('.promotion_slide_bt li:nth-child(1)').click(function(){
        $('.promotion_slide').animate({'left':'0'})
    })
        $('.promotion_slide_bt li:nth-child(2)').click(function(){
        $('.promotion_slide').animate({'left':'-100%'})
    })
        $('.promotion_slide_bt li:nth-child(3)').click(function(){
        $('.promotion_slide').animate({'left':'-200%'})
    })
        $('.promotion_slide_bt li').click(function(){
            $(this).css({'background-color':'#fff','border':'2px solid green'})
            $(this).siblings('li').css({'background-color':'#aaa','border':'none'})
        })
        $('.promotion_arrow').click(function(){
            $(this).hide()
            $(this).siblings('.promotion_arrow2').show()
            $('.slide_box').slideDown()
        })
        $('.promotion_arrow2').click(function(){
            $(this).hide()
            $(this).siblings('.promotion_arrow').show()
            $('.slide_box').slideUp()
        })
        $('.popup_list_open').click(function(){
            $(this).siblings('.menu_popup_list_sub').slideDown()
            $(this).hide()
            $(this).siblings('.popup_list_close').show()
        })
        $('.popup_list_close').click(function(){
            $(this).siblings('.menu_popup_list_sub').slideUp()
            $(this).hide()
            $(this).siblings('.popup_list_open').show()
        })
        
});