const commentInput = document.getElementById('comment-input');

commentInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // empêche le saut de ligne si c'est un textarea
        const comment = commentInput.value.trim();
        if (comment !== '') {
            console.log('Envoyer commentaire :', comment);
            // Ici tu pourrais faire une requête AJAX pour l'envoyer en PHP
            commentInput.value = ''; // Vide le champ après envoi
        }
    }
});