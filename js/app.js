setTimeout(function() {
    $('html, body').animate({
        scrollTop: $(window).scrollTop() + 680
    }, 2000);
}, 15000);

$(".bg-image-slideshow").backstretch([
    "../images/slide-1.jpg", "../images/slide-2.jpg", "../images/slide-3.jpg", "../images/slide-4.jpg"
], {
    duration: 3000,
    fade: 750
});

$('.get-gift').click(function() {
    html2canvas($('.image-to-save'), {
        onrendered: function(canvas) {
            var a = document.createElement('a');
            // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
            a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            a.download = 'undangan.png';
            a.click();
        }
    });
});