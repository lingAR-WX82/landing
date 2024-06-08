var typed = new Typed(".typing",{
    strings:["","trip","translator", "experience" ],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});

function handleScroll() {
    var aboutSection = document.querySelector('.about');
    var aboutPosition = aboutSection.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (aboutPosition < screenHeight / 2 && aboutPosition > -screenHeight / 2) {
        aboutSection.classList.add('active');
        var aboutImage = document.querySelector('.about-image');
        var aboutText = document.querySelector('.about-text');
        aboutImage.classList.add('active');
        aboutText.classList.add('active');
    } 
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

