const slides = document.querySelectorAll('.cards')
for (const cards of slides) {
    cards.addEventListener('click', () =>{
        
        clearAvtiveClasses()
        
        cards.classList.add('active')
    })
}
function clearAvtiveClasses() {
    slides.forEach((cards) => {
        cards.classList.remove('active')
    })
}