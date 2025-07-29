let gamesArr = [];
// This function takes the user input and adds it to gamesArr
function addGame(){
    let txtName = document.getElementById("txtGameName");
    let gameTitle = txtName.value.trim();
    // if this is true, then the value of gameTitle will be pushed into the array
    if(gameTitle){
        gamesArr.push(gameTitle);
        txtGameName.value="";
        // Updates the on screen game list
        showGamesList();
    }
}

function showGamesList(){
    
    // Checks to see if there are any entries in the gamesArr
    // if there are not items in the array, the inner text of the html element lists the "No Games Listed text"
    if (gamesArr.length == 0){
        document.getElementById("gameList").innerText = "No Games Listed";
    }
    else
    {
        let gameList = document.getElementById("gameList");
        gamesArr.sort();
        // add movies to the div
        gameList.innerHTML = gamesArr.join("<br>");
    }
}

function clearList(){
    // reset gamesArr so there are no entries in it
    gamesArr = []
    // Update the Div
    showGamesList();
}

// Shows the listed Games when the user opens up the html screen
showGamesList();