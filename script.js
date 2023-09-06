const moviesQuiz = [{
    "question":"Who got the first Oscar award in India?",
    "options": {
        "Anil Kapoor":false,
        "AR Rahman":false,
        "Bhanu Athaiya":true,
        "None of these":false
    }},
    {
        "question":"Who is known as the Father of Indian cinema?",
        "options": {
        "Dhundiraj Govind Phalke":true,
        "Charan Singh":false,
        "Raja Lalith Rai":false,
        "Balram Naidu":false
    }},
    {
        "question":"Which actor has won the most national awards in India?",
        "options": {
        "Amitabh Bachchan":false,
        "Shah Rukh Khan":true,
        "Rajanikant":false,
        "None of these":false
    }},
    {
        "question":"Which was the first Color movie in India?",
        "options": {
        "Kisan Kanya":true,
        "Alam Ara":false,
        "Raja Harishchandra":false,
        "None of these":false
    }},
    {
        "question":"Which was the first Indian movie to win an Oscar?",
        "options": {
        "Slumdog Millionaire":false,
        "Mother India":true,
        "Deewana":false,
        "None of these":false
    }},

]

const scienceQuiz = [{
    "question":" Which animal lays eggs?",
    "options": {
        "Dog":false,
        "Cat":false,
        "Duck":true,
        "Sheep":false
    }},
    {
        "question":"All animals need food, air, and ____ to survive.",
        "options": {
        "Housw":false,
        "Water":true,
        "Chocolates":false,
        "Fruits":false
    }},
    {
        "question":"What is Earth's only natural satellite?",
        "options": {
        "Moon":true,
        "Sun":false,
        "Venus":false,
        "Mars":false
    }},
    {
        "question":"Which organ covers the entire body and protects it?",
        "options": {
        "Liver":false,
        "Heart":false,
        "Skin":true,
        "Brain":false
    }},
    {
        "question":"Which part of the bird lets it fly high in the sky?",
        "options": {
        "Beak":false,
        "Feet":false,
        "Wings":true,
        "Claws":false
    }},
]

const historyQuiz = [{
    "question":"Which Gupta emperor was an expert Veena player?",
    "options": {
        "Sri Gupta":false,
        "Samudragupta":true,
        "Chandragupta":false,
        "Kumargupta":false
    }},
    {
        "question":"With which among the following Vedas, the Shatapatha Brahmana is related to?",
        "options": {
        "Rigveda":false,
        "Yajurveda":true,
        "Samaveda":false,
        "Atharvaveda":false
    }},
    {
        "question":"Sarnath is associated with which aspect of Buddha’s life?",
        "options": {
        "Birth":false,
        "Residence":false,
        "First sermon":true,
        "Death":false
    }},
    {
        "question":"Which of the following kings was the last ruler of the Shunga dynasty?",
        "options": {
        "Agnimitra":false,
        "Devabhuti":true,
        "Brihadratha":false,
        "Pushyamitra shunga":false
    }},
    {
        "question":"King Kharvela belonged to which of the following sect?",
        "options": {
        "Buddhism":false,
        "Jainism":true,
        "Brahmanism":false,
        "Shaivism":false
    }},
]

const sportsQuiz = [{
    "question":"Which among the following team was first winner of “World Cup Hockey?",
    "options": {
        "Spain":false,
        "France":false,
        "UK":false,
        "Pakistan":true
    }},
    {
        "question":"When was the first Winter Olympics held?",
        "options": {
        "1899":false,
        "1905":false,
        "1924":true,
        "1932":false
    }},
    {
        "question":"Who is the coach of Saina Nehwal?",
        "options": {
        "Pullela Gopichand":true,
        "Vrushali Gummadi":false,
        "Tan Kim Her":false,
        "Both A and C":false
    }},
    {
        "question":"Which team won the first FIFA Women’s World Cup?",
        "options": {
        "United States":false,
        "Sweden":false,
        "Norway":true,
        "Brazil":false
    }},
    {
        "question":"Who is the first Indian woman to win an Olympic silver medal?",
        "options": {
        "Saina Nehwal":false,
        "P.V. Sindhu":true,
        "Rituparna Das":false,
        "Tanvi Lad":false
    }},
]

