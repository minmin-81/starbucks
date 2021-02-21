$(document).ready(function () {
    $('.main_text1').delay(100).fadeIn()
    $('.main_box1').delay(500).fadeIn()
    $('.main_box2').delay(900).fadeIn()
    $('.main_box3').delay(1300).fadeIn()
    $('.main_box4').delay(1700).fadeIn()
    $('.main_box5').delay(2100).fadeIn()
    $('.main_bt').delay(2500).animate({
        'opacity': '1'
    })

    $('.logobox_slide').delay(500).animate({
        'left': '0'
    }, 200, function a() {
        $('.logobox_slide').delay(1200).animate({
            'left': '-100%'
        }, 200, function () {
            $('.logobox_slide').delay(1900).animate({
                'left': '-200%'
            }, 200, function () {
                $('.logobox_slide').delay(2600).animate({
                    'left': '-300%'
                }, 200, function () {
                    $('.logobox_slide').delay(3300).animate({
                        'left': '-400%'
                    }, 200, function () {
                        $('.logobox_slide').delay(4000).animate({
                            'left': '-500%'
                        }, 200, function () {
                            $('.logobox_slide').delay(4700)
                                .animate({
                                    'left': '0'
                                }, 200, a)
                        })
                    })
                })
            })
        })
    })
    $('.header_icon li:nth-child(3)').click(function () {
        $('.menu_popup').animate({
            'right': '0'
        }, 400)
        $('.wrap').animate({
            'left': '-60%'
        }, 400)
    })
    $('.menu_popup_closebt').click(function () {
        $('.menu_popup').animate({
            'right': '-160%'
        }, 400)
        $('.wrap').css({
            'left': '0'
        })
    })
    $('.footer_menu_arrow').click(function () {
        $(this).hide()
        $(this).siblings('.footer_menu_arrow2').show()
        $(this).siblings('.footer_menu_sub').slideDown()
    })
    $('.footer_menu_arrow2').click(function () {
        $(this).hide()
        $(this).siblings('img').show()
        $(this).siblings('.footer_menu_sub').slideUp()
    })

    $('.popup_list_open').click(function () {
        $(this).siblings('.menu_popup_list_sub').slideDown()
        $(this).hide()
        $(this).siblings('.popup_list_close').show()
    })
    $('.popup_list_close').click(function () {
        $(this).siblings('.menu_popup_list_sub').slideUp()
        $(this).hide()
        $(this).siblings('.popup_list_open').show()
    })
    $('.event_sub_slide_bt li').click(function () {
        $(this).css({
            'width': '12px',
            'height': '12px',
            'border': '0.7vw solid #007042',
            'background-color': 'transparent',
            'box-sizing': 'border-box'
        })
        $(this).siblings().css({
            'width': '10px',
            'height': '10px',
            'background-color': '#aaa',
            'border': 'none'
        })
    })
    $('.event_sub_slide_bt li:nth-child(1)').click(function () {
        $('.event_sub_slide').animate({
            'left': '0'
        })
    })
    $('.event_sub_slide_bt li:nth-child(2)').click(function () {
        $('.event_sub_slide').animate({
            'left': '-100%'
        })
    })
    $('.event_sub_slide_bt li:nth-child(3)').click(function () {
        $('.event_sub_slide').animate({
            'left': '-200%'
        })
    })
    $('.event_sub_slide_bt li:nth-child(4)').click(function () {
        $('.event_sub_slide').animate({
            'left': '-300%'
        })
    })
    $('.event_sub_slide_bt li:nth-child(5)').click(function () {
        $('.event_sub_slide').animate({
            'left': '-400%'
        })
    })
    $('.event_sub_slide_bt li:nth-child(6)').click(function () {
        $('.event_sub_slide').animate({
            'left': '-500%'
        })
    })
    $('.event_sub_slide_bt li:nth-child(7)').click(function () {
        $('.event_sub_slide').animate({
            'left': '-600%'
        })
    })
    $('.event_sub_slide_bt li:nth-child(8)').click(function () {
        $('.event_sub_slide').animate({
            'left': '-700%'
        })
    })
    $('.event_sub_slide_bt li:nth-child(9)').click(function () {
        $('.event_sub_slide').animate({
            'left': '-800%'
        })
    })
    $('.event_sub_slide_bt li:nth-child(10)').click(function () {
        $('.event_sub_slide').animate({
            'left': '-900%'
        })
    })
    $('.event_sub_slide_bt li:nth-child(11)').click(function () {
        $('.event_sub_slide').animate({
            'left': '-1000%'
        })
    })
}); // 마지막 괄호