$(document).ready(function(){
	$('.menu-toggle').on('click',function(){
	$('.menu-toggle').toggleClass('active');
	});
});
		var btn = document.getElementById('show');
		var nav = document.getElementById('nav');

		btn.addEventListener('click', function() {
		    nav.classList.toggle('active');
		});

jQuery(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>101){
			$('#to-stick').addClass('fixed');
        }
        else if ($(this).scrollTop()<101){
            $('#to-stick').removeClass('fixed');
        }
    });
});

(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//скасовуємо стандартну обробку натискання на посилання
		event.preventDefault();

		//забираємо ідентифікатор боку з атрибута href
		var id  = $(this).attr('href'),

		//дізнаємося висоту від початку сторінки до блоку на який посилається якір
			top = $(id).offset().top;
				
		//анімуємо перехід на відстань - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 800);
		$('.menu-toggle').toggleClass('active');
	});	
});

$(function() {
	$('.scroll-down').click (function() {
		$('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
		return false;
	})
});

function cislo(){
    if (event.keyCode < 48 || event.keyCode > 57)
    event.returnValue= false;
}

