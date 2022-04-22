/*
    Pick whether or not a logo is seen on the navbar, for 
    a textual logo new text can be supplied.

    Author: https://github.com/jxmot
    Repository: https://github.com/jxmot/website_template-no_bootstrap
*/
// returns an object, the values it contains indicate the 
// choice of logo - none, icon, text
function getLogoChoice() {
    var ret = {
        logo: false
        ,type: ''
        ,text: ''
    };
    ((ret.type = getQueryParam('logo')) === null ? ret.logo = false : ret.logo = true);
    ((ret.type === 'text') ? ret.text = getQueryParam('text') : null);
    return ret;
};

/*
    setLogo(choice) - manipulate the DOM to get the 
    desired logo choice to be visible

    choice = {
        logo: true or false,
        type: 'icon' or 'text' when "logo" is true
    }

    When "logo" is true the "type" will pick which one:

    type = 'text' :
        <a id="nav_logo_link" class="nav-logo" href="./index.html">
            <div id="nav_logo_text">NOBS</div>
        </a>

    type = 'icon' :
        <a id="nav_logo_link" class="nav-logo-img" href="./index.html">
            <img id="logo_img" class="logo-img">
        </a>

    Both are located in #nav_header and individually within their own 
    <div> tag:

    <!-- Navigation Bar -->
    <div id="nav_header" class="nav-header">
        <!-- Logo, reloads the page. -->
        <div id="nav_logo_choice_text" style="display:none;">
            <a id="nav_logo_link" class="nav-logo" href="./index.html">
                <div id="nav_logo_text">NOBS</div>
            </a>
        </div>
        <div id="nav_logo_choice_icon" style="display:none;">
            <a id="nav_logo_link" class="nav-logo-img" href="./index.html">
                <img id="logo_img" class="logo-img">
            </a>
        </div>
            <!-- remaining navbar HTML goes here -->
    </div>
*/
function setLogo(choice) {
    if(choice.logo === false) {
        // NOTE: this code is redundant, because it's 
        // handled in nobs.js. So it's here in case 
        // we're called from somewhere else.
        $('#nav_close').addClass('nav-icon-no_logo');
        $('.menu a').addClass('menu-item-pad-no_logo');
        $('.menu > li > span').addClass('menu-item-pad-no_logo');
    } else {
        switch(choice.type) {
            case 'icon':
                $('#nav_close').addClass('nav-icon-logo');
                $('.menu a').addClass('menu-item-pad-logo');
                $('.menu > li > span').addClass('menu-item-pad-logo');

                // the image is set in nobs.css:.logo-img
                $('#nav_logo_choice_icon').show();
                $('#nav_logo_choice_icon').attr('style','display: inline-block;');
                $('.nav-logo-img').attr('href', ($('.nav-logo-img').attr('href') + '?' + window.location.search.substr(1)))
                break;

            case 'text':
                $('#nav_close').addClass('nav-icon-logo');
                $('.menu a').addClass('menu-item-pad-logo');

                $('#nav_logo_choice_text').show();
                $('#nav_logo_choice_text').attr('style','display: inline-block;');
                $('.nav-logo').attr('href', ($('.nav-logo').attr('href') + '?' + window.location.search.substr(1)))

                // insert this text into the logo at #nav_logo_text
                if(choice.text !== null) $('#nav_logo_text').text(decodeURIComponent(choice.text));
                break;

            default:
                $('#nav_close').addClass('nav-icon-no_logo');
                $('.menu a').addClass('menu-item-pad-no_logo');
                $('.menu > li > span').addClass('menu-item-pad-no_logo');
                break;
        }
    }
};