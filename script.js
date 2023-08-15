let menuToggle = document.querySelector('.menu-toggle');
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


document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector('.slides-container');

    // Exit the function early if the main slider container isn't present
    if (!sliderContainer) {
        return;
    }

    const slides = Array.from(sliderContainer.children);
    const nextButton = document.querySelector('#nextBtn');
    const prevButton = document.querySelector('#prevBtn');

    // Exit the function if either button isn't found
    if (!nextButton || !prevButton) {
        console.error("One of the slider buttons is missing!");
        return;
    }

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
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 5000);

        // clear the form
        $("#myForm")[0].reset();
    });
});


window.addEventListener('load', function() {
    if (!localStorage.getItem('hasVisitedBefore')) {
        document.getElementById('loadingBar').style.width = '100%';
        setTimeout(function() {
            document.getElementById('logoScreen').style.opacity = '0';
            setTimeout(function() {
                document.getElementById('logoScreen').style.display = 'none';
            }, 1000);
        }, 2000);
        
        localStorage.setItem('hasVisitedBefore', 'true');
    }
});



$(document).ready(function() {
    $(window).scroll(function() {
        var scrollPosition = window.scrollY;


        var scrollPosition = $(this).scrollTop();
        var videoSectionHeight = $('.vid-section').height();

        var threshold = videoSectionHeight - window.innerHeight; // Adjust when to start the sticky effect

        var sloganAndButton = $('.slogan-and-button');

        // Logic for .slogan-and-button
        if (scrollPosition > threshold) {
            sloganAndButton.addClass('sticky');
        } else {
            sloganAndButton.removeClass('sticky');
        }
        // Logic for .about-section
        var aboutSection = document.querySelector('.about-section');
        var aboutSectionReverse = document.querySelector('.about-section.reverse');
        if (aboutSection && aboutSectionReverse) {
            var aboutSectionBottom = aboutSection.getBoundingClientRect().bottom;
            if (aboutSectionBottom <= 0) {
                aboutSection.style.zIndex = '1';
                aboutSectionReverse.style.zIndex = '2';
            } else {
                aboutSection.style.zIndex = '2';
                aboutSectionReverse.style.zIndex = '1';
            }
        }

        
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const vidSection = document.querySelector('.vid-section');
    const video = document.getElementById('myVideo');

    if (video && vidSection) {
        video.addEventListener('loadedmetadata', adjustVideoDimensions);
        window.addEventListener('resize', adjustVideoDimensions);

        function adjustVideoDimensions() {
            const sectionRatio = vidSection.clientWidth / vidSection.clientHeight;
            const videoRatio = video.videoWidth / video.videoHeight;

            if (sectionRatio > videoRatio) {
                video.style.width = '100%';
                video.style.height = 'auto';
            } else {
                video.style.width = 'auto';
                video.style.height = '100%';
            }
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    
    dropdown.addEventListener('click', function(event) {
        var dropdownContent = this.querySelector('.dropdown-content');
        
        if (window.innerWidth <= 768) { // Only do this for screens <= 768px
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                dropdownContent.style.display = 'block';
            }
            event.preventDefault(); // Prevent default link action
        }
    });
});
