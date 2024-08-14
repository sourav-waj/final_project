
// interactive accordian

const accordians = document.querySelectorAll(".accordian"); //This will load all the elements present in the accordian class

accordians.forEach(accordian => {    //Following function will apply to all elements present in accordian class
    accordian.addEventListener("click", () => {  //Whenever the element present in accordian is clicked , the following function will work
        accordian.classList.toggle("active")
    })
})


//Loading more sections for shopping content items

let loadMoreButton = document.querySelector('#load');
let currentItem = 3;                    // the present value of currentItem is 3 and assumes that 3 items are already present there

loadMoreButton.onclick = () => {
    let boxes = [...document.querySelectorAll('.card')];   //this line selects all elements and stores them in an array
    for (var i = currentItem; i < currentItem + 3 && i < boxes.length; i++) {   
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 3;


    if (currentItem >= boxes.length){
        loadMoreButton.style.display = 'none'
    }
}


// interactive navigation bar

function myFunction() {
    var x = document.getElementById("navi");
    if (x.className === "links") {
      x.className += " responsive";
    } else {
      x.className = "links";
    }
  }