const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const h1 = document.querySelector('h1');
btn.addEventListener('click', () =>{
  body.classList.toggle('darkmode');  
  h1.classList.toggle ('darkmode'); 
});


