const BODY = document.querySelector("body");
const BTN = document.querySelector("#btn");
const JOKE_DISPLAY = document.querySelector("#joke-display");
const DARK_MODE_BTN = document.querySelector("#toggle-btn");

/**************************************************************************
 showJoke function is used to render the joke received from dad joked api to the ui. It changes the innerText of the button to "GIVE ME MORE" also when the joke is displayed it gives a small animation to the p tag to change the background color

 @param {String} joke - the joke returned from the fetch request to the api
 @return none
***************************************************************************/

function showJoke({ joke, category }) {
    JOKE_DISPLAY.innerHTML = `<span id="smiley-face">😆</span>${joke} <em>(${category})</em>`;
    // JOKE_DISPLAY.innerText = joke;
    BTN.innerText = "GIVE ME MORE"
    JOKE_DISPLAY.classList.add("joke-animation");
    setTimeout(() => {
        JOKE_DISPLAY.classList.remove("joke-animation");
    }, 2100);
}

/*************************************************************************
 fetchJoke function gets the joke from the dadjoke api
 @return none
**************************************************************************/

function fetchJoke() {

    BTN.innerText = "LOADING..."

    fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1", {

        headers: {
            "X-Api-Key": "dW93VfS4c4ZMrLYUbf4/dQ==Mmq2aDl4YYvFIJ77"
        }

    }).then(response => {

        if (!response.ok) {

            throw new Error(`HTTP error! Status: ${response.status}`);

        }

        return response.json();

    }).then(data => {

        showJoke(data[0]);

    }).catch(error => {

        console.error("There was a problem during the fetch operation", error);

    })

}

/**************************************************************************
 darkMode fuction toggles the dark mode for the page by toggling the "dark-mode" class in the body of the page. It also changes the position of the toggel-btn/DARK_MODE_BTN
 @return none
***************************************************************************/
function darkMode() {
    BODY.classList.toggle("dark-mode")
    DARK_MODE_BTN.classList.toggle("toggle-btn-position")
}

BTN.addEventListener("click", fetchJoke);
DARK_MODE_BTN.addEventListener("click", darkMode);