(function () {
    let aparat_iframes = document.querySelectorAll(".aparat-frame");
    if ( aparat_iframes.length ) {
        aparat_iframes.forEach(function (element, index) {
            element.onload = function() {
                element.style.height = ( 9 * element.offsetWidth / 16 ) + "px";
            }
            window.addEventListener('resize', function() {
                element.style.height = ( 9 * element.offsetWidth / 16 ) + "px";
            });
        });
    }
})();