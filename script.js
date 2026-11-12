function filterMenu(kategori) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(function (card) {
        if (kategori === 'all' || card.dataset.category === kategori) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}