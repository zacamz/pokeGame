let pokeImage = document.getElementById("pokeImage");
let pokeSilhouette = document.getElementById("silhouette");
let pokeHeader = document.querySelector("#pokeHeader");
let pokeInput = document.getElementById("pokeName");
let searchButton = document.getElementById("searchButton");

let answerInput = document.getElementById("answer");
let answerDisplay = document.getElementById("answerDisplay");
let checkButton = document.getElementById("checkButton");
let answerName = "";

let startSound = new Audio("pokemonsound.mp3");
startSound.play();

searchButton.addEventListener("click", function() {
    let endpointNum = Math.floor(Math.random() * 150);
    getPokemon(endpointNum);
    console.log("Endpoint Number: " + endpointNum);
});

checkButton.addEventListener("click", function() {
    checkAnswer(answerInput.value);
});

async function getPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then(data => renderPokemon(data))
}

function checkAnswer(pokemon) {
    if (pokemon.toLowerCase() === answerName) {
        answerDisplay.innerText = "It is correct!";
        pokeSilhouette.classList.remove("silhouette");
        pokeSilhouette.classList.add("correctImage");
    }
    else {
        answerDisplay.innerText = "It is not correct!";
    }
}

function renderPokemon(data) {
    //pokeImage.src = data.sprites.front_default;
    pokeSilhouette.src = data.sprites.front_default;
    pokeSilhouette.classList.add("silhouette");
    /*
    let newHeader = data.species.name;
    let newHeaderFirst = newHeader.charAt(0);
    pokeHeader.innerText = newHeaderFirst.toUpperCase() + newHeader.slice(1);
    */
    answerName = data.species.name;
    console.log(answerName);
    console.log(pokeImage);
    console.log(pokeSilhouette);
}