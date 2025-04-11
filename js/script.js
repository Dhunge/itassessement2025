// ScrollReveal animations
document.addEventListener("DOMContentLoaded", () => {
    const sr = ScrollReveal({
        distance: '60px',
        duration: 2500,
        delay: 400,
        reset: true
    });

    sr.reveal('.home-text', { delay: 200, origin: 'top' });
    sr.reveal('.home-img', { delay: 300, origin: 'top' });
    sr.reveal('.feature, .product, .contact', { delay: 200, origin: 'top' });
    sr.reveal('.about-text', { delay: 200, origin: 'top' });
    sr.reveal('.about img', { delay: 300, origin: 'top' });
    sr.reveal('.gallery', { delay: 300, origin: 'top' });
    sr.reveal('.container', { delay: 300, origin: 'top' });
});
document.addEventListener("DOMContentLoaded", () => {
    // Initialize ScrollReveal
    const sr = ScrollReveal();

    // Apply ScrollReveal to elements on the Contact Us page
    sr.reveal('.contact h2', { delay: 200, origin: 'top' }); // Header
    sr.reveal('form table', { delay: 300, origin: 'bottom' }); // Form table
    sr.reveal('footer.contact', { delay: 200, origin: 'top' }); // Footer
    sr.reveal('.map-container iframe', { delay: 400, origin: 'bottom' }); // Map
});
document.addEventListener("DOMContentLoaded", () => {
    const sr = ScrollReveal(); // Initialize ScrollReveal

    // Reveal header section
    sr.reveal('.gallery h2', { delay: 200, origin: 'top' });

    // Reveal each gallery item with a delay
    sr.reveal('.gallery-item', {
        delay: 300,
        origin: 'bottom',
        interval: 200, // Adds a staggered animation for each gallery item
        distance: '50px'
    });

    // Reveal footer section
    sr.reveal('footer.contact', { delay: 400, origin: 'bottom' });

    // Reveal map iframe
    sr.reveal('.map-container iframe', { delay: 500, origin: 'bottom' });
});

// Gallery Modal Functionality
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");

    // Open modal on image click
    document.querySelectorAll(".gallery-item img").forEach((img) => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.textContent = img.alt;

            // Add class to body to disable scrolling when modal is open
            document.body.classList.add("modal-open");
        });
    });

    // Close modal on close button click
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    });

    // Close modal if user clicks outside the modal
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
        }
    });
});

// Form validation
function validateForm(event) {
    event.preventDefault();

    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var address = document.getElementById('address').value;
    var country = document.getElementById('country').value;
    var file = document.getElementById('file').files.length;

    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(msg) {
        msg.remove();
    });

    if (firstName === "") {
        showError('first-name', 'First name is required.');
        return;
    }
    if (lastName === "") {
        showError('last-name', 'Last name is required.');
        return;
    }
    if (email === "") {
        showError('email', 'Email is required.');
        return;
    }
    if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address.');
        return;
    }
    if (mobile === "") {
        showError('mobile', 'Mobile number is required.');
        return;
    }
    if (address === "") {
        showError('address', 'Address is required.');
        return;
    }
    if (country === "") {
        showError('country', 'Please select a country.');
        return;
    }
    if (file === 0) {
        showError('file', 'Please upload your picture.');
        return;
    }

    alert('Form submitted successfully!');
    document.getElementById('contact-form').submit();
}

function showError(inputId, message) {
    var inputElement = document.getElementById(inputId);
    var errorMessage = document.createElement('span');
    errorMessage.classList.add('error-message');
    errorMessage.style.color = 'red';
    errorMessage.textContent = message;
    inputElement.parentNode.appendChild(errorMessage);
}

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.addEventListener("DOMContentLoaded", function() {
    // Create an intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the animation
                entry.target.classList.add("visible");
                // Optionally, stop observing the element after it's animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    // Select navbar and footer elements to observe
    const elementsToAnimate = document.querySelectorAll(".fade-up");

    // Observe each element
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});