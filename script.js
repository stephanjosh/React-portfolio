const { response } = require("har-validator");

console.log("another customer approaching");

fetch('https://randomuser.me/api/?results=1');
    .then(response=>response.json());
    .then(data => console.log(data));

console.log(`Our valued customer please give us a moment as we get your onfo from out records`)