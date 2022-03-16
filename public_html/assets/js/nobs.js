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

$().ready(() => {
    // this is the best place to get the height of the 
    // <header> that contains the nav menu.
    var hdrheight = $('#nav-header').height();
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
        var scrollID = event.target.href;
        var tmp = scrollID.split("#");
        $('html').stop(true).animate({
            scrollTop: ($('#'+tmp[1]).position().top - hdrheight)
        },0);
    });
});
