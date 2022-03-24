/*
    nobs.js - code for the "Website Template - No Bootstrap" project

    Author: https://github.com/jxmot
    Repository: https://github.com/jxmot/website_template-no_bootstrap
*/
const pagetop = '#main';

// turn on debug stuff? 
if(isQueryParam('devdebug') === true) {
    $('#devdebug').show();

    // https://code-boxx.com/detect-browser-with-javascript/
    // OPERA 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // FIREFOX 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';
    // SAFARI 3.0+
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === '[object SafariRemoteNotification]'; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    // INTERNET EXPLORER 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    // EDGE 20+
    var isEdge = !isIE && !!window.StyleMedia;
    // CHROME 1+
    var isChrome = !!window.chrome;
    // BLINK ENGINE DETECTION
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    var browser = '';

    if(isOpera) browser = 'Opera';
    if(isFirefox) browser = browser + ' Firefox';
    if(isSafari) browser = browser + ' Safari';
    if(isIE) {
        browser = browser + ' IE';
        alert('You appear to be using Internet Exploror, it is obsolete. Please use something newer.');
    }
    if(isEdge) browser = browser + ' Edge';
    if(isChrome) browser = browser + ' Chrome';
    if(isBlink) browser = browser + ' Blink';

    document.getElementById('whobrowse').children[0].innerText = browser;
}

// running with or without the logo?
var mklogo = getLogoChoice();
if(mklogo.logo === true) {
    setLogo(mklogo);
} else {
    $('#nav-close').addClass('nav-icon-nologo');
    $('.menu a').addClass('menu-item-pad-no_logo');
}

// this will contain the height of #nav-header 
var hdrheight = -1;
// this function uses hdrheight to calculate 
// where to jump. it allows for the height of 
// the nav bar.
function scrollTo(href) {
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
    } else consolelog('scrollTo() - bad hdrheight');
};

// When the user clicks on the button, scroll to the top of the document
function jumpToTop() {
    //scrollTo('#main');
    scrollTo(`${pagetop}`);
};

$().ready(() => {
    // this is the best place to get the height of the 
    // <header> that contains the nav menu.
    hdrheight = $('#nav-header').height();
    // Set the bottom padding for <main>, all of the pages'
    // content goes inside. The <header> and <footer> must 
    // stay outside of <main>
    $(`${pagetop}`).css('padding-bottom', ($('#page-footer').height() + ($('#page-footer').height() * 0.15)) + 'px');

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
        scrollTo(event.target.href);
    });

    $('.themesw').click(function(event) {
        consolelog('themesw value: ' + event.target.value);
        loadCSS(event.target.value)
    });
});
