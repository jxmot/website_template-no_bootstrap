/*
    Pick whether or not a logo is seen on the navbar, for 
    a textual logo new text can be used.
*/
function getQueryParam(param) {
    var arg = null;
    window.location.search.substr(1).split("&").forEach(function(item) {
        if (param === item.split("=")[0]) {
            arg = item.split("=")[1];
        }
    });
    return ((arg === undefined) || (arg === '') ? null : arg);
};

function getLogoChoice() {
    var ret = {
        logo: false,
        type: ''
    };
    ((ret.type = getQueryParam('logo')) === null ? ret.logo = false : ret.logo = true);
    return ret;
};

/*
    setLogo(choice) - 

    choice = {
        logo: true or false,
        type: 'icon' or 'text' when "logo" is true
    }

    When "logo" is true the "type" will pick which one:

    type = 'text' :
        <a id="nav-logo_link" class="nav-logo" href="./index.html">
            <div id="nav-logo-text">NOBS</div>
        </a>

    type = 'icon' :
        <a id="nav-logo_link" class="nav-logo-img" href="./index.html">
            <img id="logo-img" class="logo-img">
        </a>

    Both are located in #nav-header individually within a their own 
    <div> tag:
        <header id="nav-header" class="nav-header">
            <div id="nav-logo-choice_text" style="display:none;">
                <a id="nav-logo_link" class="nav-logo" href="./index.html">
                    <div id="nav-logo-text">NOBS</div>
                </a>
            </div>
            <div id="nav-logo-choice_icon" style="display:none;">
                <a id="nav-logo_link" class="nav-logo-img" href="./index.html">
                    <img id="logo-img" class="logo-img">
                </a>
            </div>
            <!-- remaining navbar HTML goes here -->
        </header>
*/
function setLogo(choice) {
    if(choice.logo === false) {
        // NOTE: this code is redundant, because it's 
        // handled in nobs.js. So it's here in case 
        // we're called from somewhere else.
        $('#nav-close').addClass('nav-icon-nologo');
        $('.menu a').addClass('menu-item-pad-no_logo');
        return;
    } else {
        $('#nav-close').addClass('nav-icon-logo');
        $('.menu a').addClass('menu-item-pad-logo');

        switch(choice.type) {
            case 'icon':
                // the image is set in nobs.css:.logo-img
                $('#nav-logo-choice_icon').show();
                $('#nav-logo-choice_icon').attr('style','display: inline-block;');
                $('.nav-logo-img').attr('href', ($('.nav-logo-img').attr('href') + '?' + window.location.search.substr(1)))
                break;

            case 'text':
                $('#nav-logo-choice_text').show();
                $('#nav-logo-choice_text').attr('style','display: inline-block;');
                $('.nav-logo').attr('href', ($('.nav-logo').attr('href') + '?' + window.location.search.substr(1)))
                let txt = getQueryParam('text');
                if(txt !== null) {
                    // insert this text into the logo
                    // at #nav-logo-text
                    $('#nav-logo-text').text(decodeURIComponent(txt));
                }
                break;

            default:
                break;
        }
    }
};