/* Get Browser & Device Information

    Some code originally found at:
        https://code-boxx.com/detect-browser-with-javascript/

    Extensively Modified By: https://github.com/jxmot
        * refactored into a function 
        * added mobile/desktop/tablet detection
        * function returns an object - 
            {
                browser: a string with the browser name(s)
                device: a string with the device type 
                mask: a bitmask indicating browser & device 
            }

    Repository: https://github.com/jxmot/website_template-no_bootstrap
*/
// browser name, device types, and corresponding bit masks
const browserMasks = [
     ['Opera', 0x0001]
    ,['Firefox',0x0002]
    ,['Safari',0x0004]
    ,['IE',0x0008]
    ,['Edge',0x0010]
    ,['Chrome',0x0020]
    ,['Blink',0x0040]
    ,['tablet',0x0100]
    ,['mobile',0x0200]
    ,['desktop',0x0400]
];
// indices for browserMasks[]
const OPERA   = 0;
const FIREFOX = 1;
const SAFARI  = 2;
const IE      = 3;
const EDGE    = 4;
const CHROME  = 5;
const BLINK   = 6;
const TABLET  = 7;
const MOBILE  = 8;
const DESKTOP = 9;
// indices for browserMasks[][]
const BSTRING = 0;
const BMASK   = 1;

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
    if(isOpera)   {ret.browser = browserMasks[OPERA][BSTRING]; ret.mask |= browserMasks[OPERA][BMASK];}
    if(isFirefox) {ret.browser = ret.browser + ' ' + browserMasks[FIREFOX][BSTRING]; ret.mask |= browserMasks[FIREFOX][BMASK];}
    if(isSafari)  {ret.browser = ret.browser + ' ' + browserMasks[SAFARI][BSTRING]; ret.mask |= browserMasks[SAFARI][BMASK];}
    if(isIE) {
        ret.browser = ' ' + ret.browser + browserMasks[IE][BSTRING]; 
        ret.mask |= browserMasks[IE][BMASK];
        // IE-10 doesn't even make it this far.
        alert('You appear to be using Internet Exploror, it is obsolete. Please use something newer.');
    }
    if(isEdge)    {ret.browser = ret.browser + ' ' + browserMasks[EDGE][BSTRING]; ret.mask |= browserMasks[EDGE][BMASK];}
    if(isChrome)  {ret.browser = ret.browser + ' ' + browserMasks[CHROME][BSTRING]; ret.mask |= browserMasks[CHROME][BMASK];}
    if(isBlink)   {ret.browser = ret.browser + ' ' + browserMasks[BLINK][BSTRING]; ret.mask |= browserMasks[BLINK][BMASK];}

    // get the device type...
    var ua = navigator.userAgent;
    if(/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        ret.device = browserMasks[TABLET][BSTRING];
        ret.mask  |= browserMasks[TABLET][BMASK];
    } else if(/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        ret.device = browserMasks[MOBILE][BSTRING];
        ret.mask  |= browserMasks[MOBILE][BMASK];
    } else {
        ret.device = browserMasks[DESKTOP][BSTRING];
        ret.mask  |= browserMasks[DESKTOP][BMASK];
    }
    return ret;
};
