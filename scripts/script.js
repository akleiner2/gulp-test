/*
 * Just a very basic script to add visual effects to elements.
 */

$(document).ready(function(){
	$('h1').hide().fadeIn("slow");
	$('p').css("opacity", 0).delay(500).animate({opacity: 1});
});