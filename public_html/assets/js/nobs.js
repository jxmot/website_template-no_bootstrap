/*
    nobs.js - code for the "Website Template - No Bootstrap" project

    Author: https://github.com/jxmot
    Repository: https://github.com/jxmot/website_template-no_bootstrap
*/

// A single place to control if calls to 
// console.log() will produce any output.
var conlogoutput = true;
function consolelog(text) {
    if(conlogoutput) console.log(text);
};

// this will contain the height of #nav-header 
var hdrheight = -1;

function scrollTo(href) {
    var goTo = '';
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

$().ready(() => {
    // this is the best place to get the height of the 
    // <header> that contains the nav menu.
    hdrheight = $('#nav-header').height();
    // Set the bottom padding for <main>, all of the pages'
    // content goes inside. The <header> and <footer> must 
    // stay outside of <main>
    $('#main').css('padding-bottom', ($('#page-footer').height() + ($('#page-footer').height() * 0.15)) + 'px');

    /*
        wait for a click from any menu item... 
    */
    $('.navitem').click(function(event) {
        consolelog('navitem target: ' + event.target.id);
        consolelog('navitem href: ' + event.target.href);

        // Prevent the default action from occuring.
        event.preventDefault();

        // let's close the nav menu...
        $('#nav-togg')[0].checked = false;

        // scroll to the target ID, and place it just 
        // below nav bar (when inactive).
        scrollTo(event.target.href);
    });
});
