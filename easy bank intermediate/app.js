const toggleBtn =  document.querySelector(".toggle-btn");
const closeBtn =  document.querySelector(".close-btn");
const navList =  document.querySelector(".nav-list");

toggleBtn.addEventListener("click", function(){
    navList.classList.add("show-list");
    toggleBtn.classList.add("hide-toggle");
    closeBtn.classList.add("show-close");
})

closeBtn.addEventListener("click", function(){
    navList.classList.remove("show-list");
    toggleBtn.classList.remove("hide-toggle");
    closeBtn.classList.remove("show-close");
})
