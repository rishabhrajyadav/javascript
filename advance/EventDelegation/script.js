const tab = document.querySelector(".tabs")
const gallery = document.querySelectorAll(".images")

tab.addEventListener("click",(e) => {
    //console.log(e.target.dataset.category);
    if(event.target.dataset.category !== undefined){
        filterSearch(e.target.dataset.category);
    }
})

const filterSearch = (value) => {
  gallery.forEach((curElem) => {
    if(curElem.dataset.category == value){
        console.log(curElem.dataset.category);
        curElem.style.display = "block";
    }else if (value === "all"){
        curElem.style.display = "block";
    }
    else{
        curElem.style.display = "none";
    }
   
  })
}