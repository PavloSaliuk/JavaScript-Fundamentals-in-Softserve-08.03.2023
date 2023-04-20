const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    const animation = circle.getAttribute('data-anim');
    circle.classList.add(animation);
    circle.addEventListener('animationend', () => {
        console.log(`Animation type ${animation}, end successfull`);
    })
});