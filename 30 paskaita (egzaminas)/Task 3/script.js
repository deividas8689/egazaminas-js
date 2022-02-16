/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const btn = document.querySelector('#fetchdata')
const output = document.querySelector('#result')

const  getUsers = function() {
    output.innerHTML = 'Loading...'
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
        output.innerHTML = JSON.stringify(data, null, 2)
    })
    .catch(error => console.log(error))
}

btn.addEventListener('click', getUsers)