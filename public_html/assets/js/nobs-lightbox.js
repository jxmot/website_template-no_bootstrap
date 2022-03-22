/* Lightbox JS

    Originally found at:
        https://www.w3schools.com/howto/howto_js_lightbox.asp

    Extensively Modified By: 
        https://github.com/jxmot

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
lb_showSlides(lb_slideIndex);

function lb_plusSlides(n) {
  lb_showSlides(lb_slideIndex += n);
}

function lb_currentSlide(n) {
  lb_showSlides(lb_slideIndex = n);
}

function lb_showSlides(n) {
  var i;
  var slides = $('.lb-mySlides');
  if (n > slides.length) {lb_slideIndex = 1}
  if (n < 1) {lb_slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }
  slides[lb_slideIndex-1].style.display = 'block';

  if($('#lb_modal_thumbs').length > 0) {
  var dots = $('.lb-demo');
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' lb-active', '');
  }
  dots[lb_slideIndex-1].className += ' lb-active';
  $('#lb_caption').html(dots[lb_slideIndex-1].alt);
  }
}
