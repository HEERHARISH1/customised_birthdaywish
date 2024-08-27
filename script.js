// Moving "No" button
const noButton = document.getElementById('no-button');

noButton.addEventListener('mouseover', function() {
    const randomX = Math.floor(Math.random() * 300) - 150;
    const randomY = Math.floor(Math.random() * 300) - 150;
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Function to update the name display
function updateNameDisplay(name) {
    document.getElementById('name-display').textContent = name;
    document.getElementById('surprise-name').textContent = name;
}

// Generate shareable link
// Generate shareable link
// Generate shareable link
function generateShareableLink(name) {
    const baseUrl = window.location.origin + window.location.pathname;
    const shareableLink = `${baseUrl}?name=${encodeURIComponent(name)}`;

    // Display the link in the input field
    const linkContainer = document.getElementById('link-container');
    const linkInput = document.getElementById('shareable-link');
    linkInput.value = shareableLink;
    linkContainer.classList.remove('hidden');
}



// Copy link to clipboard
function copyLinkToClipboard() {
    const linkInput = document.getElementById('shareable-link');
    linkInput.select();
    linkInput.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand('copy');

    alert('Link copied to clipboard!');
}

// Event listener for Generate Link button
document.getElementById('generate-link-btn').addEventListener('click', function () {
    const nameInput = document.getElementById('name-input');
    const name = nameInput.value.trim();

    if (name) {
        updateNameDisplay(name);
        generateShareableLink(name);
    } else {
        alert('Please enter a name!');
    }
});

// Event listener for Copy Link button
document.getElementById('copy-link-btn').addEventListener('click', copyLinkToClipboard);

// Event listener for Yes button
document.getElementById('yes-btn').addEventListener('click', function () {
    document.getElementById('landing-page').classList.remove('active');
    setTimeout(function () {
        document.getElementById('surprise-page').classList.add('active');
        createPetals();
    }, 500); // Match the transition duration
});

// Event listener for No button
document.getElementById('no-button').addEventListener('click', function () {
    alert('Please click Yes!');
});

// Function to create falling petals
function createPetals() {
    const container = document.querySelector('.petals-container');
    for (let i = 0; i < 25; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.animationDuration = `${Math.random() * 3 + 2}s`;
        petal.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(petal);
    }
}

// Check for name parameter in URL on page load
window.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    if (name) {
        updateNameDisplay(name);
        document.getElementById('link-section').style.display = 'none';
    }
});
