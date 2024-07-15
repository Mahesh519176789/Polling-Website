// script.js

// poll data
let pollData = {
    question: "What is your favorite programming language?",
    options: [
        { id: 1, text: "JavaScript" },
        { id: 2, text: "Python" },
        { id: 3, text: "Java" },
        { id: 4, text: "C++" }
    ],
    results: {}
};

// render poll options
const optionsList = document.getElementById("options-list");
pollData.options.forEach((option) => {
    const optionHTML = `
        <li>
            <input type="radio" id="option-${option.id}" name="option" value="${option.id}">
            <label for="option-${option.id}">${option.text}</label>
        </li>
    `;
    optionsList.innerHTML += optionHTML;
});

// handle vote button click
const voteBtn = document.getElementById("vote-btn");
voteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedOption = document.querySelector("input[name='option']:checked");
    if (selectedOption) {
        const optionId = parseInt(selectedOption.value);
        if (pollData.results[optionId]) {
            pollData.results[optionId]++;
        } else {
            pollData.results[optionId] = 1;
        }
        renderResults();
    }
});

// render poll results
const resultsContainer = document.getElementById("results-container");
function renderResults() {
    resultsContainer.innerHTML = "";
    Object.keys(pollData.results).forEach((optionId) => {
        const resultHTML = `
            <div class="result">
                <span>${pollData.options[optionId - 1].text}:</span>
                <span>${pollData.results[optionId]} votes</span>
            </div>
        `;
        resultsContainer.innerHTML += resultHTML;
    });
}

// initialize poll results
renderResults();