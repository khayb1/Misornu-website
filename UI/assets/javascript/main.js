const searchIcon = document.querySelector('.search-icon');
const searchContainer = document.querySelector('.search-container');

searchIcon.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    const searchInput = searchContainer.querySelector('.search-input');
    searchInput.focus(); // Focus the input when activated
});

// FAQ section 
function toggleContent(element) {
    // // Close all other tabs first
    // const allAdditionalText = document.querySelectorAll('.additional-text');
    // const allIcons = document.querySelectorAll('.plus-icon, .minus-icon');
    
    // allAdditionalText.forEach(text => {
    //     text.style.display = "none";  // Hide all additional text
    // });
    
    // allIcons.forEach(icon => {
    //     icon.textContent = "+"; // Reset all icons to plus
    //     icon.classList.remove('minus-icon'); // Remove the minus class
    //     icon.classList.add('plus-icon'); // Add the plus class
    // });
    
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
