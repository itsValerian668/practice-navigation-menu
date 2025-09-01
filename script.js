const navigation = document.querySelector('.navigation');
const highlight = document.querySelector('.highlight');
const items = document.querySelectorAll('.navigation li');

function moveHighlightToActive() {
    const active = document.querySelector('.navigation li.active');
    if (active) {
        highlight.style.width = active.offsetWidth + 'px';
        highlight.style.left = active.offsetLeft + 'px';
    }
}

// Initialize highlight position
moveHighlightToActive();

items.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        items.forEach(e1 => e1.classList.remove('active'));
        item.classList.add('active');
        highlight.style.width = item.offsetWidth + 'px';
        highlight.style.left = item.offsetLeft + 'px';
    });
});
