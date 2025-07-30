let p = document.getElementById(`intro`);
console.log(p);
// this used to change text element
//p.textContent="this is ";
//using querry selector
let p1 = document.querySelector("#intro");
console.log(p1);
//using class name 
let p2 = document.querySelector(".about-us");
console.log(p2);
let h1 = document.querySelector("h1");
console.log(h1);
let h3 = document.querySelector("h3");
console.log(h3); // as h3 is not present is html code so it return null
// innerhtml change html content we can also use tag 
// h1.innerHTML = `we are `