// Global cats array
var cats = ["Milo", "Otis", "Garfield"];

// Destructive methods:

// Appends a cat to the end of the cats array (modifies the original array)
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Prepends a cat to the beginning of the cats array (modifies the original array)
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Removes the last cat from the cats array (modifies the original array)
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Removes the first cat from the cats array (modifies the original array)
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Nondestructive methods:

// Returns a new array with the given cat appended to the end
function appendCat(name) {
  return [...cats, name];
}

// Returns a new array with the given cat prepended to the beginning
function prependCat(name) {
  return [name, ...cats];
}

// Returns a new array with the last cat removed (leaves the original array unchanged)
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// Returns a new array with the first cat removed (leaves the original array unchanged)
function removeFirstCat() {
  return cats.slice(1);
}
