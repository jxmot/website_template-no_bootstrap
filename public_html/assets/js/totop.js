/*
    totop.js - "To Top" functionality, displays a stylized 
    "to top" button when the document is scrolled past a 
    specific distance.

    NOTE: The scrollTo() function resides elsewhere. That is 
    because it needs access to the height of the page's nav 
    bar.

    As described at (but with major modifications & improvements) - 
        https://www.w3schools.com/howto/howto_js_scroll_to_top.asp


    Author: https://github.com/jxmot
    Repository: https://github.com/jxmot/website_template-no_bootstrap
*/
// call our function when the window contents are scrolled
window.onscroll = function() {onWindowScroll()};

// a percentage of document size, if scrolled past this
// point the "to top" button will be displayed.
const scroll_travel = 0.05;

function onWindowScroll() {
    // for debugging
    //dump();

    if(showToTop()) {
        document.getElementById("gototop-button").style.display = "block";
    } else {
        document.getElementById("gototop-button").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function jumpToTop() {
// NOTE: modify the argument to use the target 
// that's the most appropriate for your needs
    scrollTo('#main');
} 

// returns true if the "to top" button should be made visible
function showToTop() {
    // the point where the the button appears is based on the 
    // percentage of the height of the document and NOT the window.
    if(Math.round(($(document).height() * scroll_travel)) < document.documentElement.scrollTop) return true;
    else return false;
}

// for debugging
function dump() {
    console.log($(document).height());
    console.log(document.documentElement.scrollTop);
    console.log(Math.round($(document).height() * scroll_travel));
    console.log(Math.round(($(document).height() * scroll_travel)) < document.documentElement.scrollTop);
    console.log('showToTop() - ' + showToTop());
    console.log('-------');
    console.log(document.body.scrollTop);
    console.log('=======');
}
