const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) => observer2.observe(el));

// Cube animation
window.addEventListener("scroll", function () {
    var cube = document.querySelector(".cube");
    var scrollPosition = window.pageYOffset;
    var cogDissonance = document.querySelector(".cog-dissonance");
    var translateX = 0; // Adjust the division factor as needed for the desired speed
    var translateY = 0; // Adjust the division factor as needed for the desired speed
    var rotateY = scrollPosition / 5; // Adjust the division factor as needed for the desired rotation speed

    if(cogDissonance.classList.contains('show')){
        if(screen.width < 1400){
            translateX = 0;
            translateY = 0;
        }
        else{
            translateX = -1 * scrollPosition / 7;
            translateY = scrollPosition / 12;
        }
        let rect = cube.getBoundingClientRect();
        let y = rect.top;
    
        let rect2 = cogDissonance.getBoundingClientRect();
        let y2 = rect2.top;
        if(y2 == y){
            var translateX = 0; // Adjust the division factor as needed for the desired speed
            var translateY = 0; // Adjust the division factor as needed for the desired speed
            var rotateY = 0;
        }
    }
    cube.style.transform = "translate(" + translateX + "px, " + translateY + "px) rotateY(" + rotateY + "deg) rotateZ(" + rotateY + "deg)";
  
});


var clientCase = document.querySelector(".client-case");
transition = document.querySelector(".card-3");

//document.getElementsByClassName("card-3").addEventListener("transitionend", myFunction);

/*
transition.addEventListener("transitionend", () => {
    clientCase.style.removeProperty('position');
});
*/

/*
var listElement = 0;


window.addEventListener("scroll", function () {
    var list = document.querySelector(".mission-list");
    var listItems = list.getElementsByTagName('li');
    var ourMission = this.document.querySelector(".our-mission");

    if (listItems[listElement].classList.contains('show') || window.pageYOffset > scrollPosition + 150) {
        listItems[listElement].style.transition = "opacity 2s";
        listItems[listElement].style.opacity = 1;
        scrollPosition = window.pageYOffset;
        listItems[listElement].classList.add('show');
        listElement++;
    }

    
    if(listItems[listItems.length-1].classList.contains('show')){
        ourMission.style.removeProperty('position');
    }

});*/

