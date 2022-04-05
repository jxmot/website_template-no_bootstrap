/*
    splash.js - JS for the "Welcome Splash"

    Author: https://github.com/jxmot
    Repository: https://github.com/jxmot/website_template-no_bootstrap
*/
// Handle the end of the splash animation
$().ready(() => {
    document.getElementById('top_splash').addEventListener('animationend', () => {
        document.getElementById('top_splash').style.display = 'none';
    },{once:true});
});
