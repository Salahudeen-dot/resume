let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;



window.onload = function() {
    setGame();

}

function setGame(){
    //set up the  board grid and  the game board in html
    for (let i =0; i <9; i++) {
        let tile = document.createElement("div");
        tile.id =i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
        
    }
    setInterval(setMole, 2000)
    setInterval(setPlant, 3000)
}

function getRandomTile(){
    let num = Math.floor(Math.random() *9)
    return num.toString();
}

function setMole(){

    if (gameOver){
        return;
    }
    if (currMoleTile){
        currMoleTile.innerHTML = "";
    }
    
    
    
    
    let Mole = document.createElement("img");
    Mole.src ="./monty-mole.png";

    let num = getRandomTile();
    if(currPlantTile && currPlantTile.id == num ) {
        return;
    }
    currMoleTile =document.getElementById(num);
    currMoleTile.appendChild(Mole);
}

function setPlant(){

    if (gameOver){
        return;
    }
    if(currPlantTile){
        currPlantTile.innerHTML = "";

    }

    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile =document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile(){

    if (gameOver){
        return;
    }
    if(this == currMoleTile){
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if (this == currPlantTile){
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}