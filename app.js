const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

//initially all img divs (slides) are on top of each other (positioned absoulte)
//to make carousel we need all image divs in a line one after another
//to do so we position each div as absolute in css and in js set the left property of each div 
//1st img=0, 2nd=100%, 3rd=200%, ... and so on  

slides.forEach(function (slide, index) { //iterating all slides and setting left property acc to idx

    slide.style.left = `${index * 100}%`;
});

// to see images moving we use translateX property for all divs
// to move to next img we need translateX(-100%), and for next translateX(-200%), and so on
// so to set value we use a counter variable to set counter*100 % value 
// on pressing next (we need to decrease counter to use translateX(counter*100%)) but we increment counter
// and use translateX(-counter*100%) both are same as - sign indicate direction

let counter = 0;
const count = slides.length;
nextBtn.addEventListener("click", function () {

    counter = (counter + 1) % count; // on reaching last slide we need to move to 1st (4->0)
    carousel();
});

prevBtn.addEventListener("click", function () {

    counter = (counter - 1 + count) % count; // on 1st slide we need to move to last (0->4)
    carousel();
});

function carousel() {
    slides.forEach(function (slide) { // transforming all slides acc to counter variable
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });

    // optional functionality 
    // we can hide prevBtn in starting (line 57) when we are at 1st slide 
    // and next button when we are at last slide
    // we check it in carousel() bcz document loads only 1 time but carousel() is invoked on pressing each of next/prev button

    // if(counter === 0){
    //     prevBtn.style.visibility="hidden"; // ALTERNATIVE prevBtn.style.display="none";
    // }
    // else{
    //     prevBtn.style.visibility="visible"; // ALTERNATIVE prevBtn.style.display="block";
    // }

    // if(counter === count-1){
    //     nextBtn.style.visibility="hidden";
    // }
    // else{
    //     nextBtn.style.visibility="visible";
    // }
}

// prevBtn.style.visibility="hidden";