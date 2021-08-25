// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const adc = (joke) => {
  const criateJoke = document.createElement('p');
  criateJoke.innerText = joke;
  body = document.querySelector('body');
  body.appendChild(criateJoke);
};

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const joke = fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => adc(data.joke));
};


window.onload = () => fetchJoke();

