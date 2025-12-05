//Variables
let wood = 0;
let stone = 0;
let craftingTable = false;
let caveFound = false;

//Basic functions
window.collectStick = function() {
  wood ++;
}

window.collectStone = function() {
  stone ++
}

window.makeCraftingTable = function(){
  if (wood >= 3 && stone >= 2) {
    craftingTable = true;
    wood -= 3;
    stone -= 2;
    document.getElementById("inventoryDisplay").innerHTML =
      "You have<br>" + wood + " sticks<br>" + stone + " stones";
  }
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
  document.getElementById("cave").style.display = "none";
  if (caveFound === true) {
    document.getElementById("caveTab").style.display = "block";
  }
}

window.tabToExplore = function() {
  document.getElementById("forest").style.display = "none";
  document.getElementById("explore").style.display = "block";
  document.getElementById("inventory").style.display = "none";
    document.getElementById("cave").style.display = "none";
  if (caveFound === true) {
    document.getElementById("caveTab").style.display = "block";
  }
  
}

window.tabToInventory = function() {
  document.getElementById("forest").style.display = "none";
  document.getElementById("explore").style.display = "none";
  document.getElementById("inventory").style.display = "block";
    document.getElementById("cave").style.display = "none";
  document.getElementById("inventoryDisplay").innerHTML= "You have<br>" + wood + " sticks<br>" + stone + " stones"
  if (wood >= 3 && stone >= 2) {
    document.getElementById("makeCraftingTable").style.display = "block"
  }
  if (caveFound === true) {
    document.getElementById("caveTab").style.display = "block";
  }
}

window.tabToCave = function() {
  document.getElementById("forest").style.display = "none";
  document.getElementById("explore").style.display = "none";
  document.getElementById("inventory").style.display = "none";
  document.getElementById("cave").style.display = "block";
}

//Exploration
window.explore = function(){
  if (craftingTable === true) {
    caveFound = true;
    console.log(caveFound)
  }
  if (caveFound === true) {
    document.getElementById("caveTab").style.display = "block";
  }
}
