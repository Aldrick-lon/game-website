setTimeout(() => {
  console.log("Loaded");
}, 2000);


let navbar = document.querySelector('.navbar');
let listitem = document.querySelector('.navlist');

navbar.addEventListener('click', ()=>{
      navbar.classList.toggle('navbar-res');
      listitem.classList.toggle('li-res');
})