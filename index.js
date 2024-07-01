const cats = ["Milo", "Otis", "Garfield"];

// Destructive functions
function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Non-destructive functions
function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats];
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
    return cats.slice(1);
}

console.log("Original cats array:", cats);

// Test the functions
console.log("Append 'Ralph':", appendCat('Ralph')); // Expected: ["Milo", "Otis", "Garfield", "Ralph"]
console.log("Prepend 'Bob':", prependCat('Bob')); // Expected: ["Bob", "Milo", "Otis", "Garfield"]
console.log("Remove last cat:", removeLastCat()); // Expected: ["Milo", "Otis"]
console.log("Remove first cat:", removeFirstCat()); // Expected: ["Otis", "Garfield"]

// Verify original array remains unchanged
console.log("Original cats array after operations:", cats);
