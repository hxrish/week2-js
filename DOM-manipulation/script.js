let h1 = document.querySelector('h1');


let a = document.querySelector('.hey');

a.addEventListener('click', function(){
    h1.innerHTML = "I'm Bah!";
})

let rA = document.querySelector('.reset');

rA.addEventListener('click', function(){
    h1.innerHTML = "Hello! I'm Mr. Javascript.";
})