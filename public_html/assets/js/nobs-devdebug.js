/*
    nobs_devdebug.js - Gathers info & tests functions, the 
    resulting information is placed in <section id="devdebug">,
    but only if it is visible. Add "?devdebug" or "&devdebug"
    to the URL of the containing page to enable this feature.

    Author: https://github.com/jxmot
    Repository: https://github.com/jxmot/website_template-no_bootstrap
*/
function devDebug() {
    // turn on debug stuff? 
    if(isQueryParam('devdebug') === true) {
        $('#devdebug').show();

        // load a js file and call a function that's inside
        loadJScript('./assets/js/loadjscript_test.js', function() {
            // this function is located in the script above
            loadjscript_test();
        });
        // Wait for a media query state change...
        var mqstate_devd = mediaqueryState('(min-width: 768px)', function(e) {
            // Check if the media query is true...
            if(e.matches) {
                document.getElementById('mqstate').children[0].innerText = e.media + ' Matched!';
            } else {
                document.getElementById('mqstate').children[0].innerText = e.media + ' UNmatched!';
            }
        });
        // Check if the media query is true...
        if(mqstate_devd.match) {
            document.getElementById('mqstate').children[0].innerText = mqstate_devd.media + ' Matched!';
        } else {
            document.getElementById('mqstate').children[0].innerText = mqstate_devd.media + ' UNmatched!';
        }
    
        // Wait for a media query state change...
        var mqstate_port = mediaqueryState('(orientation: portrait)', function(e) {
            // Check if the media query is true...
            if(e.matches) {
                document.getElementById('portrait').children[0].innerText = e.media + ' Matched!';
            } else {
                document.getElementById('portrait').children[0].innerText = e.media + ' UNmatched!';
            }
        });
        // Check if the media query is true...
        if(mqstate_port.match) {
            document.getElementById('portrait').children[0].innerText = mqstate_port.media + ' Matched!';
        } else {
            document.getElementById('portrait').children[0].innerText = mqstate_port.media + ' UNmatched!';
        }
    
        // Wait for a media query state change...
        var mqstate_land = mediaqueryState('(orientation: landscape)', function(e) {
            // Check if the media query is true...
            if(e.matches) {
                document.getElementById('landscape').children[0].innerText = e.media + ' Matched!';
            } else {
                document.getElementById('landscape').children[0].innerText = e.media + ' UNmatched!';
            }
        });
        // Check if the media query is true...
        if(mqstate_land.match) {
            document.getElementById('landscape').children[0].innerText = mqstate_land.media + ' Matched!';
        } else {
            document.getElementById('landscape').children[0].innerText = mqstate_land.media + ' UNmatched!';
        }
    
        // display browser information: browser name, device, and 
        // a "mask" of bits indicating browser and device.
        // browserinfo was obtained earlier
        var binfo = browserinfo;
        document.getElementById('whobrowse').children[0].innerText = binfo.browser;
        document.getElementById('device').children[0].innerText = binfo.device;
        // display the mask value as a zero-padded binary string
        var mstr = '';
        if(binfo.mask.toString(2).length < 16) {
            for(x = 0; x < (16 - binfo.mask.toString(2).length); x++) {
                mstr = mstr + '0';
            }
            mstr = mstr + binfo.mask.toString(2);
        } else mstr = binfo.mask.toString(2);
        document.getElementById('mask').children[0].innerText = mstr + ' - 0x' + binfo.mask.toString(16);
        // is it a BAD browser?
        document.getElementById('isgood').children[0].innerText = (badbrowser === binfo.mask ? 'BAD' : 'GOOD');
    }
};
