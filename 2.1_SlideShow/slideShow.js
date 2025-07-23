// Variable that holds the current image index
let currentIndex = 2;

// Holds the location of the images
let imageArray = [
    "assets/DWKnight.png",
    "assets/Hellbrute.png",
    "assets/logangSW.png",
    "assets/SWTerminator.png",


]
// Holds the Text Associated with each image
let nameArray = [
    "Deathwing Knight",
    "Hellbrute",
    "Logan Grimnar",
    "Wolf Guard Terminator",
]

// Image that displays the Image with Text under it
function displayImage(index){
    let slide = document.getElementById("imgSlide");
    slide.src = imageArray[index];
    // Sets the Text under the image
    document.getElementById("imageName").innerText = nameArray[index];
}

// These functions change which slide is being displayed
function nextSlide(){
    currentIndex++;
    // Calls ths displayImage function to show the image and associated text
    displayImage(currentIndex);

}

function previousSlide(){
    currentIndex--;
    // Calls ths displayImage function to show the image and associated text
    displayImage(currentIndex);

}

// This will set the image and the text of the slide to the first element of each array when the webpage is opened
displayImage(currentIndex);