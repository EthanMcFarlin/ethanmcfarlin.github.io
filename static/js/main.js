AOS.init({once: true});

document.addEventListener('DOMContentLoaded', function() {
    const actionButton = document.getElementById('actionButton');
    const recentUpdatesHeader = document.getElementById('recentUpdatesHeader');
    const recentUpdates = document.getElementById('recentUpdates');

    actionButton.addEventListener('click', function() {
        const headerRect = recentUpdatesHeader.getBoundingClientRect();
        const updatesRect = recentUpdates.getBoundingClientRect();
        const offset = (updatesRect.top + updatesRect.bottom) / 2;

        window.scrollTo({
            top: window.scrollY + offset - (window.innerHeight / 2),
            behavior: 'smooth'
        });
    });

    // New functionality for navigating to ".projectsGrid"
    const projectsNavLink = document.getElementById('projectsNavLink');
    const projectsGrid = document.querySelector('.projectsGrid');

    projectsNavLink.addEventListener('click', function() {
        const projectsRect = projectsGrid.getBoundingClientRect();
        const offset = (projectsRect.top + projectsRect.bottom) / 2;

        window.scrollTo({
            top: window.scrollY + offset - (window.innerHeight / 2),
            behavior: 'smooth'
        });
    });
});

const imagePaths = [
    { path: 'static/img/flowers_wide.jpg', probability: 50 },
    { path: 'static/img/winter.jpg', probability: 15 },
    { path: 'static/img/davis.jpg', probability: 5 },
    { path: 'static/img/colombia.jpg', probability: 20 },
    { path: 'static/img/danube.jpg', probability: 5 },
    { path: 'static/img/les_mis.jpg', probability: 5 }
];

function getRandomImage() {
    const randomNum = Math.random() * 100;
    let sum = 0;

    for (const img of imagePaths) {
        sum += img.probability;
        if (randomNum <= sum) {
            return img.path;
        }
    }
}

window.onload = () => {
    const selectedImage = getRandomImage();
    document.getElementById('portrait').src = selectedImage;
    console.log("Selected image:", selectedImage);
    changeShadow();
}

const imageContainer = document.querySelector('.image-container');
const image = document.querySelector('.image');

imageContainer.addEventListener('mousemove', (e) => {
    const { offsetWidth: width, offsetHeight: height } = imageContainer;
    const { offsetX: x, offsetY: y } = e;

    const moveX = (x / width) - 0.5;
    const moveY = (y / height) - 0.5;

    const rotateX = moveY * 20;
    const rotateY = -moveX * 20;

    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

imageContainer.addEventListener('mouseleave', () => {
    image.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

// Function to change the shadow color and opacity
function changeShadow() {
    const shadowColors = [
        'rgba(106, 13, 173, 0.05)',
        'rgba(155, 48, 255, 0.05)',
        'rgba(52, 152, 219, 0.05)',
        'rgba(30, 144, 255, 0.05)'
    ];

    let i = 0;

    setInterval(() => {
        const nextColor1 = shadowColors[i % shadowColors.length];
        const nextColor2 = shadowColors[(i + 1) % shadowColors.length];
        image.style.boxShadow = `0 0 30px ${nextColor1}, 0 0 45px ${nextColor2}`;
        i++;
    }, 5000); // Change color every 5 seconds
}

// window.onload = changeShadow;