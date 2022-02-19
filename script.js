/**
 * 1. Initialize an XMLHttpRequest constructor
 * 2. Open a GET request, set the headers and response type
 * 3. Output successful response
 * 4. Output error state
 * 5. Combine with an event listener (button)
 * 6. Adjust UI states accordingly
 * 7. Bonus: change button CTA to indicate if it's the first joke or a "next" one
 */
const API_ENPOINT = 'https://icanhazdadjoke.com/';

const jokeReq = new XMLHttpRequest();

function getDadJoke() {
    jokeReq.open('GET', API_ENPOINT);
    jokeReq.setRequestHeader('Accept', 'application/json');
    jokeReq.responseType = 'json';
    jokeReq.onload = function () {
        console.log('Success', jokeReq.response);
    };
    jokeReq.onerror = function () {
        console.log('An Error');
    };
    jokeReq.send();
}

getDadJoke();