const gkQuiz = [{
    "question":"What is the pH value of the human body?",
    "options": {
        "9.2 to 9.8":false,
        "7.0 to 7.8":true,
        "6.1 to 6.3":false,
        "5.4 to 5.6":false
    }},
    {
        "question":"Which of the following are called Key Industrial animals?",
        "options": {
        "Producers":false,
        "Tertiary consumers":false,
        "Primary consumers":true,
        "None":false
    }},
    {
        "question":"Elections to panchayats in state are regulated by",
        "options": {
        "Gram panchayat":false,
        "Nagar Nigam":false,
        "Election Commission of India":false,
        "State Election Commission":true
    }},
    {
        "question":"Which of the following Himalayan regions is called Shivalik's?",
        "options": {
        "Upper Himalayas":false,
        "LOwer Himalayas":false,
        "Outer Himalayas":true,
        "Inner Himalayas":false
    }},
    {
        "question":"Right to emergency medical aid is a",
        "options": {
        "Legal Right":false,
        "Illegal Right":false,
        "Constitutional Right":false,
        "Fundamental Right.":true
    }},
]


function displayMoviesData () {

    clearAll();

    // const dataContainer = document.getElementById("data-container");

    moviesQuiz.forEach((quizItem, index) =>{
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `
            <p>Question ${index + 1}: ${quizItem.question}</p>
            <ul>
                ${Object.keys(quizItem.options).map(option => `
                    <li> <input type="radio" name="${quizItem.question}" onclick=${selectedAnswer(option)}>${option}</input></li>
                `).join('')}
            </ul>
        `;
        document.getElementById("data-container").appendChild(questionDiv);
    });
}


function displayScienceData () {

    clearAll();
    
    // const dataContainer = document.getElementById("data-container");

    scienceQuiz.forEach((quizItem, index) =>{
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `
            <p>Question ${index + 1}: ${quizItem.question}</p>
            <ul>
                ${Object.keys(quizItem.options).map(option => `
                    <li> <input type="radio" name="${quizItem.question}">${option}</input></li>
                `).join('')}
            </ul>
        `;
        document.getElementById("data-container").appendChild(questionDiv);
    });
}


function displayHistoryData () {

    clearAll();

    // const dataContainer = document.getElementById("data-container");

    historyQuiz.forEach((quizItem, index) =>{
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `
            <p>Question ${index + 1}: ${quizItem.question}</p>
            <ul>
                ${Object.keys(quizItem.options).map(option => `
                    <li> <input type="radio" name="${quizItem.question}">${option}</input></li>
                `).join('')}
            </ul>
        `;
        document.getElementById("data-container").appendChild(questionDiv);
    });
}


function displaySportsData () {

    clearAll();

    const dataContainer = document.getElementById("data-container");

    sportsQuiz.forEach((quizItem, index) =>{
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `
            <p>Question ${index + 1}: ${quizItem.question}</p>
            <ul>
                ${Object.keys(quizItem.options).map(option => `
                    <li> <input type="radio" name="${quizItem.question}">${option}</input></li>
                `).join('')}
            </ul>
        `;
        dataContainer.appendChild(questionDiv);
    });
}


function displayGKData () {

    clearAll();

    // const dataContainer = document.getElementById("data-container");

    gkQuiz.forEach((quizItem, index) =>{
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("questions");
        questionDiv.innerHTML = `
            <p>Question ${index + 1}: ${quizItem.question}</p>
            <ul>
                ${Object.keys(quizItem.options).map(option => `
                    <li> <input type="radio" name="${quizItem.question}">${option}</input></li>
                `).join('')}
            </ul>
        `;
        document.getElementById("data-container").appendChild(questionDiv);
    });
}


function clearAll(){
    let QA = document.getElementById("data-container");
    QA.innerHTML = "";
   
}
   
// --------decalring variables here--->
//let row = document.querySelector(".row");



let scoreCard = document.querySelector(".scoreCard");
let score = 0;


// let showScore =() => {
    
//     //row.innerHTML = "";
//     scoreCard.textContent = `You Scored ${score} out of 5`;
//     displayAlert("You have completed this quiz!");

// }

// console.log(options.spain);
function checkAnswer() {

    window.location.href = "submit.html";
    // let selectedoption = 
    // if (selectedoption == true) {
    //     score++;
    // }
    // showScore();    
}



// function selectedAnswer(option) {
//     console.log(option)
// }








