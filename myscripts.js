var i = 0;
var j = 0;
let second_header = "I am a aspiring\u0020";
var txtArray = ['full stack engineer', 'Active Learning Researcher', 'Volleyball Player'];
var speed = 50; // The speed/duration of the effect in milliseconds

document.addEventListener('DOMContentLoaded', function () {
    typeWriter();
});

function typeWriter() {
    if (i < txtArray[j].length) {
        document.getElementById("text-display").innerHTML += txtArray[j].charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseWriter, 1000); // Pause before erasing
    }
}

function eraseWriter() {
    if (i >= 0) {
        document.getElementById("text-display").innerHTML = second_header.concat(txtArray[j].substring(0, i));
        i--;
        setTimeout(eraseWriter, speed);
    } else {
        j = (j + 1) % txtArray.length; // Move to the next text in the array
        setTimeout(typeWriter, 500); // Pause before typing the next string
    }
}

// Get the navbar
const navbar = document.getElementById("navbar");

// Get the offset position of the first section
const section = document.getElementById("hero-section");
const sticky = section.offsetTop + section.offsetHeight;

// Add or remove the "sticky" class when the user scrolls
window.onscroll = function() {
  console.log("test");
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

