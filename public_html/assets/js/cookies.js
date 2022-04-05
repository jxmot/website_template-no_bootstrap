/*
    Cookies:
        makeCookie()        - creates a cookie
        getCookie()         - get a cookie
        getAllCookies()     - get an array of all cookies
        deleteAllCookies()  - delete all cookies
        deleteCookie()      - deletes a specified cookie

    Adapted From:
        https://www.w3schools.com/js/js_cookies.asp

    Cookie Info:
        https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies

    Good cookie description, but the tutorial is junk - 
        https://www.w3resource.com/javascript/cookies/introduction-cookies.php
*/
const default_cookie_expire = 5;

function makeCookie(name, val, days = default_cookie_expire) {
    let encval = '';

    switch(typeof val) {
        case 'string':
            encval = encodeURIComponent(val);
            break;

        case 'number':
        case 'boolean':
            encval = encodeURIComponent(val.toString());
            break;

        case 'object':
            encval = encodeURIComponent(JSON.stringify(val));
            break;

        case 'undefined':
            encval = 'undefined';
            break;

        default:
            encval = encodeURIComponent('error '+typeof val);
            break;
    };

    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));

    /*
        This is going to send a simple cookie. The "domain" will 
        be left as default. Other cookie fields may be added later.
    */
    document.cookie = `${name}=${encval};expires=${d.toUTCString()};path=/`;
};

function getCookie(_name) {
    let ret = '';
    let name = _name + '=';

    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            ret = c.substring(name.length, c.length);
            break;
        }
    }
    return ret;
};

function getAllCookies() {
    let ret = [];
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        ret.push(ca[i]);
    }
    return ret;
};

function deleteAllCookies() {
    let cdel = 0;
    let cookies = document.cookie.split(";");
    for(let i = 0; i < cookies.length; i++) {
        if(cookies[i] !== '') {
            let cookie = cookies[i];
            let eqPos = cookie.indexOf("=");
            let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
            cdel += 1;
        }
    }
    // return the number of cookies that were deleted
    return cdel
};

function deleteCookie(name) {
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
};

/*
    Cookie Consent Management:
        hasConsent()    - returns true if the users has accepted
        adjustCookies() - adjust the CSS for the consent dialog
        $().ready(...)  - on page ready manage the cookie consent
*/
const default_cookie_name = 'cookie_consent';

function hasConsent(name = default_cookie_name) {
    return !!getCookie(name);
};

function adjustCookies() {
    $('.cookie-con').css('margin-left','0.5rem');
    $('.cookie-con').css('margin-right','0.5rem');
    $('.cookie-con-button').css('font-size','0.75rem');
};

$().ready(() => {
    if(hasConsent() === false) {
        $('#cookie_con').css('display', 'block');
        $('.cookie-con-button').click(function(event) {
            if(event.target.id === 'cc_accbutton') {
                makeCookie(default_cookie_name, true);
            }
            // even if the user does not consent we 
            // will hide the consent request (for now)
            $('#cookie_con').css('display', 'none');
        });
    }
});
