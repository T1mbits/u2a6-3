jQuery(function () {
	$('.header-element').on('click', function () {
		$('.selected-item').removeClass('selected-item');
		$(this).addClass('selected-item');

		$('.selected-item-highlight').animate($(this).position(), 200);
	});
});
