var Global_main = new GlobalMainClass();

function GlobalMainClass() {
	var globalScope = this;
	/*--- toggle menu ---*/
	/*---------------------------------------------------------------------*/
	this.toggleMenu = function(opt) {
		// var $container = $(opt.container);
		var $panel = $(opt.panel);
		var $toggler = $(opt.toggler);

		var autoReturn = opt.autoReturn;

		$toggler.on('click', function() {
			if(!$panel.hasClass('is_opened')) {
				$panel.addClass('is_opened');

				$toggler.addClass('is_active');
			}
			else {
				$panel.removeClass('is_opened');

				$toggler.removeClass('is_active');
			}

		});
	}

	this.togglerNav = function(opt) {
		var $toggle = $(opt.toggle),
				$class = opt.class;

		$toggle.on('click', function() {
			if($(this).hasClass($class)) {
				return false;
			}
			$(this).addClass($class).siblings().removeClass($class);
			return false;
		});
	}
	/* ---  carusel init ---*/
	/*--------------------------------------------------------------------*/

	this.slider = function(opt) {
		var $slider = $(opt.slider),
				$sliderItem = $(opt.sliderItem),
				$length = opt.length,
				$show = opt.show;

		if($sliderItem.length > $length){
			$slider.slick({
				infinite: false,
				slidesToShow: $show,
				arrows: false,
				dots: true,
				accessibility: false
			});

		}
	}



}