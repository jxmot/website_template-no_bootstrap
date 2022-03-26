/* Lightbox JS

    Originally found at:
        https://www.w3schools.com/howto/howto_js_lightbox.asp

    Extensively Modified By: https://github.com/jxmot
        * functions renamed, all are prepended with "lb_".
        * global variables renamed, all are prepended with "lb_".
        * refactored lb_showSlides()
        * added programmatic adjustments to CSS

    Repository: https://github.com/jxmot/website_template-no_bootstrap
*/
function lb_openModal() {
	// TODO: emit a signal that will close the menu
	$('#lb_modal').css('display', 'block');;
}

function lb_closeModal() {
	$('#lb_modal').css('display', 'none');;
}

var lb_slideIndex = 1;

function lb_plusSlides(n) {
	lb_showSlides(lb_slideIndex += n);
}

function lb_currentSlide(n) {
	lb_showSlides(lb_slideIndex = n);
}

function lb_showSlides(n) {
	var i;
	var slides = $('.lb-slides');
	if (n > slides.length) {
		lb_slideIndex = 1
	}
	if (n < 1) {
		lb_slideIndex = slides.length
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slides[lb_slideIndex - 1].style.display = 'block';
    var alt = slides[lb_slideIndex - 1].children[1].alt;
    if((alt !== undefined) && (alt.length > 0)) {
        $('#lb_caption').html(alt);
        $('#lb_caption').css('color','var(--lightbox-modal-caption-color)');
    } else {
        $('#lb_caption').css('color','var(--lightbox-modal-caption-bgcolor)');
        $('#lb_caption').html('.');
    }

	if ($('.lb-modal-thumb-select').length > 0) {
		var thumbs = $('.lb-modal-thumb-select');
		for (i = 0; i < thumbs.length; i++) {
			thumbs[i].className = thumbs[i].className.replace(' lb-active', '');
		}
		thumbs[lb_slideIndex - 1].className += ' lb-active';
	}
}

// fine tune the lightbox when necessary
function adjustLBox() {
    $('.lb-prev').css('margin-top', '6.5%');
    $('.lb-next').css('margin-top', '6.5%');

    $('.lb-prev').css('font-size', '1em');
    $('.lb-next').css('font-size', '1em');
};