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
// lien du buton 
document.getElementById('monBouton').addEventListener('click', function() {
  window.location.href = 'authentification.html'; 
});



