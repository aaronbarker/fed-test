$(function(){
	'use strict';
	$('dd').addClass('collapse').prev('dt').click(
		function(){
			$(this).toggleClass('expanded').next('dd').toggleClass('collapse expanded');
		}
	);

});