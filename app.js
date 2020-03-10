alert("Type startGame() into the console to play");
let game = false;
let currentShip = 0;

let humanShip = {
    hull: 20,
    accuracy: .7,
    firePower: 5,
}

// let alienShip = {
//     hull:  random(3, 7),
//     firePower: random(2, 5),
//     accuracy: randomDecimal()

// }
class AlienShip{
    constructor (number){
        this.shipNumber = number,
        this.hull = random(3, 7),
        this.firePower = random(2, 5),
        this.accuracy = randomDecimal()
    }
}


let ships = [];

for(let i = 0; i < 6; i++ ){
    ships.push(new AlienShip(i));
    
}


function random(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function humanAttack(){
   if(humanShip.accuracy <= 0.8){
ships[currentShip].hull -= humanShip.firePower;
        if(ships[currentShip].hull <= 0){
            console.log("Alien ship destroyed");
            ships[currentShip].firePower = 0;
            currentShip++;
        }
        else
console.log("The aliens have been hit");
   }
   else console.log("The humans have missed");
}

function alienAttack(){
    if(ships[currentShip].accuracy <= .7 && game === false){
        humanShip.hull -= ships[currentShip].firePower;
        console.log("The humans have been hit");
        if(humanShip.hull <= 0){
            console.log("Human Ship was destroyed :(");
            game === true;
        }
        
    }
    else{
        console.log("The aliens have missed");
    } 
}

function randomDecimal(){
    return Math.random() * (.8-.6) + .6;
}

// function alienShipsHull(ships){
//     let sum = 0;
//     for(let i = 0; i < ships.length; i++){
//         sum += ships[i].hull;
//         console.log(sum);
//         return sum;
//     }
//     if(sum == 0){
//         return sum;
//     }
// }

function checkWin(){
    if(humanShip.hull <= 0){
        console.log("Aliens Win");
        return game = true;
    }
    else if(currentShip === 6){
        console.log("Humans Win");
        return game = true;
    }
    else return;
}

  function startGame(){
    while(currentShip < 6 && humanShip.hull > 0 && game === false){
        let action = prompt("What do you want to do?", "Attack or Retreat");
        if(action.toLowerCase() === "attack"){
            humanAttack();
            checkWin();
            if(game === true){
                return;
            }
            alienAttack();
            checkWin();
        } else if(action.toLowerCase() === "retreat"){
            console.log("You have retreated");
            return;
        }

        
    }
  }
