const generatebtn = document.querySelector(".generate");
const mode = document.querySelector(".mode");

const authorName = document.getElementById("author");
const quote = document.querySelector(".quote");
const body = document.body;


const url = "https://api.quotable.io/random";
let getQuote = () => {
    generatebtn.innerText = "Loading....";
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            quote.innerHTML = `<i class="fa fa-quote-left";  style = "font-size: 0.7rem"; >
                               </i> 
                                    ${data.content} 
                               <i class="fa fa-quote-right"; style = "font-size: 0.7rem"; >
                               </i>`;
            authorName.innerText = data.author;
            generatebtn.innerText = "New Quote";
        });
};

generatebtn.addEventListener("click", getQuote);

mode.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        mode.textContent = "Dark Mode";
    }
    else {
        body.classList.add("dark-mode");
        mode.textContent = "Light Mode";
    }

})
