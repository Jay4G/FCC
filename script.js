const creator = "Jay";
console.log(`Hello ${creator}!`);

document.getElementById("prompt-btn").addEventListener("click", function(){
    let honouredOne = prompt("Who is the most honoured one?", "Gojo Satoru");

    if (honouredOne) {
        alert(`The most honoured one is ${honouredOne}!`);
        console.log(`You are a true fan of ${honouredOne}!`);
    } else {
        console.log("Baaaaaakaaa!");
    }
});


for (let i = 0; i <= 65535; i++) {
    const char = String.fromCharCode(i);

    if (char.trim() !== "") { // skip invisible characters
        console.log(i, char);
    }
}

// IndexOf
const text = "The quick brown fox jumps over the lazy dog.";
console.log(text.indexOf("fox"));
console.log(text.indexOf("cat")); 

// Includes
const text = "The quick brown fox jumps over the lazy dog.";
console.log(text.includes("fox"));
console.log(text.includes("cat"));

// Slice
const text = "freeCodeCamp";
console.log(text.slice(0, 4));
console.log(text.slice(4, 8));
console.log(text.slice(8, 12));

// UpperCase
