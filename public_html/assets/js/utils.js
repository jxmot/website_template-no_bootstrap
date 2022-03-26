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
function loadJScript(jsfile) {
    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';

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