
document.addEventListener("DOMContentLoaded", function () 
{

    // Mobile navigation
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) 
        {
        menuToggle.addEventListener("click", function () 
        {
            const isOpen = navMenu.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", isOpen);
            menuToggle.textContent = isOpen ? "✕" : "☰";
        });
    }

    // Contact form
    const contactForm = document.getElementById("contactForm");

    if (contactForm) 
        {
        contactForm.addEventListener("submit", function (event) 
        {
            event.preventDefault();

            if (!contactForm.checkValidity()) 
                {
                contactForm.reportValidity();
                return;
            }

            const name = document.getElementById("name").value.trim();

            alert(
                "Thank you, " + name +
                "! Your form is valid. Connect a backend to send your message."
            );

            contactForm.reset();
        });
    }

});