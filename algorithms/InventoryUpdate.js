
// Inventory Update
// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);


//=> final answer
function updateInventory(arr1, arr2) {
    // Convert the current inventory (arr1) to a map for efficient item lookup.
    const inventoryMap = new Map(arr1.map(([quantity, item]) => [item, quantity]));
  
    // Iterate through the new inventory (arr2) and update the current inventory.
    for (const [quantity, item] of arr2) {
      if (inventoryMap.has(item)) {
        // If the item already exists in the current inventory, update its quantity.
        inventoryMap.set(item, inventoryMap.get(item) + quantity);
      } else {
        // If the item is not in the current inventory, add it.
        inventoryMap.set(item, quantity);
      }
    }
  
    // Convert the updated map back to an array of inventory.
    const updatedInventory = Array.from(inventoryMap, ([item, quantity]) => [quantity, item]);
  
    // Sort the updated inventory alphabetically by item name.
    updatedInventory.sort((a, b) => a[1].localeCompare(b[1]));
  
    return updatedInventory;
  }
  
  // Example inventory lists
  var curInv = [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"]
  ];
  
  var newInv = [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"]
  ];
  
  var updatedInventory = updateInventory(curInv, newInv);
  console.log(updatedInventory);