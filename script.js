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
let body = document.body

bouton.addEventListener("click", function(){
     menu.classList.toggle('active')
     body.classList.toggle('dis')
})


let nav_links = document.querySelectorAll('.nav-link')
let menu_remove = document.getElementById('menu-right');
 nav_links.addEventListener("click", function(){
    menu_remove.classList.remove('active')
 })


// changement de container du bouton a moins 998px
/*
     function lets(){

     let bouton = document.getElementById('ret')
     let change = document.getElementById('sot')
     let returne = document.getElementById('input-search')
    if(window.innerWidth <998.85){
    change.appendChild(bouton)
    }else{
     returne.appendChild(bouton)
    }
    console.log('Après changement:', document.body.classList);
    }

    lets()
    
    window.addEventListener('resize', lets);
  
    */
