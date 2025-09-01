            let divBoard = document.getElementById("divBoard");

            // Create an array to mimic the game board and the default positioning of pieces
            let arrPieces = [
                [null, "i", null, "i", null, "i", null, "i"],
                ["i", null, "i", null, "i", null, "i", null],
                [null, "i", null, "i", null, "i", null, "i"],
                [null, null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null, null],
                ["g", null, "g", null, "g", null, "g", null],
                [null, "g", null, "g", null, "g", null, "g"],
                ["g", null, "g", null, "g", null, "g", null],
            ]

            // loop through 8 rows
            for (let i=0; i<8; i++){
                // loop through 8 columns
                for (let j=0; j<8; j++){
                    // create a new div for the board square
                    let divBoardSquare = document.createElement("div");
                    // assign the boardSquare css class to each
                    divBoardSquare.classList.add("boardSquare");
                    //add an id to the div to help us track piece movement
                    divBoardSquare.setAttribute("id","div"+i+j);

                    if((i+j) % 2 !=0 ){
                        // add the dark background color to the square
                        divBoardSquare.classList.add("boardSquareAlt");

                        // add the event handler to move the piece
                        divBoardSquare.addEventListener("click", movePiece)


                    }


                    // Add the new div square to the board
                    divBoard.appendChild(divBoardSquare);
                    // check the piece array to see if there should be a piece on this square
                    // if the array at this location is not null, this if statement will be true
                    if(arrPieces[i][j]){
                        // call the function to create a piece
                        createPiece("piece"+i+j,"piece-"+arrPieces[i][j],divBoardSquare)

                    }

                }
            }
            // Function that creates a piece
            function createPiece(pieceId, pieceClass, divSquare){
                // create a new div that is a circle
                let divPiece = document.createElement("div");

                //set the id of the div
                divPiece.setAttribute("id", pieceId);

                // add the css class to make the div a circle
                divPiece.classList.add("piece");

                // add the css class to specify the piece color
                divPiece.classList.add(pieceClass);

                // add click event handler to store our piece id in span
                divPiece.addEventListener("click", storePieceID);
                // add the piece to the square
                divSquare.appendChild(divPiece);



            }

            // function the "moves" the piece
            function movePiece(event){

                let spanSecret = document.getElementById("spnSecret");
                console.log("movePiece function called");

                // Get id of whatever was clicked on
                let newSquareId = event.target.id;
                console.log("newSquareid="+newSquareId);

                // remove both piece and div from the square id so that we just get the number
                newSquareId = newSquareId.replace("div","").replace("piece","");
                console.log("newSquareid="+newSquareId);

                // get the value of the selected piece from the span
                let selPieceID = spanSecret.dataset.value;

                console.log("selPieceId="+selPieceID)

                // Make sure we are moving the piece to a valid bew square 
                if(typeof selPieceID != "undefined" && newSquareId != selPieceID){
                    // shortcut to the source div
                    let sourceDiv = document.getElementById("div" + selPieceID);

                    // shortcut to the selected piece
                    let selPieceDiv = document.getElementById("piece" + selPieceID);

                    // Grab the piece color class
                    let selPieceColorClass = selPieceDiv.classList[1];

                    // Remove piece form the original location
                    sourceDiv.removeChild(selPieceDiv);

                    // create the shortcut to the target div
                    let targetDiv = document.getElementById("div" + newSquareId);

                    // call the create piece function to create a piece in the new square
                    // call the function to create a piece
                    createPiece("piece"+newSquareId,selPieceColorClass,targetDiv)
                    // Erase the value from the span
                    spanSecret.dataset.value="";



                }


            }

            // function to store the selected piece id
            function storePieceID(event){
                let spanSecret = document.getElementById("spnSecret");
                // get the div id that was clicked on 
                let selPieceID = event.target.id;

                // remove both piece and div from the square id so that we just get the number
                selPieceID = selPieceID.replace("piece","");
                
                console.log("[storePieceID] selPieceID=" + selPieceID)


                // store the ID in the span
                spanSecret.dataset.value = selPieceID;
            }