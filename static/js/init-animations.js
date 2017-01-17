$(function () {



	/*--- global animations init ---*/
	/*---------------------------------------------------------------------*/
	$(window).on('load', function() {

		Animation.initGlobalAnimations({
			container: '.out',
			selfTriggeredElems: {
				el1: {
					selector: '.header',
					triggerHook: 1,
					class: 'is_animated'
				},
				el2: {
					selector: '.main',
					triggerHook: 1,
					class: 'is_animated'
				},
				el3: {
					selector: '.footer',
					triggerHook: 1,
					class: 'is_animated'
				},
				el4: {
					selector: '.title__big',
					triggerHook: .8,
					class: 'is_animated'
				},
				el5: {
					selector: '.house_desc',
					triggerHook: .8,
					class: 'is_animated'
				},
				el6: {
					selector: '.villa',
					triggerHook: .8,
					class: 'is_animated'
				},
				el7: {
					selector: '.footer__locate',
					triggerHook: .8,
					class: 'is_animated'
				},
				el8: {
					selector: '.footer__text',
					triggerHook: .8,
					class: 'is_animated'
				},
				el9: {
					selector: '.footer__copy',
					triggerHook: 1,
					class: 'is_animated'
				},
				el10: {
					selector: '.carusel',
					triggerHook: .8,
					class: 'is_animated'
				},

				el11: {
					selector: '.title__large',
					triggerHook: .8,
					class: 'is_animated'
				},
				el12: {
					selector: '.tourist__pic',
					triggerHook: .8,
					class: 'is_animated'
				},
				el13: {
					selector: '.banner__content',
					triggerHook: .8,
					class: 'is_animated'
				},
				el14: {
					selector: '.villa__heading',
					triggerHook: .8,
					class: 'is_animated'
				}
			}
		});
	});
});
