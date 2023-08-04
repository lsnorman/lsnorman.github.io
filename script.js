const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});


const closeMenu = document.querySelector('.close-menu');

closeMenu.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
});


//testimonial slider 
document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector('.slides-container');
    const slides = Array.from(sliderContainer.children);
    const nextButton = document.querySelector('#nextBtn');
    const prevButton = document.querySelector('#prevBtn');

    let currentIndex = 0;

    nextButton.addEventListener('click', e => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
    });

    prevButton.addEventListener('click', e => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlides();
    });

    function updateSlides() {
        sliderContainer.style.left = '-' + (currentIndex * 100) + '%';
    }
});


$("#myForm").submit(function(e) {
    e.preventDefault(); // prevent the form from submitting normally

    var name = $("#name").val();
    var email = $("#email").val();
    var enquiry = $("#enquiry").val();

    if(!name || !email || !enquiry){
        // This checks if any of the fields are empty.
        var missingFields = [];

        if (!name) missingFields.push("Name");
        if (!email) missingFields.push("Email");
        if (!enquiry) missingFields.push("Enquiry");

        alert("Please fill in the following fields: " + missingFields.join(", "));
        return false;  // Prevent form from being submitted.
    }

    $.ajax({
        url: $(this).attr('action'), // get the form action
        type: 'POST', // the HTTP method
        data: $(this).serialize(), // get form data
        success: function(data) {
            // handle success
        },
        error: function(data) {
            // handle error
        }
    }).always(function() {
        // show your toast notification here
        var toast = document.getElementById("toast");
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);

        // clear the form
        $("#myForm")[0].reset();
    });
});


window.addEventListener('load', function() {
    document.getElementById('loadingBar').style.width = '100%';
    setTimeout(function() {
        document.getElementById('logoScreen').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('logoScreen').style.display = 'none';
        }, 1000);
    }, 2000);
});


window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var sloganAndButton = document.querySelector('.slogan-and-button');
    var testimonialSection = document.querySelector('.testimonial-slider');

    if (scrollPosition > 0) {
        sloganAndButton.style.position = 'fixed';
        sloganAndButton.style.top = '0';
        sloganAndButton.style.left = '0';
        sloganAndButton.style.right = '0';
        sloganAndButton.style.zIndex = '0'; // Add this line
    } else {
        sloganAndButton.style.position = 'relative';
    }

    if (scrollPosition > testimonialSection.offsetTop) {
        sloganAndButton.style.zIndex = '-1'; // Change this line
    } else {
        sloganAndButton.style.zIndex = '0'; // Change this line
    }
});


window.addEventListener('scroll', function() {
    var aboutSection = document.querySelector('.about-section');
    var aboutSectionReverse = document.querySelector('.about-section.reverse');

    var aboutSectionBottom = aboutSection.getBoundingClientRect().bottom;
    var aboutSectionReverseTop = aboutSectionReverse.getBoundingClientRect().top;

    if (aboutSectionBottom <= 0) {
        aboutSection.style.zIndex = '1';
        aboutSectionReverse.style.zIndex = '2';
    } else {
        aboutSection.style.zIndex = '2';
        aboutSectionReverse.style.zIndex = '1';
    }
});








