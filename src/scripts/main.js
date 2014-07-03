$(function(){
	'use strict';
	$('dd').hide().prev('dt').click(
		function(){
			$(this).toggleClass('expanded').next('dd').slideToggle();
		}
	);

});