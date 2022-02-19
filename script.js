/**
 * 1. Initialize an XMLHttpRequest constructor
 * 2. Open a GET request, set the headers and response type
 * 3. Output successful response
 * 4. Output error state
 * 5. Combine with an event listener (button)
 * 6. Adjust UI states accordingly
 * 7. Bonus: change button CTA to indicate if it's the first joke or a "next" one
 */
const API_ENDPOINT = 'https://icanhazdadjoke.xcom/';

const reqJoke = new XMLHttpRequest();

function showJoke(joke) {
    document.querySelector('#joke').innerHTML = joke;
}
function showError(error) {
    document.querySelector('#error-message').innerHTML = error;
    document.querySelector('#error-container').style.display = 'block';
}

function getJoke() {
    reqJoke.open('GET', API_ENDPOINT);
    reqJoke.setRequestHeader('Accept', 'application/json');
    reqJoke.responseType = 'json';

    reqJoke.onload = function () {
        showJoke(reqJoke.response.joke);
    };
    reqJoke.onerror = function () {
        showError('Unknown error');
    };

    reqJoke.send();
}

document.querySelector('#button').addEventListener('click', function () {
    getJoke();
});
