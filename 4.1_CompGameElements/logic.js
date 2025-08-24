function processPlayerInfo(){
                // get the info from the page
                let username = document.getElementById("uname");
                let userclass = document.getElementById("uclass");
                let userlevel = document.getElementById("ulevel");
                let userfs = document.getElementById("ufs");
                let umana = document.getElementById("umana");

                
                // div outputArea
                let outputArea = document.getElementById("outputArea");


                // div playerInfoOutput
                let playerInfoOutput = document.getElementById("playerInfoOutput");
                // div playerInfoOutputTitles
                let playerInfoOutputTitles = document.getElementById("playerInfoOutputTitles");
                // Display the outputted Information
                playerInfoOutput.innerHTML = username.value + "<br>" + userclass.value  + "<br>" + userlevel.value  + "<br>" + userfs.value + "<br>" + umana.value;
                playerInfoOutputTitles.innerHTML = "Username: " + "<br>" + "Class: " + "<br>" + "Level: " + "<br>" + "Fight Style: " + "<br>" + "Mana:";



                // Don't Let Form Submitt
                return false;
            }