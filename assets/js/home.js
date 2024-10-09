// Trigger animation on window load
window.onload = function() {
    /*
    var itemToAnimate = document.querySelector('.home-grid-item:nth-child(4)');
    itemToAnimate.classList.add('slide-in-right');
    */

    document.querySelector('.home-grid-item:nth-child(1)').classList.add('slide-in-left');
    document.querySelector('.home-grid-item:nth-child(2)').classList.add('slide-in-up');
    document.querySelector('.home-grid-item:nth-child(3)').classList.add('slide-in-right');
    document.querySelector('.home-grid-item:nth-child(4)').classList.add('slide-in-down');
    document.querySelector('.home-grid-item:nth-child(5)').classList.add('slide-in-right');
    document.querySelector('.home-grid-item:nth-child(6)').classList.add('slide-in-left');
    document.querySelector('.home-grid-item:nth-child(7)').classList.add('fade-in-scale-up');
  }

const toggleButton = document.getElementById('theme-toggle');
const currentTheme = document.documentElement.getAttribute('data-theme');
toggleButton.addEventListener('click', () => {
    // Get current theme
    let currentTheme = document.documentElement.getAttribute('data-theme');
    
    // Toggle theme
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

