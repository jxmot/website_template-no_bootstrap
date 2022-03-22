/*
    Utility functions: a generic collection that isn't specific 
    to the context of its use.

    Author: https://github.com/jxmot
    Repository: https://github.com/jxmot/website_template-no_bootstrap
*/
// look for a specifc query parameter, and if it exists
// return its value.
function getQueryParam(param) {
    var arg = null;
    window.location.search.substr(1).split("&").forEach(function(item) {
        if (param === item.split("=")[0]) {
            arg = item.split("=")[1];
        }
    });
    return ((arg === undefined) || (arg === '') ? null : arg);
};

// load a javascript file by making a <script>
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
// "theme" CSS file and then loading subsequent "theme"  
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
