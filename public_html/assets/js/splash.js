/*
    Handle the end of the splash animation
*/
function splashEnd() {
    document.getElementById('top_splash').style.display = 'none';
};

$().ready(() => {
    document.getElementById('top_splash').addEventListener('animationend', splashEnd);
});
