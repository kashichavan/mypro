// Get reference to the button
const magicButton = document.getElementById('magicButton');

// Add click event listener
magicButton.addEventListener('click', () => {
    // Change background color randomly
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.background = randomColor;

    // Show a playful alert
    alert('✨ Magic Happened! Check the new background color!');
});
