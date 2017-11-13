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

// Set the date we're counting down to
var countDownDate = new Date("Nov 16, 2017 16:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML = '<span class="day">' + days + "days</span> <span class='hours'>" + hours + "hours</span> <span class='minutes'>" + minutes + "minutes</span> <span class='seconds'>" + seconds + "seconds</span>";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Acara Dimulai";
    }
}, 1000);