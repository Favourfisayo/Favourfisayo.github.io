//get DOM elements

const joke = document.querySelector(".joke");
const jokegen = document.querySelector(".Joke-generator");
//Make request


const jokeRequest = new XMLHttpRequest()
const getJokeData = () => {
    if(jokeRequest.readyState === 4 && jokeRequest.status === 200) {
        const jokeData = JSON.parse(jokeRequest.responseText);
        joke.innerHTML = jokeData.value;
    }
    else if(jokeRequest.readyState === 4 && jokeRequest.status !== 200) {
        joke.innerHTML = "Failed to get joke"
    }
    jokeRequest.open("GET","https://api.chucknorris.io/jokes/random");
    jokeRequest.send();
}
jokegen.addEventListener("click",() => {
    getJokeData()
})
