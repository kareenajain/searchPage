const categories = document.querySelectorAll(".category");
const suggestionList = document.getElementById("suggestionList");
const userInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("search-icon");

// filters category divs
function filterCategories() {
    suggestionList.innerHTML = "";
    const searchText = userInput.value.trim().toLowerCase();
    categories.forEach((category)=> {
        const heading = category.querySelector("h2").textContent.toLowerCase();
        if(heading.includes(searchText)) {
            category.style.display ="block";
        } else {
            category.style.display = "none";
        }
    });
}   

// filters suggestion dropdown list
function filterSuggestions() {
    suggestionList.innerHTML = "";
    const searchText = userInput.value.trim().toLowerCase();
    categories.forEach((category)=> {
        const heading = category.querySelector("h2").textContent.trim();
        const headingText = heading.toLowerCase();
        if(!searchText) {
            suggestionList.innerHTML = "";
            filterCategories();
            suggestionList.classList.remove("scrollbar")
        } else if(headingText.includes(searchText)) {
           const li = document.createElement("li");
           li.textContent = heading
           li.addEventListener("click", (e)=> {
            userInput.value = heading;
            filterCategories();
            suggestionList.classList.remove("scrollbar")
           })
           suggestionList.appendChild(li)
            suggestionList.classList.add("scrollbar")

        }
    });
}

userInput.addEventListener("keyup", filterSuggestions)
searchIcon.addEventListener("click", filterCategories)



