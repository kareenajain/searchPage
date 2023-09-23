const divs = document.querySelectorAll(".category");
const suggestionList = document.getElementById("suggestionList");
const dropdownMenu = document.getElementById("suggestionList");
const userInput = document.getElementById("searchInput");

userInput.addEventListener("input", ()=> {

    function filterSuggestions() {
        const searchText = userInput.value.trim().toLowerCase();
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
})


// const suggestions = divs.map((div) => {
//     const divHeadings = div.querySelector("h2").innerText;
//     return(divHeadings)
// }
// )
// const headings = divHeadings.forEach((div)=> {
//     const li = document.createElement("li");
//     li.textContent = suggestion;
//     suggestionList.appendChild(li);

// })
// )




