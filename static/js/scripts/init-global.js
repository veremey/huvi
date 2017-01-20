$(function () {

	/*--- toggle menu ---*/
	/*---------------------------------------------------------------------*/
	Global_main.toggleMenu({
		panel: '.header__menu',
		toggler: '.header__toggler',
		autoReturn: false
	});

	Global_main.slider({
		slider: '.carusel',
		sliderItem: '.carusel__item',
		length: 1,
		show: 1
	});


	Global_main.togglerNav({
		toggle: '.header__list_item',
		class: 'is_active'
	});

});

$(window).on('load', function(){
	$headerHeight = $('.header').outerHeight();
	$('.out').css({'padding-top' : $headerHeight});
});

$(window).on('resize', function(){
	$headerHeight = $('.header').outerHeight();
	$('.out').css({'padding-top' : $headerHeight});
})


