/*
    splash.js - JS for the "Welcome Splash"

    See Also:
        splash.css - the animations for #splash_img
        and #top_splash

    Author: https://github.com/jxmot
    Repository: https://github.com/jxmot/website_template-no_bootstrap
*/
// Handle the end of the splash animation(s)
$().ready(() => {
    document.getElementById('top_splash').addEventListener('animationend', (ev) => {
        if(ev.animationName === 'splash-opacity') document.getElementById('top_splash').style.display = 'none';
    });
});
