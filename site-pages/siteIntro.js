

const observe = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting){
                entry.target.classList.add('show-intro');
            }else {
                entry.target.classList.remove('show-intro');
            }
    });
})

const hideIntro = document.querySelectorAll('.intro');
hideIntro.forEach((el) => observe.observe(el));

let btn = document.querySelector('.enter');
let intro = document.querySelector('.intro');
let card = document.querySelector('.card');

btn.addEventListener('click', () => {
    intro.classList.add('button-transition')
    card.classList.add('card-slide');
    document.body.style.overflowY = "scroll";



    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting){
                    entry.target.classList.add('show');
                }
        });
    })
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  } 