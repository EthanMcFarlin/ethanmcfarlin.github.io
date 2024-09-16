const phrases = [
    "information design", "product design", "software engineering", "product management",
    "environmental justice", "public health", "air quality", "remote sensing",
    "geospatial science", "geographic information systems", "startups", "graphic design",
    "machine learning", "app design", "data science", "data engineering",
    "data analytics", "statistical analysis", "scientific research", "computer science education",
    "teaching", "edtech", "urban planning", "UX design", "web development",
    "human-computer interaction", "science communication", "public policy"
];
let xPos = 0;
const speed = 1;
let alphaValues = [];
let totalWidth = 0;
const spaceBetween = 50;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function setup() {
    const bottomSlice = document.getElementById('bottomSlice');
    const canvas = createCanvas(windowWidth, bottomSlice.offsetHeight);
    canvas.parent('bottomCanvasContainer');
    textFont('Inter');
    textSize(20);
    textAlign(LEFT, CENTER);
    noFill();

    shuffleArray(phrases);

    for (let i = 0; i < phrases.length; i++) {
        alphaValues.push(255);
    }

    // Compute total width of all texts and spaces once
    totalWidth = phrases.reduce((acc, phrase) => acc + textWidth(phrase) + spaceBetween, 0);
}

function draw() {
    background('#131313');

    let currentXPos = xPos;
    const y = height / 2;

    // Draw phrases in a single pass while checking mouse hover
    for (let i = 0; i < phrases.length; i++) {
        const phrase = phrases[i];
        const textW = textWidth(phrase);

        if (mouseX >= currentXPos && mouseX <= currentXPos + textW && mouseY >= y - textSize() / 2 && mouseY <= y + textSize() / 2) {
            alphaValues[i] = lerp(alphaValues[i], 204, 0.3); // Target alpha value is 204 (80% of 255)
        } else {
            alphaValues[i] = lerp(alphaValues[i], 255, 0.3);
        }

        fill(255, 255, 255, alphaValues[i]);
        text(phrase, currentXPos, y);
        currentXPos += textW + spaceBetween;

        // Continuously draw phrases to cover the canvas width
        if (currentXPos > width) break;
    }

    xPos -= speed;

    // Reset position if all texts have moved out of the visible area
    if (xPos < -totalWidth) {
        xPos = 0;
    }
}

function windowResized() {
    const bottomSlice = document.getElementById('bottomSlice');
    resizeCanvas(windowWidth, bottomSlice.offsetHeight);
}