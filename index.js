
// interactive accordian

const accordians = document.querySelectorAll(".accordian");

accordians.forEach(accordian => {
    accordian.addEventListener("click", () => {
        accordian.classList.toggle("active")
    })
})


//Load more section for shopping content section

let loadMoreButton = document.querySelector('#load');
let currentItem = 3;

loadMoreButton.onclick = () => {
    let boxes = [...document.querySelectorAll('.card')];
    for (var i = currentItem; i < currentItem + 3 && i < boxes.length; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 3;


    if (currentItem >= boxes.length){
        loadMoreButton.style.display = 'none'
    }
}
