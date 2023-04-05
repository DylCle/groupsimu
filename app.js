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

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }