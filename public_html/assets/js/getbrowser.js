/* Get Browser & Device Information

    Some code originally found at, and adapted from 
    examples found here:
        https://code-boxx.com/detect-browser-with-javascript/

    Extensively Modified By: https://github.com/jxmot

    Changes:
        * refactored into functions
        * added mobile/desktop/tablet detection
        * added the use of bits to identify the browser
        * getBrowser() returns an object - 
            {
                browser: a string with the browser name(s)
                device: a string with the device type 
                uagent: the user agent string
                prefix: the CSS prefix used by the browser
                width: value from window.innerWidth
                height: value from window.innerHeight
                mask: a bitmask indicating the specific browser & device 
            }

    NOTE: This code may require a rewrite because of Chrome - 
        https://www.chromium.org/updates/ua-reduction/#TOC-Sample-UA-Strings:-Final-Reduced-State

    Repository: https://github.com/jxmot/website_template-no_bootstrap

    Requires: utils.js
*/
// browser name, device types, and corresponding bit masks
const browserMasks = [
// Browser:
//    String      Mask
//   (BSTRING)   (BMASK)
     ['Opera',   0x0001]
    ,['Firefox', 0x0002]
    ,['Safari',  0x0004]
    ,['IE',      0x0008]
    ,['Edge',    0x0010]
    ,['Chrome',  0x0020]
    ,['Blink',   0x0040]
    ,['Gecko',   0x0080]
// 0x0100,0x0200,0x0400 - available for use
    ,['BYPASS_B',0x0800]
// Device:
//    String      Mask
    ,['tablet',  0x1000]
    ,['mobile',  0x2000]
    ,['desktop', 0x4000]
    ,['BYPASS_D',0x8000]
];
// indices for browserMasks[]
const OPERA    = 0;
const FIREFOX  = 1;
const SAFARI   = 2;
const IE       = 3;
const EDGE     = 4;
const CHROME   = 5;
const BLINK    = 6;
const GECKO    = 7;
const BYPASS_B = 8;
const TABLET   = 9;
const MOBILE   = 10;
const DESKTOP  = 11;
const BYPASS_D = 12;
// indices for browserMasks[][]
const BSTRING  = 0;
const BMASK    = 1;
// Bypass mask, used for detecting if the 
// getBrowser() functionality is bypassed.
const BYP_MASK = (browserMasks[BYPASS_B][BMASK] | browserMasks[BYPASS_D][BMASK]);

const ALL_BMASK = 0x07FF;
const ALL_DMASK = 0x7000;

function getBrowser() {
    // this object is returned, it is initialized 
    // the values needed for "bypass". placing "&byp"
    // or "?byp" in the URL will disable browser checking.
    var ret = {
        browser: '',
        device:  '',
        uagent:  '',
        prefix:  '',
        width:   0,
        height:  0,
        mask:    0x0000
    };

    // see if browser detection has been bypassed and 
    // if not then continue...
    if(isQueryParam('byp') === false) {
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
    } else {
        ret.browser = 'BYPASS_B';
        ret.device  = 'BYPASS_D';
        ret.mask    = BYP_MASK;
    }
    return ret;
};
