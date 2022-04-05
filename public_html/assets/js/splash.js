/*
    splash.js - CSS for the "Welcome Splash"

    Author: https://github.com/jxmot
    Repository: https://github.com/jxmot/website_template-no_bootstrap
*/
function splashEnd() {
    document.getElementById('top_splash').style.display = 'none';
};

$().ready(() => {
    document.getElementById('top_splash').addEventListener('animationend', splashEnd);
});
