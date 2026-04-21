const creator = "Jay";
console.log(`Hello ${creator}!`);

document.getElementById("prompt-btn").addEventListener("click", function(){
    let honouredOne = prompt("Who is the most honoured one?");

    if (honouredOne) {
        alert(`The most honoured one is ${honouredOne}!`);
        console.log(`You are a true fan of ${honouredOne}!`);
    } else {
        console.log("Baaaaaakaaa!");
    }
});