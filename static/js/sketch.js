const phrases = [
    "information design", "product design", "software engineering", "product management",
    "environmental justice", "public health", "air quality", "remote sensing",
    "geospatial science", "geographic information systems", "startups", "graphic design",
    "machine learning", "app design", "data science", "data engineering",
    "data analytics", "statistical analysis", "scientific research", "computer science education",
    "teaching", "edtech", "urban planning", "UX design", "web development",
    "human-computer interaction", "science communication", "public policy"
];
let xPos = 0; // Initial x position of the text
const speed = 1; // Speed at which the text moves to the right
let alphaValues = [];

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
    textSize(20); // Slightly decreased text size
    textAlign(LEFT, CENTER); // Align text vertically centered
    noFill(); // Disable fill initially

    // Shuffle the phrases at the start
    shuffleArray(phrases);

    // Initialize alpha values for each phrase
    for (let i = 0; i < phrases.length; i++) {
        alphaValues.push(255); // Fully opaque initially
    }
}

function draw() {
    background('#131313');

    let totalWidth = 0;
    const spaceBetween = 50;

    // Calculate the total width of all texts including spaces
    for (let phrase of phrases) {
        totalWidth += textWidth(phrase) + spaceBetween;
    }

    let x = xPos;
    const y = height / 2;

    // Ensuring continuous drawing of phrases
    while (x < width) {
        for (let i = 0; i < phrases.length; i++) {
            const phrase = phrases[i];

            // Calculate text bounding box
            const textW = textWidth(phrase);
            const textH = textSize();

            if (mouseX >= x && mouseX <= x + textW && mouseY >= y - textH / 2 && mouseY <= y + textH / 2) {
                // If mouse is over the text, decrease its alpha to 80% for fade-in effect
                alphaValues[i] = lerp(alphaValues[i], 255 * 0.8, 0.3); // Target alpha value is 204 (80% of 255)
            } else {
                // Otherwise, increase its alpha back to 100% for fade-out effect
                alphaValues[i] = lerp(alphaValues[i], 255, 0.3); // Fully opaque
            }

            // Set the fill with the adjusted alpha value
            fill(255, 255, 255, alphaValues[i]);

            text(phrase, x, y);
            x += textWidth(phrase) + spaceBetween;

            if (x > width) break;
        }
    }

    xPos -= speed;

    // Reset position if all texts have moved out of the visible canvas area
    if (xPos < -totalWidth) {
        xPos = 0;
    }
}

function windowResized() {
    const bottomSlice = document.getElementById('bottomSlice');
    resizeCanvas(windowWidth, bottomSlice.offsetHeight);
}