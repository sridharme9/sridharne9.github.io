$(document).ready(function(){
	$("ul.nav li a[href^='#']").on('click', function(e) {
		var target = this.hash;
		var offset = $('#navbar-container').height();
		e.preventDefault();
		console.log("clicked");
		$('html, body').animate({
				scrollTop: $(this.hash).offset().top - offset
			}, 900, function(){
				window.location.hash = target;
			}
		);

	});
});