const tabs = document.querySelectorAll('.tab');
const formContainers = document.querySelectorAll('.form-container');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const tabId = tab.dataset.tab;
        formContainers.forEach(container => {
            container.style.display = container.id === tabId ? 'block' : 'none';
        });
    });
});


const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const sidebar = document.getElementById('sidebar');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const pageId = link.dataset.page;

        navLinks.forEach(navLink => navLink.classList.remove('active'));
        pages.forEach(page => page.style.display = 'none');

        document.getElementById(pageId).style.display = 'block';
        link.classList.add('active');

        // Ferme le menu hamburger si ouvert (en mode responsive)
        if (window.innerWidth <= 991.98) {
            sidebar.classList.remove('show');
        }
    });
});

document.getElementById('monBouton').addEventListener('click', function() {
    window.location.href = 'authentification.html';
});

document.getElementById('newDiscussionBtn').addEventListener('click', function() {
    alert("Nouvelle discussion cliquée!"); // Remplacez par votre logique
});

// Gestion du menu hamburger (responsive)
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    sidebar.classList.toggle('show');
});
// lien du buton 
document.getElementById('monBouton').addEventListener('click', function() {
  window.location.href = 'authentification.html'; 
});


// je sais pas pourquoi ça marche pas regarde un peu 

document.addEventListener("DOMContentLoaded", function() {
  const darkModeToggle = document.getElementById("darkModeToggle");

  if (darkModeToggle) { // Check if the element exists
    darkModeToggle.addEventListener("change", () => {
      if (darkModeToggle.checked) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    });
  } else {
    console.error("Element with ID 'darkModeToggle' not found.");
  }
});
