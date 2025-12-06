// Resources & flags
let wood = 0;
let stone = 0;
let thatch = 0;
let crudeRope = 0;
let meat = 0; 
let dirt = 0;
let clay = 0;
let metal = 0;
let crudeBucketFull = false;
let craftingTableT1 = false;
let craftingTableT2 = false;
let caveFound = false;
let crudeKnife = false;
let crudePickaxe = false;
let crudeBucket = false;
let crudeSpear = false;
let crudeShovel = false;

// Helpers
function show(id) { document.getElementById(id).style.display = "block"; }
function hide(id) { document.getElementById(id).style.display = "none"; }

function renderInventory() {
  let inventoryText = "You have<br>" +
    wood + " Sticks<br>" +
    stone + " Stones<br>" +
    thatch + " Thatch<br>" +
    crudeRope + " Rope<br>" +
    meat + " Meat (lbs)<br>" +
    dirt + " Dirt<br>" +
    clay + " Clay<br>" +
    metal + " Metal<br>" + 
    (crudeBucketFull ? "Water full<br>" : "Water empty<br>")

  const items = [];
  if (craftingTableT1) items.push("a Crafting Table");
  if (craftingTableT2) items.push("a Better Crafting Table")
  if (crudeKnife) items.push("a Crude Knife");
  if (crudePickaxe) items.push("a Crude Pickaxe");
  if (crudeBucket) items.push("a Crude Bucket");
  if (crudeShovel) items.push("a Crude Shovel");
  if (crudeSpear) items.push("a Crude Spear");

  if (items.length > 0) {
    inventoryText += "And you have: " + items.join(", \n");
  }

  document.getElementById("inventoryDisplay").innerHTML = inventoryText;

  // Show craft table button if possible
  if (!craftingTableT1 && wood >= 3 && stone >= 2) {
    show("makeCraftingTable");
  } else {
    hide("makeCraftingTable");
  }
}


// Collection
window.collectStick = function() {
  wood++;
  renderInventory();
};

window.collectStone = function() {
  stone++;
  renderInventory();
};

window.fillBucket = function() {
  crudeBucketFull = true;
  renderInventory();
};

window.mineDirt = function() {
  dirt++;
  renderInventory();
};

window.mineCave = function() {
  if (crudePickaxe === false) {
    alert("You need a Crude Pickaxe to mine in the cave!");
    return;
  }
  stone += 10;
  metal += 1;
  renderInventory();
 
};

window.huntMeat = function() {
  meat += 5;
}


window.makeClay = function() {
  if (dirt >= 5 && crudeBucketFull === true){
    dirt -= 5;
    clay++;
    crudeBucketFull = false;
    renderInventory();
  }
}

// Crafting table
window.makeCraftingTable = function() {
  if (wood >= 3 && stone >= 2) {
    craftingTableT1 = true;
    wood -= 3;
    stone -= 2;
    hide("makeCraftingTable");
    show("craftingTab");
    renderInventory();
  }
};

// Tabs
window.beginGame = function() {
  hide("beginGame");
  show("gameArea");
  show("tabBar");
  show("forest");
  hide("hunting");
};

window.tabToForest = function() {
  show("forest"); hide("explore"); hide("inventory"); hide("cave"); hide("hunting"); hide("craftingTable");
  if (caveFound) show("caveTab");
  if (craftingTableT1) show("craftingTab");
};

window.tabToExplore = function() {
  hide("forest"); show("explore"); hide("inventory"); hide("cave"); hide("hunting"); hide("craftingTable");
  if (caveFound) show("caveTab");
  if (craftingTableT1) show("craftingTab");
  if (crudeBucket) show("fillBucket")
  if (crudeShovel) show("mineDirt")
};

window.tabToInventory = function() {
  hide("forest"); hide("explore"); show("inventory"); hide("cave"); hide("hunting"); hide("craftingTable");
  renderInventory();
  if (caveFound) show("caveTab");
  if (craftingTableT1) show("craftingTab");
};

window.tabToCave = function() {
  hide("forest"); hide("explore"); hide("inventory"); show("cave"); hide("hunting"); hide("craftingTable");
  if (craftingTableT1) show("craftingTab");
};

window.tabToCrafting = function() {
  hide("forest"); hide("explore"); hide("inventory"); hide("cave"); show("craftingTable"); hide("hunting");
  if (craftingTableT2) {
    document.getElementById("craftingTableT2").style.display = "block";
  }
};

window.tabToHunting = function() {
  hide("forest"); hide("explore"); hide("inventory"); hide("cave"); hide("craftingTable"); show("hunting");
};

// Explore
window.explore = function() {
  if (craftingTableT1) {
    caveFound = true;
    show("caveTab");
  }
  if (craftingTableT2) {
    console.log("You beat the game so far")
  }
};

// Crafting actions
window.makeCrudeKnife = function() {
  if (wood >= 10 && stone >= 15) {
    wood -= 10;
    stone -= 15;
    crudeKnife = true;
    hide("makeCrudeKnife");
    show("makeThatch");
    renderInventory();
  }
};

window.makeThatch = function() {
  if (crudeKnife && wood >= 1) {
    wood--;
    thatch++;
    renderInventory();
  }
};

window.makeCrudePickaxe = function() {
  if (wood >= 20 && stone >= 25) {
    wood -= 20;
    stone -= 25;
    crudePickaxe = true;
    hide("makeCrudePickaxe");
    show("mineCave")
    renderInventory();
  }
};

window.makeCrudeShovel = function() {
  if (wood >= 15 && stone >= 10) {
    wood -= 15;
    stone -= 10;
    crudeShovel = true;
    hide("makeCrudeShovel");
    show("mineDirt");
    renderInventory();
  }
};

window.makeCrudeBucket = function() {
  if (stone >= 50) {
    stone -= 50;
    crudeBucket = true;
    hide("makeCrudeBucket");
    show("fillBucket");
    renderInventory();
  }
};

window.makeCrudeRope = function() {
  if (thatch >= 25) {
    thatch -= 25;
    crudeRope++;
    renderInventory();
  }
};

window.makeCrudeSpear = function() {
  if (wood >= 30 && stone >= 15) {
    wood -= 30;
    stone -= 15;
    crudeSpear = true;
    show("huntingTab");
    hide("makeCrudeSpear");
    renderInventory();
  }
};

window.makeCraftingTableT2 = function(){
  if (metal >= 30 && clay >= 15 && crudeRope >= 5){
    crudeRope-=5;
    metal -= 30;
    clay -= 15;
    craftingTableT2 = true;

  }
};
