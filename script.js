const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => (observer.observe(el)));

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
            if (entry.isIntersecting) { 
                entry.target.classList.add("show")
            }
            else { 
                entry.target.classList.remove("show")
            }
    })
})

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);


  
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);