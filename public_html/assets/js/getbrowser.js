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

    // which browser is in use?
    if(isOpera) {ret.browser = 'Opera'; ret.mask |= 0x0001;}
    if(isFirefox) {ret.browser = ret.browser + ' Firefox'; ret.mask |= 0x0002;}
    if(isSafari) {ret.browser = ret.browser + ' Safari'; ret.mask |= 0x0004;}
    if(isIE) {
        ret.browser = ret.browser + ' IE';
        ret.mask |= 0x0008;
        alert('You appear to be using Internet Exploror, it is obsolete. Please use something newer.');
    }
    if(isEdge) {ret.browser = ret.browser + ' Edge'; ret.mask |= 0x0010;}
    if(isChrome) {ret.browser = ret.browser + ' Chrome';  ret.mask |= 0x0020;}
    if(isBlink) {ret.browser = ret.browser + ' Blink'; ret.mask |= 0x0040;}

    // get the device type...
    var ua = navigator.userAgent;
    if(/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        ret.device = 'tablet'; // [mask 0x0100]
        ret.mask |= 0x0100;
    } else if(/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        ret.device = 'mobile'; // [mask 0x0200]
        ret.mask |= 0x0200;
    } else {
        ret.device = 'desktop'; // [mask 0x0400]
        ret.mask |= 0x0400;
    }
    return ret;
};
