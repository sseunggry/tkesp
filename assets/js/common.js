/* common */
$(function(){
    modalOpen();
    modalClose();
    checkScroll();

    $(window).on('resize', function(){
        checkScroll();
    });


    function checkScroll() {
        const floating = $('.floating-btn');

        console.log($(document).height(), $(window).height())

        if ($(document).height() > $(window).height()) {
            floating.addClass('scroll');
        } else {
            floating.removeClass('scroll');
        }
    }
    function modalOpen() {
        $('.btn').on('click', (e) => {
            const dataModal = $(e.target).data('modal');

            if(dataModal){
                $(`#${dataModal}`).addClass('open');
                $('html').css('overflow', 'hidden');
            }
        });

        if($('.modal').hasClass('open')){
            $('html').css('overflow', 'hidden');
        }
    }
    function modalClose() {
        $('.btn-close').on('click', (e) => {
            const modal = $(e.target).parents('.modal');

            modal.removeClass('open');
            $('html').css('overflow', '');
        });

        $('.modal').on('click', (e) => {
            const target = $(e.target);
            const modal = target.parents('.modal');

            if(target.hasClass('dimd')){
                modal.removeClass('open');
                $('html').css('overflow', '');
            }
        });
    }
});
