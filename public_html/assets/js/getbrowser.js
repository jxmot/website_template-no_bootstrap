/* Get Browser & Device Information

    Originally found at:
        https://code-boxx.com/detect-browser-with-javascript/

    Extensively Modified By: https://github.com/jxmot
        * refactored into a function 
        * added mobile/desktop/tablet detection
        * function returns an object - 
            {
                browser: a string with the browser name(s)
                device: a string with the device type 
                mask: a bitmask indicagting browser & device 
            }

    Repository: https://github.com/jxmot/website_template-no_bootstrap
*/
function getBrowser() {
    var ret = {
        browser: '',
        device: '',
        mask: 0x0000
    };

    var mask = 0x0000;

    // Find the browser...
    // OPERA 8.0+ [mask 0x0001]
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // FIREFOX 1.0+ [mask 0x0002]
    var isFirefox = typeof InstallTrigger !== 'undefined';
    // SAFARI 3.0+ [mask 0x0004]
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === '[object SafariRemoteNotification]'; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    // INTERNET EXPLORER 6-11 [mask 0x0008]
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    // EDGE 20+ [mask 0x0010]
    var isEdge = !isIE && !!window.StyleMedia;
    // CHROME 1+ [mask 0x0020]
    var isChrome = !!window.chrome;
    // BLINK ENGINE DETECTION [mask 0x0040]
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    var browser = '';
    // show which browser is in use...
    if(isOpera) {browser = 'Opera'; mask |= 0x0001;}
    if(isFirefox) {browser = browser + ' Firefox'; mask |= 0x0002;}
    if(isSafari) {browser = browser + ' Safari'; mask |= 0x0004;}
    if(isIE) {
        browser = browser + ' IE';
        mask |= 0x0008;
        alert('You appear to be using Internet Exploror, it is obsolete. Please use something newer.');
    }
    if(isEdge) {browser = browser + ' Edge'; mask |= 0x0010;}
    if(isChrome) {browser = browser + ' Chrome';  mask |= 0x0020;}
    if(isBlink) {browser = browser + ' Blink'; mask |= 0x0040;}

    // show the device type...
    var device = '';
    var ua = navigator.userAgent;
    if(/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        device = 'tablet'; // [mask 0x0100]
        mask |= 0x0100;
    } else if(/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        device = 'mobile'; // [mask 0x0200]
        mask |= 0x0200;
    } else {
        device = 'desktop'; // [mask 0x0400]
        mask |= 0x0400;
    }

    ret.browser = browser;
    ret.device = device;
    ret.mask = mask;
    return ret;
};
