/*
    Utility functions: a generic collection that isn't specific 
    to the context of its use.

    Author: https://github.com/jxmot
    Repository: https://github.com/jxmot/website_template-no_bootstrap
*/
// A single place to control if calls to 
// console.log() will produce any output.
var conlogoutput = true;
function consolelog(text) {
    if(conlogoutput) console.log(text);
};

// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
function getQuerys(query) {
    const params = new URLSearchParams(query);
    var ret = [];
    for (const entry of params.entries()) {
        ret.push(entry);
    }
    return ret;
};

// look for a specifc query parameter, and if it exists
// return its value otherwise return null.
function getQueryParam(param) {
    var result = getQuerys(window.location.search);
    if(result.length > 0) {
        for(var ix = 0; ix < result.length; ix++) {
            if(result[ix][0] === param) {
                return ((result[ix][1] === undefined) || (result[ix][1] === '') ? null : result[ix][1]);
            }
        }
    }
    return null;
};

// does a specific parameter exist? if yes then return 
// true, else false. Useful for things like: ?param1&param2&...
function isQueryParam(param) {
    var result = getQuerys(window.location.search);
    if(result.length > 0) {
        for(var ix = 0; ix < result.length; ix++) {
            if(result[ix][0] === param) {
                return true;
            }
        }
    }
    return false;
};

// load a javascript file by making a <script> tag 
// and append it to the <head>
function loadJScript(jsfile, callback) {
    const script = document.createElement('script');
    script.src = jsfile;
    script.type = 'text/javascript';
    script.addEventListener('load', function() {
        // The script is loaded completely
        callback();
    });
    document.getElementsByTagName('head')[0].append(script);
};

// load a CSS file by making a <link> and loading it 
// after all previously loaded CSS files.
// 
// NOTE: This is inefficient, for example if loading a 
// 'theme' CSS file and then loading subsequent 'theme'  
// files may require additional resources. Something 
// like `CSSStyleSheet` could work if it was available
// in ALL browsers. Some, like Firefox require that 
// settings are changed in the browser first. See - 
// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet
function loadCSS(cssfile) {
    var style = document.createElement('link');
    style.href = cssfile;
    style.type = 'text/css';
    style.rel = 'stylesheet';

    document.getElementsByTagName('head')[0].append(style);
};

// get the ordinal of a number
// Usage:
//      var ord = getOrdinal(100);
//
//      var ord = getOrdinal(1.1);
//      if(ord.length > 2) ERROR!
//      else OK!
//
//      var ord = getOrdinal(-5);
//      if(ord.length > 2) ERROR!
//      else OK!
function getOrdinal(number) {
    var ord = '';

    if(number < 0 || (Math.round(number) !== number)) {
        ord = 'POSITIVE WHOLE NUMBERS ONLY!';
    } else {
        if (number > 3 && number < 21) ord = 'th';
        else {
            switch (number % 10) {
                case 1: 
                    ord = 'st';
                    break;
                case 2: 
                    ord = 'nd';
                    break;
                case 3: 
                    ord = 'rd';
                    break;
                default: 
                    ord = 'th';
                    break;
            }
        }
    }
    return ord;
};

function disableScrolling() {
    // To get the scroll position of current webpage
    var TopScroll  = window.pageYOffset || document.documentElement.scrollTop;
    var LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;
    // if scroll happens, set it to the previous value
    // and give the illusion that no scrolling is occurring
    window.onscroll = function() {
        window.scrollTo(LeftScroll, TopScroll);
    };
};

function enableScrolling(func = null) {
    if(func === null)
        window.onscroll = function() {};
    else
        window.onscroll = function() {func()};
};

/*
    mediaqueryState() - test if a media query is in 
    effect, optionally pass a callback function to 
    be notified of future changes in state.

    Useful Info:
        https://caniuse.com/?search=matchMedia
        (2015) http://www.javascriptkit.com/dhtmltutors/cssmediaqueries.shtml

    Possible Queries:
        '(orientation: portrait)'
        '(orientation: landscape)'
        '(min-width: 768px)' - or some other px values
        '(max-width: 768px)'

    Usage:
        if(mediaqueryState('(min-width: 768px)')) 
            // media query is matched
        else
            // media query is not matched

        mediaqueryState('(min-width: 768px)', function(e) {
            // Check if the media query is true...
            if (e.matches) {
                console.log(e.media + ' Matched!');
            } else {
                console.log(e.media + ' UNmatched!');
            }
        });
*/
function mediaqueryState(mqy, callback = null) {
    var mql = matchMedia(mqy);
    if(callback !== null) {
        mql.addListener(callback);
    }
    return {match: mql.matches, media: mqy};
};

// return a value as a zero-padded binary string
function toBinary(bdata, bitq = 16) {
    var bstr = '';
    if(bdata.toString(2).length < bitq) {
        for(x = 0; x < (bitq - bdata.toString(2).length); x++) {
            bstr = bstr + '0';
        }
        bstr = bstr + bdata.toString(2);
    } else bstr = bdata.toString(2);
    return bstr;
};

// return a value as a zero-padded hexadecimal string
// nibq is the quantity of "nibbles" (4 bit groups) 
function toHex(bdata, nibq = 8) {
    var hstr = '';
    if(bdata.toString(16).length < nibq) {
        hstr = '0x';
        for(x = 0; x < (nibq - bdata.toString(16).length); x++) {
            hstr = hstr + '0';
        }
        hstr = hstr + bdata.toString(16);
    } else hstr = bdata.toString(16);
    return hstr;
};
