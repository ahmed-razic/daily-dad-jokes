/**
 * 1. Initialize an XMLHttpRequest constructor
 * 2. Open a GET request, set the headers and response type
 * 3. Output successful response
 * 4. Output error state
 * 5. Combine with an event listener (button)
 * 6. Adjust UI states accordingly
 * 7. Bonus: change button CTA to indicate if it's the first joke or a "next" one
 */
const API_ENDPOINT = 'https://icanhazdadjoke.com/';
const buttonSelector = document.querySelector('#button');
const messageSelector = document.querySelector('#error-message');
const containerSelector = document.querySelector('#error-container');
const jokeSelector = document.querySelector('#joke');
const loaderSelector = document.querySelector('#loader');
const ctaSelector = document.querySelector('#cta');

const reqJoke = new XMLHttpRequest();

function setUIState(isDisabled) {
    setLoading(isDisabled);
    setDisabled(isDisabled);
}

function showJoke(joke) {
    jokeSelector.innerHTML = joke;
    setUIState(false);
}
function showError(error) {
    messageSelector.innerHTML = error;
    containerSelector.style.display = 'block';
    setUIState(false);
}

function setLoading(isVisible) {
    const displayState = isVisible ? 'block' : 'none';
    loaderSelector.style.display = displayState;
}

function setDisabled(isDisabled) {
    if (isDisabled) {
        buttonSelector.setAttribute('disabled', 'disabled');
    } else {
        buttonSelector.removeAttribute('disabled');
    }

    const buttonCtaState = isDisabled ? 'none' : 'block';
    ctaSelector.style.display = buttonCtaState;
}

function setCtaButton(isError) {
    const buttonText = isError ? 'Try again' : 'Next Joke';
    ctaSelector.innerHTML = buttonText;
}

function getJoke() {
    reqJoke.open('GET', API_ENDPOINT);
    reqJoke.setRequestHeader('Accept', 'application/json');
    reqJoke.responseType = 'json';

    reqJoke.onload = function () {
        showJoke(reqJoke.response.joke);
        setCtaButton(false);
    };
    reqJoke.onerror = function () {
        showError('Unknown error');
        setCtaButton(true);
    };

    reqJoke.send();
}

buttonSelector.addEventListener('click', function () {
    setUIState(true);
    getJoke();
});
