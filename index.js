let inventory;

// CREATING INVENTORY FUNCTION
function newInventory() {
    inventory = document.createElement(`div`);
    inventory.style.position = `fixed`;
    inventory.style.bottom = `0px`;
    inventory.style.left = `0px`;
    inventory.style.width = `100%`;
    inventory.style.height = `100px`;
    inventory.style.backgroundColor = `brown`;
    inventory.style.display = `flex`;
    inventory.style.flexDirection = `row`;
    inventory.style.alignItems = `center`;
    inventory.style.justifyContent = `space-evenly`;
    inventory.style.border = `2px solid black`
    document.body.append(inventory);
    return inventory;
}
// INVOKING INVENTORY FUNCTION
newInventory()




// Function To Create New Image
const newImage = function(src) {
    let image = document.createElement(`img`);
    image.src = src;
    document.body.append(image);
    return image;
}
// Function To Create New Item
const newItem = function(src) {
    let item = newImage(src);
    item.addEventListener(`dblclick`, function() {
        item.remove();
        let inventoryItem = document.createElement(`img`);
        inventoryItem.src = src;
        inventory.append(inventoryItem);
    });
    return item
};

// FUNCTION TO MOVE IMAGE
function move(element) {
    element.style.position = `fixed`;

    function moveToCoords(left, bottom){
        element.style.left = left + `px`;
        element.style.bottom = bottom + `px`;
    }
    return {
        to: moveToCoords
    };
}

// Creating Images
// CREATING GREEN CHARACTER
// MOVING GREENCHARACTER
move(newImage(`./assets/green-character.gif`)).to(100,250);
// CREATING PINE TREE
move(newImage(`./assets/pine-tree.png`)).to(450, 200);
// Creating tree
move(newImage(`./assets/tree.png`)).to(200, 300);
// Creating pillar
move(newImage(`./assets/pillar.png`)).to(350, 100);
// Creating crate 
move(newImage(`./assets/crate.png`)).to(150, 200);
// Creating Well
move(newImage(`./assets/well.png`)).to(500, 425);
// Creating Sword
move(newItem(`./assets/sword.png`)).to(500, 405);
// Creating Shield
move(newItem(`./assets/shield.png`)).to(165, 185);
// Creating Staff
move(newItem(`./assets/staff.png`)).to(600, 100);
