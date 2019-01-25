// function burgerMenu(selector) {
// 	let menu = $(selector);
// 	let button = menu.find('.burger-menu_button');
// 	let links = menu.find('.burger-menu_link');
// 	let overlay = menu.find('.burger-menu_overlay');

// 	button.on('click', (e) => {
// 		e.preventDefault();
// 		toggleMenu();

// 	});

// 	links.on('click', () => toggleMenu());
// 	overlay.on('click', () => toggleMenu());

// 	function toggleMenu() {
// 		menu.toggleClass('burger-menu_active');

// 	 	if (menu.hasClass('burger-menu_active')){
// 	 		$('body').css('overflow', 'hidden');
// 		} else {
// 			$('body').css('overflow', 'visible');
// 		}
// 	}
// }
// burgerMenu('.burger-menu');



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


// var elem = document.getElementById('task-block');
// var scroltop = false;	
// document.addEventListener('scroll', function() {
// 	var posTop = elem.getBoundingClientRect().top;


// 	elem.classList.toggle(posTop < window.innerHeight);
//   // console.log(elem)
//   if(posTop > 0 && !scroltop){
//   	var id  = $('#task-block'),
//   	top = $(id).offset().top;
//   	console.log('hello')
//   	$('body,html').animate({scrollTop: top},{done:function(){
//   		$(this).animate().stop(true)
//   		console.log('завершило')
//   		scroltop = true
//   	},duration: 1500});
//   }else if() 
// });

//  const elem = document.getElementById('task-block');

// document.addEventListener('scroll', onScroll);

// function onScroll() { 
//   const posTop = elem.getBoundingClientRect().top;

//   if(posTop + elem.clientHeight <= 'visible', posTop < window.innerHeight) {
//     elem.classList.add('visible');
//     document.removeEventListener('scroll', onScroll);
//     var id  = $('#task-block'),
//   	 top = $(id).offset().top;
//   	console.log('hello')
//   	$('body,html').animate({scrollTop: top}, 1500);
//   }else if()

// };

//  const scroltop = document.getElementById('preview-project');

// document.addEventListener('scroll', function() {
//   const posTop = scroltop.getBoundingClientRect().bottom;


//   scroltop.classList.toggle('visible', posTop < window.innerHeight);
//   console.log(posTop);
//   if(posTop > 0){
//   	var id  = $('#preview-project'),
//   	 top = $(id).offset().top;
//   	console.log('hello')
//   	$('body,html').animate({scrollTop: top}, 1500);
//   	return false;
//   } 

// });

// $(function() {
//     var blockTop = $('.task-block').offset().top;
//     var CountUpFlag = 0;
//     var $window = $(window);
//     $window.on('load scroll', function() {
//         var top = $window.scrollTop();
//         var height = $window.height();
//         if (top + height >= blockTop && CountUpFlag == 0) {
//             CountUp();
//             CountUpFlag = 1;
//         }
//     });
//     function CountUp() {
//     	var id  = $('#task-block'),
//     	top = $(id).offset().top;
//     	console.log('hello')
//     	$('body,html').animate({scrollTop: top}, 1500);
//     }
// });

// $(function() {
//     var blockTop = $('.preview-project').offset().top;
//     var CountUpFlag = 0;
//     var $window = $(window);
//     $window.on('load scroll', function() {
//         var top = $window.scrollTop();
//         var height = $window.height();
//         if (top + height >= blockTop && CountUpFlag == 0) {
//     	console.log('зашло')

//             CountUp();
//             CountUpFlag = 1;
//         }
//     });
//     function CountUp() {
//     	var id  = $('#preview-project'),
//     	top = $(id).offset().top;
//     	console.log('hello')
//     	$('body,html').animate({scrollTop: top}, 1500);
//     }
// });