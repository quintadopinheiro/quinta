
// function scrollTo(element) {
//   window.scroll({
//     behavior: 'smooth',
//     left: 0,
//     top: element.offsetTop
//   });
// }

$( document).ready(function(){
	console.log( "ready!" );	
	$("#fieldsNavbar").hide()

	// set margin of second navbar
	let root = document.documentElement;
	root.style.setProperty('--main-height', `${$("#mainNavbar").outerHeight()}px`);

	let buffer = 300
    let navsHeight = $("#mainNavbar").outerHeight()+$("#poolNavbar").outerHeight()


	$("#poolNavbarOptions").find("a").click((e) =>{
			e.preventDefault();
			// $("#poolNavbarOptions").find('li').removeClass('active');
			// const tabEl = e.target.parentElement;		
			// tabEl.classList.add("active");

			const sectionId = e.target.getAttribute('href');

			window.scrollTo({
				top: $(sectionId).offset().top-$("#mainNavbar").outerHeight()-$("#poolNavbar").outerHeight(),
				left: 0,
				behavior: 'smooth'
			});
			
		})
		$("#mainNavbarOptions").find("a").click((e) =>{
			console.log('here')
			e.preventDefault();
			const sectionId = e.target.getAttribute('href');
			window.scrollTo({
				top: $(sectionId).offset().top-$("#mainNavbar").outerHeight()-$("#poolNavbar").outerHeight(),
				left: 0,
				behavior: 'smooth'
			});
		})
	
	$(window).scroll(function() {
	    let windscroll = $(window).scrollTop();
	    $('#pool section').each(function(i) {

	        if ($(this).position().top <= windscroll + navsHeight + $('#pool section').eq(i).outerHeight()/3) {
	            $('#poolNavbarOptions li.active').removeClass('active');
	            $('#poolNavbarOptions li').eq(i).addClass('active');
	        }
	    });
	   if (windscroll >= $("#fields").position().top - $('#fields').outerHeight()/2){
	   	console.log('here22')
	   	$("#fieldsNavbar").show()
	   	$("#poolNavbar").hide()
        $('#mainNavbarOptions li.active').removeClass('active');
        $('#fields-sel').parent('li').addClass('active');
	   }
	   else{
	   	$("#fieldsNavbar").hide()
	   	$("#poolNavbar").show()
        $('#mainNavbarOptions li.active').removeClass('active');
        $('#pool-sel').parent('li').addClass('active');
	   }
	})

	// $('#mainNavbar').on('classChange', function() {
	//      		root.style.setProperty('--main-height', `${$("#mainNavbar").outerHeight()}px`);

	// });
	// $(".navbar-toggler-icon").click((e) => {

	// 	root.style.setProperty('--main-height', `${$("#mainNavbar").outerHeight()}px`);
	// })

})

// window.onload=function(){

//   	document.getElementById("automaticoBtn").addEventListener('click', (e) => {
//   		e.preventDefault();
//   	element = document.getElementById("automatico");
//   	console.log(document.getElementById("navBar").offsetHeight)
//   	console.log(element.offsetTop)

// 	window.scrollTo({
// 	  top: element.offsetTop-document.getElementById("navBar").offsetHeight - 10,
// 	  left: 0,
// 	  behavior: 'smooth'
// 	});

// });
// }
