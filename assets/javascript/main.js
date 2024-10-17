
const navbarMenuToggle = document.querySelector('.navbar-menu-toggle');
const navbarLinks = document.querySelector('.navbar-link');
const navLinkItems = document.querySelectorAll('.nav-links'); // Select all anchor tags in nav links

// Toggle the menu when the hamburger is clicked
navbarMenuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// Close the menu when any navigation link is clicked
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.classList.remove('active'); // Close the menu by removing the active class
    });
});

const searchIcon = document.querySelector('.search-icon');
const searchContainer = document.querySelector('.search-container');

searchIcon.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    const searchInput = searchContainer.querySelector('.search-input');
    searchInput.focus(); // Focus the input when activated
});

// FAQ section 
function toggleContent(element) {
    // Close all other tabs first
    const allAdditionalText = document.querySelectorAll('.additional-text');
    const allIcons = document.querySelectorAll('.plus-icon, .minus-icon');
    
    allAdditionalText.forEach(text => {
        text.style.display = "none";  // Hide all additional text
    });
    
    allIcons.forEach(icon => {
        icon.textContent = "+"; // Reset all icons to plus
        icon.classList.remove('minus-icon'); // Remove the minus class
        icon.classList.add('plus-icon'); // Add the plus class
    });
    
    // Toggle the clicked tab
    const additionalText = element.nextElementSibling;
    const plusIcon = element.querySelector('.plus-icon, .minus-icon');

    if (additionalText.style.display === "none" || additionalText.style.display === "") {
        // Open current tab and change to minus icon
        additionalText.style.display = "block";
        plusIcon.textContent = "-"; 
        plusIcon.classList.remove('plus-icon');
        plusIcon.classList.add('minus-icon');
    } else {
        // Close current tab and revert to plus icon
        additionalText.style.display = "none";
        plusIcon.textContent = "+"; 
        plusIcon.classList.remove('minus-icon');
        plusIcon.classList.add('plus-icon');
    }
}

// what we do section popover
function openPopover(id) {
    document.getElementById(id).style.display = "flex";
}

function closePopover(id) {
    document.getElementById(id).style.display = "none";
}


// scroll animation 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));