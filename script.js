document.addEventListener("DOMContentLoaded", function () {
    // Check which page is active based on body ID or class
    const pageId = document.body.id;

    // Registration Page Functionality
    if (pageId === "registration") {
        const registrationForm = document.getElementById("registrationForm");

        registrationForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const email = document.getElementById("email").value;

            if (!username || !password || !email) {
                alert("All fields are required.");
            } else if (!validateEmail(email)) {
                alert("Invalid email address.");
            } else {
                alert("Registration successful!");
                registrationForm.reset();
            }
        });

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    }

    // Login Page Functionality
    if (pageId === "login") {
        const loginForm = document.getElementById("loginForm");

        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (!username || !password) {
                alert("Username and password are required.");
            } else {
                alert("Login successful!");
                loginForm.reset();
            }
        });
    }

    // Contact Us Page Functionality
    if (pageId === "contact") {
        const contactForm = document.getElementById("contactForm");

        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (!name || !email || !message) {
                alert("All fields are required.");
            } else if (!validateEmail(email)) {
                alert("Invalid email address.");
            } else {
                alert("Message sent successfully!");
                contactForm.reset();
            }
        });
    }

    // Offers Page Functionality
    if (pageId === "offers") {
        const offerButtons = document.querySelectorAll(".apply-offer");

        offerButtons.forEach((button) => {
            button.addEventListener("click", function () {
                const offerCode = button.dataset.code;
                alert("Offer applied: " + offerCode);
            });
        });
    }
});
