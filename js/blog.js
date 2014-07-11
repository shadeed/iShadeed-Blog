$(window).scroll(function() {
    var height = $(window).scrollTop();
    var width = $(window).width();
    if(height  > 105) {
        $('.post-progress').css("width","+=20");
    }
    console.log('h'+height);
    console.log('w'+width);
});

$(document).ready(function() {
	$("#projectclick").on("click", function () {
		//alert("hello");
		$('.project-image').css("display","block");
	});

	$("#modalclose").on("click", function () {
		//alert("hello");
		$('.project-image').css("display","none");
	});
});