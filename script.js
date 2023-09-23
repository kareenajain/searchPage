const userInput = document.getElementById("searchInput");
userInput.addEventListener("input", function () {
   

    const searchText = userInput.value.trim().toLowerCase();
    const divs = document.querySelectorAll(".category");
    const suggestionList = document.getElementById("suggestionList");
    const dropdownMenu = document.getElementById("suggestionList");

    suggestionList.innerHTML ="";
    
    const suggestions = ["Category One", "Category Two", "Category Three", "Category Four", "Special Category Five", "Special Category Six"];
    


    const filteredSuggestions = suggestions.filter((suggestion) => 
        suggestion.toLowerCase().includes(searchText)
    );


    filteredSuggestions.forEach(function(suggestion) {
        const li = document.createElement("li");
        li.textContent = suggestion;
        suggestionList.appendChild(li);
        li.addEventListener("click", (e)=> {
            document.getElementById("searchInput").value = suggestion;
            dropdownMenu.style.display = "none";
            filterSuggestions();
            
            
        })
    });
   
    function filterSuggestions() {
        const searchText = document.getElementById("searchInput").value.trim().toLowerCase();
        divs.forEach(function(div){
            const heading = div.querySelector("h2");
            const headingText = heading.textContent.toLowerCase();

            if(headingText.includes(searchText)) {
                div.style.display ="block";
            }
            else {
                div.style.display = "none";
            }
        });
    }
    filterSuggestions();
});

