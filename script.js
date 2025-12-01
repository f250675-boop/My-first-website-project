
function validateContactForm(event) {
    event.preventDefault();

 
    const name = document.getElementById('contactName');
    const email = document.getElementById('contactEmail');
    const message = document.getElementById('contactMessage');
    
    let isValid = true;


    if (!name || name.value.trim() === '' || !email || email.value.trim() === '' || !message || message.value.trim() === '') {
        alert('Please fill out all required fields (Name, Email, Message).');
        isValid = false;
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        alert('Please enter a valid email address.');
        isValid = false;
        return;
    }

    if (isValid) {
        alert('Thank you for your message! We will be in touch soon.');
        event.target.reset();
    }
}

function filterCars() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    const filter = searchInput.value.toLowerCase();
    
    const carListings = document.getElementById('listings');
    if (!carListings) return;


    const carCards = carListings.querySelectorAll('.car-card');

    carCards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(filter)) {
    
            card.style.display = 'block';
        } else {

            card.style.display = 'none';
        }
    });
}