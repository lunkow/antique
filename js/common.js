$(document).ready(function(){

    $(window).on('scroll', function () {
        $('#info').html($(document).scrollTop()+'px'); // счётчик скроллинга в элементе с id=info
        if($(window).scrollTop()){
            $(".menu").css({"height": "50px","transition": "0.5s" });
            $(".main-nav").css({"line-height": "50px","transition": "0.5s" });
            $(".main-telephone").css({"line-height": "50px","transition": "0.5s" });

            $(".menu__button").css("top", "16px");
        }
        else{
            $(".menu").css({"height": "70px","transition": "0.5s" });
            $(".main-nav").css({"line-height": "70px","transition": "0.5s" });
            $(".main-telephone").css({"line-height": "70px","transition": "0.5s" });
            $(".menu__button").css({"top": "26px", "transition": "0.5s"});
        }
    });

    ////////////////////////////////////////////////////////
    //плавная прокрутка до верхней границы целевого блока(по id)
    //у родителя ссылки дополнительный класс smooth-scroll
    $(".smooth-scroll").on("click","a", function (event) {
        event.preventDefault(); //отключаем поведение браузера по умолчанию
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 35 -13;//35
        $('body,html').animate({scrollTop: top}, 500);
    });

    /////////////////////////////////////////////////////////
    // подсветка активного пункта меню при скроллинге
    $(window).scroll(function () { // ко всему окну во время скроллинга
        var linkedScreens = $('#about');
        var linkedScreens = linkedScreens.add($('#appraisement'));
        var linkedScreens = linkedScreens.add($('#catalog'));
        var linkedScreens = linkedScreens.add($('#contacts'));

        linkedScreens.each(function (index, element) { 
            // console.info('-----' + index + '   _' + value.id); // id всех считанных блоков для проверки
            var top = $(element).offset().top-100;
            var bottom = top + $(element).height();
            var scrolling = $(window).scrollTop();
            var id = $(element).attr('id'); // element.id

            if (scrolling > top && scrolling < bottom ){
                $('a.main-nav__link-active').removeClass('main-nav__link-active');
                $('a[href = "#' + id + '"]').addClass('main-nav__link-active');
            }
            if (scrolling < $('.first-screen').height()) { //убрать подсветку на скроллинге первого экрана
                $('a.main-nav__link-active').removeClass('main-nav__link-active');
            }
        })
    });

var toggleElement = document.getElementById('mapToggleSet');
var elementForHiding = document.getElementById('map');
var elementForExpansion = document.getElementById('contacts');
var elementForUpping = document.getElementById('contactInfo')
toggleElement.addEventListener('click',mapToggling, false);
    function mapToggling() {
        elementForHiding.classList.toggle('hideTrigger');
        elementForExpansion.classList.toggle('mapHider');
        elementForUpping.classList.toggle('upperClass');
        if (toggleElement.innerText == "Показать карту"){
            toggleElement.innerText = "Скрыть карту";
        }
        else toggleElement.innerText = "Показать карту";

    }

});
