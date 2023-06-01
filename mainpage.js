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
    revealSpans()
    var cube = document.querySelector(".cube");
    var scrollPosition = window.pageYOffset;
    var cogDissonance = document.querySelector(".cog-dissonance");
    var translateX = 0; // Adjust the division factor as needed for the desired speed
    var translateY = 0; // Adjust the division factor as needed for the desired speed
    var rotateY = scrollPosition / 5; // Adjust the division factor as needed for the desired rotation speed

    if(cogDissonance.classList.contains('show')){
        let rect = cube.getBoundingClientRect();
        let y = rect.y;
    
        let rect2 = cogDissonance.getBoundingClientRect();
        let y2 = rect2.y;

        console.log("cube:", y);
        console.log("baslık", y2);

 
        if(y2 == y){
            translateX = 0; // Adjust the division factor as needed for the desired speed
            translateY = 0; // Adjust the division factor as needed for the desired speed
            // rotateY = 0;
        }
        else{
            translateX = -1 * scrollPosition / 7;
            translateY = scrollPosition / 12;
        }

    }


    cube.style.transform = "translate(" + translateX + "px, " + translateY + "px) rotateY(" + rotateY + "deg) rotateZ(" + rotateY + "deg)";

  
});



let paragraphs = [...document.querySelectorAll('.product')] ;
let spans = [];

paragraphs.forEach(paragraph => {
    let htmlString = '';
    let pArray = paragraph.textContent.split('');
    for(let i = 0; i < pArray.length; i++){
        htmlString += '<span class="product-span">'+ pArray[i]+ '</span>' ;
    }
    paragraph.innerHTML = htmlString;
})

spans = [...document.querySelectorAll('.product-span')];

function revealSpans(){
    for(let i = 0; i < spans.length; i++){
        if(spans[i].parentElement.getBoundingClientRect().top < window.innerHeight / 2){
            let {left, top} = spans[i].getBoundingClientRect();
            top = top - (window.innerHeight * .4);
            let opacityValue = 1 - ((top * 0.01) + (left * 0.001)) < 0.1 ? 0.1 : 1 - ((top * 0.01) + (left * 0.001)).toFixed(3);
            opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3);
            spans[i].style.opacity = opacityValue;
        }
    }
}

