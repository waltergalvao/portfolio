contactForm.onsubmit = (event) => {
    event.preventDefault();
    contactForm.classList.add("d-none");
    senderName.innerHTML = nameInput.value;
    feedback.classList.add("d-block");
};