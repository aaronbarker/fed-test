$(function(){
	'use strict';
	$('.faq dt').click(
		function(){
			$(this).toggleClass('expanded').next('dd').toggleClass('collapse expanded');
		}
	);

});