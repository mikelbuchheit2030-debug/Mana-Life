//Variables
let wood = 0;
let stone = 0;

//Resource collection
window.collectStick = function() {
  wood ++;
}

window.collectStone = function() {
  stone ++
}

//Tab system
window.beginGame = function() {
  document.getElementById("beginGame").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
  document.getElementById("tabBar").style.display = "block";
  document.getElementById("forest").style.display = "block";
}

window.tabToForest = function() {
  document.getElementById("forest").style.display = "block";
  document.getElementById("explore").style.display = "none";
  document.getElementById("inventory").style.display = "none";
  
}

window.tabToExplore = function() {
  document.getElementById("forest").style.display = "none";
  document.getElementById("explore").style.display = "block";
  document.getElementById("inventory").style.display = "none";

}

window.tabToInventory = function() {
  document.getElementById("forest").style.display = "none";
  document.getElementById("explore").style.display = "none";
  document.getElementById("inventory").style.display = "block";
  document.getElementById("inventoryDisplay").innerHTML= "You have<br>" + wood + " sticks<br>" + stone + "stones"

}
