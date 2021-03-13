// grabbing elements from HTML to work with in js
let search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    drinkName = document.getElementById('dinkName'),
    directions = document.getElementById('directions'),
    needed = document.getElementById('needed'),
    one = document.getElementById('one'),
    two = document.getElementById('two'),
    three = document.getElementById('three');

let myHeaders = new Headers();
myHeaders.append("Cookie", "__cfduid=d354e8c66446965133da840d1d57820451615506517");
let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    