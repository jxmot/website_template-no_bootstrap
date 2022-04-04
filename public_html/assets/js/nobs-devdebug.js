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
                document.getElementById('dd_mqstate').children[0].innerText = e.media + ' Matched!';
            } else {
                document.getElementById('dd_mqstate').children[0].innerText = e.media + ' UNmatched!';
            }
        });
        // Check if the media query is true...
        if(mqstate_devd.match) {
            document.getElementById('dd_mqstate').children[0].innerText = mqstate_devd.media + ' Matched!';
        } else {
            document.getElementById('dd_mqstate').children[0].innerText = mqstate_devd.media + ' UNmatched!';
        }
    
        // Wait for a media query state change...
        var mqstate_port = mediaqueryState('(orientation: portrait)', function(e) {
            // Check if the media query is true...
            if(e.matches) {
                document.getElementById('dd_portrait').children[0].innerText = e.media + ' Matched!';
            } else {
                document.getElementById('dd_portrait').children[0].innerText = e.media + ' UNmatched!';
            }
        });
        // Check if the media query is true...
        if(mqstate_port.match) {
            document.getElementById('dd_portrait').children[0].innerText = mqstate_port.media + ' Matched!';
        } else {
            document.getElementById('dd_portrait').children[0].innerText = mqstate_port.media + ' UNmatched!';
        }
    
        // Wait for a media query state change...
        var mqstate_land = mediaqueryState('(orientation: landscape)', function(e) {
            // Check if the media query is true...
            if(e.matches) {
                document.getElementById('dd_landscape').children[0].innerText = e.media + ' Matched!';
            } else {
                document.getElementById('dd_landscape').children[0].innerText = e.media + ' UNmatched!';
            }
        });
        // Check if the media query is true...
        if(mqstate_land.match) {
            document.getElementById('dd_landscape').children[0].innerText = mqstate_land.media + ' Matched!';
        } else {
            document.getElementById('dd_landscape').children[0].innerText = mqstate_land.media + ' UNmatched!';
        }
    
        // display browser information: browser name, device, and 
        // a "mask" of bits indicating browser and device.
        // browserinfo was obtained earlier (found in nobs.js)
        var binfo = browserinfo;
        document.getElementById('dd_whobrowse').children[0].innerText = binfo.browser;
        document.getElementById('dd_device').children[0].innerText = binfo.device;
        document.getElementById('dd_prefix').children[0].innerText = binfo.prefix;
        var mstr = toBinary(binfo.mask);
        document.getElementById('dd_mask').children[0].innerText = mstr + ' - ' + toHex(binfo.mask);
        // is it a BAD browser?
        document.getElementById('dd_isgood').children[0].innerText = (badbrowser === binfo.mask ? 'BAD' : 'GOOD');
        // user agent
        document.getElementById('dd_uagent').innerText = binfo.uagent;
        // inner dimensions
        document.getElementById('dd_iwidth').children[0].innerText  = binfo.width;
        document.getElementById('dd_iheight').children[0].innerText = binfo.height;
        // what is a rem? 
        document.getElementById('dd_remtopx').children[0].innerText = getComputedStyle(document.documentElement).fontSize;

        // display cookie info
        if(typeof getAllCookies === 'function') {
            $('#dd_cookies').css('display', 'block');
            // get the cookies...
            var cookies = getAllCookies();
            // if no cookies then cookies[] will have a single
            // empty ('') entry.
            if((cookies.length > 0) && (cookies[0] !== '')) {
                for(var ix = 0;ix < cookies.length;ix++) {
                    $('#dd_cookies_list').append(`<li>#${ix+1} - ${cookies[ix]}</li>`);
                }
                $('#dd_clrcookies').css('display','');
            } else {
                $('#dd_cookies_list').append('<li>No cookies found!</li>');
                $('#dd_clrcookies').css('display','none');
            }

            // delete all cookies, and update the data
            $('#dd_clrcookies').click(function(ev) {
                if(typeof deleteAllCookies === 'function') {
                    let deld = deleteAllCookies();
                    $('#dd_cookies_list').empty();
                    let werewas = (deld > 1 ? 'cookies were' : 'cookie was');
                    $('#dd_cookies_list').append(`<li>${deld} ${werewas} deleted</li>`);
                    const tdelay = 5000;
                    $('#dd_cookies_list').append(`<li>This page will reload in ${tdelay} seconds...</li>`);
                    setTimeout(function() {
                        window.location.href = '';
                        window.location.reload();
                    }, tdelay);
                }
            });
        }
    }
};
