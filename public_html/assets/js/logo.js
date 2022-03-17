/*
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

            <!-- remaining navbar HTML goes here -->
        </header>
*/
function setLogo(choice) {
    if(choice.logo === false) return;
    else {
        switch(choice.type) {
            case 'icon':
                // the image is set in nobs.css:.logo-img
                $('#nav-logo-choice_icon').show();
                break;

            case 'text':
                $('#nav-logo-choice_text').show();
                let txt = getQueryParam('text');
                if(txt !== null) {
                    // insert this text into the logo
                    // at #nav-logo-text
                    consolelog('logo text = '+txt);
                }
                break;

            default:
                break;
        }
    }
};