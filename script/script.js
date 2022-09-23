// This I have found to make Botstrap menu work when scrolling do not understand this in detail yet
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// Collapse navbar after click on small devices. The problem without this was that the black
// toolbar stayed over the text.  This works but I do not understand in detail yet how.
// I also looked at some way of doing overlay in CSS but will get there later
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => {new bootstrap.Collapse(menuToggle).toggle() })
})

