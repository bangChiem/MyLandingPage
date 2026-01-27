// Get the navbar
const navbar = document.getElementById("navbar");

// Get the offset position of the first section
const section = document.getElementById("hero-section");
const sticky = section.offsetTop + section.offsetHeight;

// Create a placeholder to prevent layout shift
const navbarHeight = navbar.offsetHeight;
const placeholder = document.createElement('div');
placeholder.style.height = `${navbarHeight}px`;
placeholder.style.display = 'none'; // Initially hide the placeholder


// Add or remove the "sticky" class when the user scrolls
window.onscroll = function() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
    // Add the placeholder
    navbar.parentNode.insertBefore(placeholder, navbar);
    placeholder.style.display = 'block'; // Show the placeholder
  } else {
    navbar.classList.remove("sticky");
    // Remove the placeholder
    if (placeholder.parentNode) {
      placeholder.parentNode.removeChild(placeholder);
    }
    placeholder.style.display = 'none'; // Hide the placeholder
  }
};

//Alternate TCNJ text color
const paragraph = document.getElementById("highlight-tcnj");
const text = paragraph.textContent;
let styledText = "";

for (let i = 0; i < text.length; i++) {
  // Wrap each character in a span with a class based on the index (even or odd)
  styledText += `<span class="${i % 2 === 0 ? 'tcnj-even' : 'tcnj-odd'}">${text[i]}</span>`;
}

function showSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}

function closeSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}


