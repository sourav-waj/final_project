let timer;
let deleteFirstPhotoDelay;

// Fetching data from the server from Dog API
async function start() {
    try {
        const data = await fetchData("https://dog.ceo/api/breeds/list/all");
        createBreedList(data.message);
    } catch (error) {
        console.error("Network error:", error);
    }
}

// Function to fetch data from a given URL
async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}

// Creating a dropdown menu list of Breeds
function createBreedList(breedList) {
    const breedSelect = document.getElementById("breed");
    breedSelect.innerHTML = `
        <select onchange="loadByBreed(this.value)">
            <option>choose a dog breed</option>
            ${Object.keys(breedList).map(breed => `<option>${breed}</option>`).join('')}
        </select>
    `;
}

// To load images for the selected breed
async function loadByBreed(breed) {
    if (breed !== "choose a dog breed") {
        try {
            const data = await fetchData(`https://dog.ceo/api/breed/${breed}/images`);
            createSlideshow(data.message);
        } catch (error) {
            console.error("Failed to load breed images:", error);
        }
    }
}

// Making the webpage interactive and working
function createSlideshow(images) {
    let currentPosition = 0;
    clearInterval(timer);
    clearTimeout(deleteFirstPhotoDelay);

    const slideshowContainer = document.getElementById("slideshow");
    slideshowContainer.innerHTML = `
        <div class="slide" style="background-image: url('${images[0]}')"></div>
    `;

    if (images.length > 1) {
        currentPosition = 1;
        timer = setInterval(() => {
            nextSlide(images, slideshowContainer, currentPosition);
            currentPosition = (currentPosition + 1) % images.length;
        }, 3000);
    }
}

// Adding interactivity
function nextSlide(images, container, currentPosition) {
    const slide = container.querySelector(".slide");
    slide.style.opacity = 0;
    
    setTimeout(() => {
        slide.style.backgroundImage = `url('${images[currentPosition]}')`;
        slide.style.opacity = 1;
    }, 1500);
}

// Start the program
start();
