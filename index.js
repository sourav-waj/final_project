
// interactive accordian

const accordians = document.querySelectorAll(".accordian");

accordians.forEach(accordian => {
    accordian.addEventListener("click", () => {
        accordian.classList.toggle("active")
    })
})



// API

fetch('https://dog.ceo/api/breeds/list/all').then(function(response){

return response.json()
})
.then(function(data){
    console.log(data)
})


async function start() {
    const response = await fetch(url);
    const data = await response.json();
    createBreedList(data.message)
}

// data
// async function dogapi() {
//     const response = await fetch('https://dog.ceo/api/breeds/list/all');
//     const data = await response.json();
//     return data.results;
// }