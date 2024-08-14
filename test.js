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
    if (!response.ok) {                 //Checks if the HTTP response status is not OK 
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();       //converts returned data into JSON format
}

// Creating a dropdown menu list of Breeds
function createBreedList(breedList) {
    const breedSelect = document.getElementById("breed");
    breedSelect.innerHTML = `
        <select onchange="loadByBreed(this.value)">     
            <option>choose a dog breed</option>
            ${Object.keys(breedList).map(breed => `<option>${breed}</option>`).join('')}
        </select>
    `;  //it attaches an onchange event handler to the dropdown and returns the selected breed as an arguement
    //converts object into array
}

// To load images for the selected breed
async function loadByBreed(breed) {
    if (breed !== "choose a dog breed") {
        try {
            const data = await fetchData(`https://dog.ceo/api/breed/${breed}/images`);
            createSlideshow(data.message);    //will return the data.message by loading the images of the selected breed
        } catch (error) {
            console.error("Failed to load breed images:", error);
        }
    }
}

// Making the webpage interactive and working
function createSlideshow(images) {
    let currentPosition = 0;
    clearInterval(timer);
    clearTimeout(deleteFirstPhotoDelay);  //Clears any existing intervals or timeouts to avoid conflicts if a new slideshow starts.x

    const slideshowContainer = document.getElementById("slideshow");
    slideshowContainer.innerHTML = `
        <div class="slide" style="background-image: url('${images[0]}')"></div>
    `;
    //Sets the inner HTML of the slideshow container to display the first image in the array of images

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


// Calls the start function to initiate the process. This starts the data fetching, creates the breed list, and sets everything in motion for user interaction.