/* This is needed to make IOS behave like all the other browser 
   references
       http://codeblog.cz/vanilla/#prerequisities
*/

var accordions = document.querySelectorAll('.accordion');

[].forEach.call(accordions, function(accordion){
	accordion.addEventListener('click', function(){
		accordion.focus();
		return false;
	});
});