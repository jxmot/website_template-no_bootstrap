/*
    nobs.js - code for the "Website Template - No Bootstrap" project

    Author: https://github.com/jxmot
    Repository: https://github.com/jxmot/website_template-no_bootstrap

    Requires: getbrowser.js
*/
const pagetop = '#main';
// let's see which browser is being used (getBrowser() 
// is found in getbrowser.js)
const browserinfo = getBrowser();
// FireFox mobile is an oddball. It does not render 
// pages the same as Chrome mobile. When #devdebug is 
// enabled the differences can be seen in the data.
//
// use this to debug bad browser adjustments
// const badbrowser = browserinfo.mask;
const badbrowser = (browserMasks[FIREFOX][BMASK] | browserMasks[MOBILE][BMASK]);

//devDebug();

// running with or without the logo?
var mklogo = getLogoChoice();
if(mklogo.logo === true) {
    setLogo(mklogo);
} else {
    $('#nav-close').addClass('nav-icon-no_logo');
    $('.menu a').addClass('menu-item-pad-no_logo');
}

// this will contain the height of .nav-header 
var hdrheight = -1;
// this function uses hdrheight to calculate 
// where to jump. it allows for the height of 
// the nav bar.
function nobs_scrollTo(href) {
    var goTo = '';
    // let's close the nav menu...
    $('#nav-togg')[0].checked = false;
    // has the header height been obtained yet?
    if(hdrheight !== -1) {
        if(href.charAt(0) === '#') {
            goTo = href;
        } else {
            let tmp = href.split("#");
            goTo = '#'+tmp[1];
        }
        $('html').stop(true).animate({
            scrollTop: ($(goTo).position().top - hdrheight)
        },450); // NOTE: Any value greater than ~450 will cause 
                // the scroll to miss its target. Why?
    } else consolelog('nobs_scrollTo() - bad hdrheight');
};

// When the user clicks on the to-top button, scroll to the top of the document
function jumpToTop() {
    nobs_scrollTo(`${pagetop}`);
};

function adjustBody() {
    $('body').css('font-size','95%');
};

$().ready(() => {
    // this is the best place to get the height of the 
    // <header> that contains the nav menu.
    hdrheight = $('#nav-header').height();
    // Set the bottom padding for ${pagetop}, all of the pages'
    // content goes inside. The <header> and <footer> must 
    // stay contain all of ${pagetop}
    $(`${pagetop}`).css('padding-bottom', ($('#page-footer').height() + ($('#page-footer').height() * 0.15)) + 'px');

    // if we're being viewed in a "bad" browser 
    // then make the necessary adjustments
    if(badbrowser === browserinfo.mask) {
        // <body> adjustments 
        adjustBody();
        // to-top button
        adjustToTop();
        // footer text <h3> size adjust
        $('.footer-text').css('font-size', '1em');
        // footer height 
        $('#page-footer').css('height','2em');
        // lightbox adjustments
        adjustLBox();
    }

    loadGallery();

    devDebug();
    /*
        wait for a click from any menu item... 
    */
    $('.navitem').click(function(event) {
        consolelog('navitem target: ' + event.target.id);
        consolelog('navitem href: ' + event.target.href);

        // Prevent the default action from occuring.
        event.preventDefault();

        // scroll to the target ID, and place it just 
        // below nav bar (when inactive).
        nobs_scrollTo(event.target.href);
    });

    $('.themesw').click(function(event) {
        consolelog('themesw value: ' + event.target.value);
        loadCSS(event.target.value)
    });
});
