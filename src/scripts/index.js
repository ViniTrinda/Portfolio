let desc        = document.getElementById('desc');
let projContent = document.getElementById('projects')
let cttContent  = document.getElementById('ctt-content')

let home = document.getElementById('home')
let proj = document.getElementById('proj');
let ctt  = document.getElementById('ctt');


home.addEventListener('click', homeActive)
proj.addEventListener('click', projActive)
ctt.addEventListener('click', cttActive)

document.addEventListener('DOMContentLoaded', homeActive())

function homeActive(){
     switchSection(projContent, desc);
     switchSection(cttContent, desc);
     desc.style.display = 'flex';
     home.innerHTML = '<i class="fa-regular fa-circle-dot fa-2xs"></i>';
     proj.innerHTML = 'Projetos';
     ctt.innerHTML  = 'Contato';
}


function projActive(){
     switchSection(desc ,projContent);
     switchSection(cttContent, projContent);
     projContent.style.display = 'flex';
     proj.innerHTML = '<i class="fa-regular fa-circle-dot fa-2xs"></i>';
     home.innerHTML = 'Home';
     ctt.innerHTML  = 'Contato';
}


function cttActive(){
     switchSection(projContent, cttContent);
     switchSection(desc, cttContent);
     cttContent.style.display = 'flex';
     ctt.innerHTML = '<i class="fa-regular fa-circle-dot fa-2xs"></i>';
     proj.innerHTML = 'Projetos';
     home.innerHTML  = 'Home';
}

function switchSection(hideEl, showEl) {
     hideEl.classList.remove('show');//remove a caracteristica de opacidade do elemento
     hideEl.classList.add('fade'); // adiciona a transparencia
     
     setTimeout(() => {
       hideEl.style.display = 'none';//"apaga o elemento"
   
       showEl.style.display = 'flex'; //mostra o elemento clicado
       showEl.classList.remove('fade'); //garante que ele tenha opacidade 100%
       showEl.classList.add('show');
     }, 250); 
   }