/* This is needed to make IOS behave like all the other browser */

var accordions = document.querySelectorAll('.accordion');

[].forEach.call(accordions, function(accordion){
	accordion.addEventListener('touchstart', function(){
		accordion.focus();
	});
});