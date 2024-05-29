
//for buttons
document.addEventListener("DOMContentLoaded", function() {
    // Selecting the navigation buttons
    const homeButton = document.querySelector('#homeButton');
    const contactButton = document.querySelector('#contactButton');
    const modelsButton = document.querySelector('#modelsButton');
    const aboutButton = document.querySelector('#aboutButton');

    // Selecting the sections to scroll to
    const homeSection = document.querySelector('.hero');
    const contactSection = document.querySelector('.contact');
    const modelsSection = document.querySelector('.featured-models');
    const aboutSection = document.querySelector('.about');

    // Function to scroll to a section smoothly
    function scrollToSection(section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    homeButton.addEventListener('click', function() {
        scrollToSection(homeSection);
    });

    contactButton.addEventListener('click', function() {
        scrollToSection(contactSection);
    });

    modelsButton.addEventListener('click', function() {
        scrollToSection(modelsSection);
    });

    aboutButton.addEventListener('click', function() {
        scrollToSection(aboutSection);
    });
});
        
// Open the modal with the clicked image
function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
  }
  
  // Close the modal when the close button or outside the modal is clicked
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  // Close the modal when the user clicks outside of it
  window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  //for navbar
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('nav-links--visible');
  });
});



  
