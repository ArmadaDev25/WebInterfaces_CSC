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
    checkIfInArray()
    // Calls ths displayImage function to show the image and associated text
    displayImage(currentIndex);

}

function previousSlide(){
    currentIndex--;
    checkIfInArray()
    // Calls ths displayImage function to show the image and associated text
    displayImage(currentIndex);
    

}
// This function makes sure that the currentIndex Variable stays within the array
function checkIfInArray(){
    // Logic for if the index array goes above the number of entries within the imageArray variable
    if (currentIndex > imageArray.length -1){
        currentIndex = 0;
    }
    // Logic for if the currentIndex variable goes below 0
    if (currentIndex < 0){
        currentIndex = imageArray.length -1;
    }

}
// This will set the image and the text of the slide to the first element of each array when the webpage is opened
displayImage(currentIndex);