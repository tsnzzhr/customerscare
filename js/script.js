// evet pada saat di klik
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
 	// tangkap elemn ybs
	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');

	e.preventDefault();

});

// parallax
// about
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	//jumbroton
	$('.jumbroton img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	})

	$('.jumbroton h1').css({
		'transform' : 'translate (0px, '+ wScroll/2 +'%)'
	})

	$('.jumbroton p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	//school
	if( wScroll > $('.school').offset().top - 200) {
		$('.school .thumbnail').each(function(i){
			setTimeout(function() {
				$('.school .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1) );
		});
	}

});