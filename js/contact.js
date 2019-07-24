contactForm.onsubmit = (event) => {
    event.preventDefault();
    contactForm.classList.add("d-none");
    feedback.classList.add("d-block");
};