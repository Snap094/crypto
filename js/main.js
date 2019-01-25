

$('body').on('click','.burger-menu_button',function () {
	let mobileMenu = $('.burger-menu_nav');
	$(this).parents().find('.burger-menu').toggleClass('burger-menu_active');
	mobileMenu.toggleClass('active');
	console.log(mobileMenu)
	if ($(this).parent().hasClass('burger-menu_active')){
		$('body').css('overflow', 'hidden');
		$('.burger-menu_overlay').addClass('active')
	} else {
		$('body').css('overflow', 'visible');
		$('.burger-menu_overlay').removeClass('active')
	}
} )

$(document).ready(function(){
	$(".btn_scroll").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
