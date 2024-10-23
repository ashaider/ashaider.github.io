const toggleButton = document.getElementById('theme-toggle');
const currentTheme = document.documentElement.getAttribute('data-theme');
const navItems = document.querySelectorAll('.nav-bar-item');
let currentActiveItem = document.querySelector('.nav-bar-item.active');

window.onload = function() {
    document.querySelector('.slide-in-up').classList.add('slide-in-up');
    document.querySelector('.slide-in-down').classList.add('slide-in-down');
    document.querySelector('.slide-in-left').classList.add('slide-in-left');
    document.querySelector('.slide-in-right').classList.add('slide-in-right');
    document.querySelector('.fade-in-scale-up').classList.add('fade-in-scale-up');
    
    setTimeout(function() {
        document.getElementById("home-grid-container").style.display = "";        
    }, 200);
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');

    const newActiveItem = document.getElementById(`nav-bar-item-${pageId}`);
    if (currentActiveItem) {
        currentActiveItem.classList.remove('active');
    }

    newActiveItem.classList.add('active');
    currentActiveItem = newActiveItem;
}

navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        if (item !== currentActiveItem) {
            currentActiveItem.classList.remove('active');
        }
    });

    item.addEventListener('mouseout', () => {
        if (item !== currentActiveItem) {
            currentActiveItem.classList.add('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollable = document.getElementById("project-scroller");
    scrollable.style.setProperty('--scrollbar-opacity', '1');
    scrollable.style.setProperty('--scrollbar-scale', '1');

    const images = document.querySelectorAll('.project-image');
    images.forEach((item, index) => {
        console.log(index);
        const delay = (index * 0.25);
        item.style.animationDelay = `${delay}s`;
        item.classList.add('slide-in-up');
    });

    const descs = document.querySelectorAll('.project-desc');
    descs.forEach((item, index) => {
        const delay = (index * 0.25) + 0.17;
        item.style.animationDelay = `${delay}s`;
        item.classList.add('slide-in-right');
    });

    const links = document.querySelectorAll('.project-link');
    links.forEach((item, index) => {
        const delay = (index * 0.25) + 0.2675;
        item.style.animationDelay = `${delay}s`;
        item.classList.add('slide-in-down');
    });
});
