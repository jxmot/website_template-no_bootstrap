/*
    totop.js - 'To Top' functionality, displays a stylized 
    'to top' button when the document is scrolled past a 
    specific distance determined by the length of the document.

    NOTE: The scrollTo() function resides elsewhere. That is 
    because it needs access to the height of the page's nav 
    bar. See nobs.js

    As described at (but with major modifications & improvements) - 
        https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

    Author: https://github.com/jxmot
    Repository: https://github.com/jxmot/website_template-no_bootstrap
*/
// call our function when the window contents are scrolled
window.onscroll = function() {onWindowScroll()};

// https://linuxhint.com/disable-scrolling-javascript/

// A percentage of document size, if scrolled past this
// point the 'to top' button will be displayed. Adjust 
// as needed.
const scroll_travel = 0.05;
// keeps redundant execution to a minimum
var isToTop = false;

function onWindowScroll() {
    // for debugging
    //dump();
    if(showToTop()) {
        // has the button been enabled yet?
        if(isToTop === false) {
            document.getElementById('gototop-button').style.display = 'block';
            isToTop = true;
            // if #devdebug is enabled then display some data
            if(document.getElementById('devdebug').style.display === '') {
                document.getElementById('totop_w').children[0].innerText = document.getElementById('gototop-button').offsetWidth;
                document.getElementById('totop_h').children[0].innerText = document.getElementById('gototop-button').offsetHeight;
                document.getElementById('totop_r').children[0].innerText = JSON.stringify(document.getElementById('gototop-button').getBoundingClientRect(), null, 4);
            }
        }
    } else {
        // has the button been disabled yet?
        if(isToTop === true) {
            document.getElementById('gototop-button').style.display = 'none';
            isToTop = false;
        }
    }
};

// returns true if the 'to top' button should be made visible
function showToTop() {
    // the point where the the button appears is based on the 
    // percentage of the height of the document and NOT the window.
    if(Math.round(($(document).height() * scroll_travel)) < document.documentElement.scrollTop) return true;
    else return false;
};

// called as needed after the page has loaded, this will 
// adjust the size of the to-top button.
function adjustToTop() {
    // the values of these adjustments are dependant 
    // on the values in .gototop(totop.css)
    document.getElementById('gototop-button').style.right  = '5%';
    document.getElementById('gototop-button').style.width  = '1.5em';
    document.getElementById('gototop-button').style.height = '1.5em';
    document.getElementById('gototop_span').style.fontSize = '0.7em';
};

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
};
