// ---------- Navbar

const openMenu = document.querySelector (".open-menu");
const closeMenu = document.querySelector (".close-menu");
const menu = document.querySelector (".menu");


// ---------- Open menu
openMenu.addEventListener('click', () => {
    menu.classList.add('open');
})

// ---------- Close menu
closeMenu.addEventListener('click', () => {
    menu.classList.remove('open');
})

// ---------- Scroll stickybar

// ---------- Scroll top