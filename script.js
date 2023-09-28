const categories = document.querySelectorAll(".category");
const suggestionList = document.getElementById("suggestionList");
const userInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("search-icon");
const searchForm = document.querySelector(".search-area");
let selectedSuggestionIndex = -1;
let isMouseOver = false;
let keyIsPressed = false;

// Prevent form submission
searchForm.addEventListener('submit', function (e) {
    e.preventDefault(); 
});




// filters category divs
function filterCategories() {
    suggestionList.innerHTML = "";
    suggestionList.classList.remove("scrollbar")
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
    selectedSuggestionIndex = -1;
}


// dropdown scroll
function scrollIntoView() {
    const suggestions = suggestionList.children;
    if(selectedSuggestionIndex>=0 && selectedSuggestionIndex < suggestions.length) {
        const selectedSuggestion = suggestions[selectedSuggestionIndex];
        selectedSuggestion.scrollIntoView({ behavior: "smooth", block: "nearest"});
    }
}




// Handle arrow key and Enter key events
function handleKeyEvents(e) {
    e.preventDefault();

    if(e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter") {
        e.preventDefault();
        if(e.key === "ArrowDown") {
            selectedSuggestionIndex++;
            highlightSuggestion();
            scrollIntoView();
        } else if (e.key === "ArrowUp") {
            selectedSuggestionIndex--;
            highlightSuggestion();
            scrollIntoView();
        } else if (e.key === "Enter") {
            if (selectedSuggestionIndex > 0 && selectedSuggestionIndex < suggestionList.children.length) {
                const selectedSuggestion =suggestionList.children[selectedSuggestionIndex];
                userInput.value = selectedSuggestion.textContent;
                filterCategories();
                suggestionList.classList.remove("scrollbar");
                selectedSuggestionIndex = -1;
            }
        }
    }
    else {
        filterSuggestions();
    }
}

function highlightSuggestion() {
    const suggestions = suggestionList.children;
    for(let i=0; i<suggestions.length; i++) {
        if(i=== selectedSuggestionIndex) {
            suggestions[i].classList.add("highlighted");
        } 
        else {
            suggestions[i].classList.remove("highlighted");
        }
    }
}


// Handle mouse movements
function handleMouseEvents() {
const items = suggestionList.getElementsByTagName('li');
for(let i=0; i<items.length;i++) {
    items[i].addEventListener("mouseenter", function() {
        if(!keyIsPressed){
            this.classList.add('highlighted')
        } 
    });
    items[i].addEventListener("mouseleave", function() {
        this.classList.remove('highlighted')
    });
}
}




// Calling Functions

searchIcon.addEventListener("click", filterCategories);

suggestionList.addEventListener("mousemove", function() {
        handleMouseEvents();
})

userInput.addEventListener("keyup", function(e) {
    keyIsPressed = false;
     handleKeyEvents(e);
 })








