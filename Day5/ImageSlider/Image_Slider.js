document.addEventListener('DOMContentLoaded', function() {
    var sliderImage = document.getElementById('sliderImage');
    var prevButton = document.getElementById('prevButton');
    var nextButton = document.getElementById('nextButton');
    var currentIndex = 0;
    var images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg'
    ];

    function displayImage() {
        sliderImage.src = images[currentIndex];
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        displayImage();
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        displayImage();
    });

    displayImage();
});
