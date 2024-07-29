let t = document.getElementById('txt');
let b = document.getElementById('btn');
let con =  document.querySelector('.app');
let c = document.querySelector('.box');

function add()
{
   let inp = document.createElement('p');
   inp.textContent = t.value;
   inp.style.color = 'white';
   c.appendChild(inp);
}