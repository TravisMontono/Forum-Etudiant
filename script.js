const tabs = document.querySelectorAll(".tab");
const formContainers = document.querySelectorAll(".form-container");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const tabId = tab.dataset.tab;
    formContainers.forEach((container) => {
      container.style.display = container.id === tabId ? "block" : "none";
    });
  });
});

const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");
const sidebar = document.getElementById("sidebar");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const pageId = link.dataset.page;

    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    pages.forEach((page) => (page.style.display = "none"));

    document.getElementById(pageId).style.display = "block";
    link.classList.add("active");
  });
});

// dark mode
function dark_mode() {
  let bouton = document.getElementById("toggle-dark");
  let body = document.body;
  let navbar = document.getElementById("menu");
  bouton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
  });
}

dark_mode();

// desactivation  du champ recherche gauche  sur le premiere onglet

let tab_1 = document.getElementById("tab-1");
let tab_2 = document.getElementById("tab-2");
let tab_3 = document.getElementById("tab-3");
let input_search = document.getElementById("search");
window.addEventListener("DOMContentLoaded", () => {
  input_search.disabled = true;
  input_search.style.cursor = "not-allowed";
});

tab_1.addEventListener("click", function () {
  input_search.disabled = true;
  input_search.style.cursor = "not-allowed";
});

tab_2.addEventListener("click", function () {
  input_search.disabled = false;
  input_search.style.cursor = "text";
});

tab_3.addEventListener("click", function () {
  input_search.disabled = false;
  input_search.style.cursor = "text";
});

// faire appraitre le menu sur des taille inferieur

let bouton = document.getElementById('navbar-toggler')
let menu = document.getElementById('menu-right')
let content = document.querySelector(".content")
let body = document.body

bouton.addEventListener("click", function(){
     menu.classList.toggle('active')
     body.classList.toggle('menu-open')
})

let bouton_input = document.getElementById('bouton-input')
bouton.addEventListener("click", function(){
       bouton_input.classList.toggle('btn-none')
})
// desactivation du menu verticale gauche si l'utilisateur clique sur un onglet sur mobile

let nav_links = document.querySelectorAll('.nav-link')
let menu_remove = document.getElementById('menu-right');

 nav_links.forEach(function(link){
  link.addEventListener("click",function(){
    menu_remove.classList.remove('active')
    menu_remove.classList.remove('drop')
  })
 })

 let paragraph = document.querySelectorAll(".paragraph");
 paragraph.forEach(function(paragraphs){
  let bouton_retry = document.createElement('button')
  bouton_retry.textContent="..."
  bouton_retry.style.color='white'
  bouton_retry.style.border="none"
  bouton_retry.style.backgroundColor="transparent"
  bouton_retry.style.fontSize="30px"
  let texte = paragraphs.textContent;
  let sauvegarde = texte
  console.log(sauvegarde.length)
  
  let extrait = texte.substring(0,50);

if(texte.length>=50){
  let span = document.createElement('span');
  span.textContent= extrait
  paragraphs.textContent = '';
  paragraphs.appendChild(span)
  paragraphs.appendChild(bouton_retry);
}else{
    paragraphs.textContent= sauvegarde 
}

bouton_retry.addEventListener("click", function(){
     window.location.href="authentification"
})

 })
// On récupère d'abord son texte


