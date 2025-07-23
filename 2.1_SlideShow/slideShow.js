// Variable that holds the current image index
let currentIndex = 0;

// Holds the location of the images
let imageArray = [
    "assets/DWKnight.png"


]

// Image that displays the function
function displayImage(index){
    let slide = document.getElementById("imgSlide");
    slide.src = imageArray[index];

}

displayImage(currentIndex);