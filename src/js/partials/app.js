$(document).ready(function(){
    openMobMenu();
    sendForm();

    $(".owl-carousel-four").owlCarousel({
        responsive:{
            0:{
                items:1,
                dots: true,
                nav: false,
            },
            567:{
                items:2,
            },
            768:{
                items:2,
            },
            960:{
                items:3,
            },
            1280:{
                items:4,
            }
        },
        nav: true,
        dots: false,
        margin: 32,
        navText:
            ["<svg class='carousel__icon' width=\"10\" height=\"15\" viewBox=\"0 0 10 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.88 0L0 1.71793L6.10667 7.31034L0 12.9028L1.88 14.6207L9.88 7.31034L1.88 0Z\"/>\n" +
            "</svg>",
            "<svg class='carousel__icon' width=\"10\" height=\"15\" viewBox=\"0 0 10 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.88 0L0 1.71793L6.10667 7.31034L0 12.9028L1.88 14.6207L9.88 7.31034L1.88 0Z\"/>\n" +
            "</svg>"],
    });
    $(".owl-carousel-two").owlCarousel({
        responsive:{
            0:{
                items:1,
                dots: true,
                nav: false,
            },
            567:{
                items:1,
            },
            768:{
                items:2,
            },
            960:{
                items:2,
            },
            1280:{
                items:2,
            }
        },
        nav: true,
        dots: false,
        margin: 32,
        navText:
            ["<svg class='carousel__icon' width=\"10\" height=\"15\" viewBox=\"0 0 10 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.88 0L0 1.71793L6.10667 7.31034L0 12.9028L1.88 14.6207L9.88 7.31034L1.88 0Z\"/>\n" +
            "</svg>",
                "<svg class='carousel__icon' width=\"10\" height=\"15\" viewBox=\"0 0 10 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.88 0L0 1.71793L6.10667 7.31034L0 12.9028L1.88 14.6207L9.88 7.31034L1.88 0Z\"/>\n" +
                "</svg>"],
    });

    $(".select").select2({
        selectOnClose: true,
        width: '100%',
    });



});

function openMobMenu() {
    var button = document.getElementById('open-menu');
    var menu = document.getElementById('menu');
    var header = document.getElementById('header-menu');
    var body = document.body;

    button.onclick = function () {
        if(this.classList.contains('active')){
            this.classList.remove('active');
            menu.classList.remove('active');
            header.classList.remove('active');
            body.classList.remove('unscroll');
        }
        else{
            this.classList.add('active');
            menu.classList.add('active');
            header.classList.add('active');
            body.classList.add('unscroll');
        }
    }
}



function sendForm() {
    const formFeedbackAction = $('.formAction');
    const fields = formFeedbackAction.find('input, textarea');

    fields.keyup(function() {
        const self = $(this);
        const field = self.closest('.form__row');

        if (field.hasClass('error')) {
            field.removeClass('error');

        }
    });


    formFeedbackAction.each(function(index, element){
        element = $(element);
        const submitBtn = element.find('button[type="submit"]');

        if (element.prop('tagName') === 'FORM') {
            element.submit(function(e) {
                e.preventDefault();
                submitBtn.attr('disabled', true);

                if (!validateForm(element)) {
                    submitBtn.attr('disabled', false);
                    return;
                }
                const fd = new FormData(this);

                $.ajax({
                        //////
                });
                return false;
            });
        }
    });

}

function validateForm(form) {
    const fields = form.find('.req');
    var  isValid = true;

    fields.each(function(i, fieldEl){
        const field = $(fieldEl);

        if (field.attr('type') == 'email') {
            const emailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]{1,20}\.[a-zA-Z0-9-]+/;

            isValid = emailRegExp.test(field.val()) ? isValid : false;
            if(!emailRegExp.test(field.val())){
                field.closest('.form__row').addClass('error');
            }
        }
        else if (field.val().length < 1) {
            field.closest('.form__row').addClass('error');
            isValid = false;
        }
    });

    return isValid;
}


