var font = new FontFaceObserver('opensans-regular');
var html = document.documentElement;

html.classList.add('fonts-loading');

font.load().then(function () {
    html.classList.remove('fonts-loading');
    html.classList.add('fonts-loaded');
    sessionStorage.fontsLoaded = true;
}).catch(function () {
    html.classList.remove('fonts-loading');
    html.classList.add('fonts-failed');
    sessionStorage.fontsLoaded = false;
});
