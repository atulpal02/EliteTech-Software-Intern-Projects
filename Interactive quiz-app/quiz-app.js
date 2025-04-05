
const quiz = [
    {
        question: "What is the capital of France?",
        ans1text: "Berlin",
        ans2text: "London",
        ans3text: "Paris",      
        ans4text: "Madrid",
        answer: "Paris",
    },
    {
        question: "Which is the largest planet in our solar system?",
        ans1text: "Earth",
        ans2text: "Mars",
        ans3text: "Jupiter",
        ans4text: "Saturn",
        answer: "Jupiter",
    },
    {
        question: "What is the chemical symbol for gold?",
        ans1text: "Au",
        ans2text: "Ag",
        ans3text: "Fe",
        ans4text: "Hg",
        answer: "Au",
    },
    {
        question: "What is the speed of light?",
        ans1text: "300,000 km/s",
        ans2text: "150,000 km/s",
        ans3text: "450,000 km/s",
        ans4text: "600,000 km/s",
        answer: "300,000 km/s",
    },
    {
        question: "What is the largest mammal in the world?",
        ans1text: "Elephant",
        ans2text: "Blue Whale",
        ans3text: "Giraffe",
        ans4text: "Hippopotamus",
        answer: "Blue Whale",
    },
    {
        question: "What is the smallest country in the world?",
        ans1text: "Vatican City",
        ans2text: "Monaco",
        ans3text: "San Marino",
        ans4text: "Liechtenstein",
        answer: "Vatican City",
    },
    {
        question: "What is the currency of Japan?",
        ans1text: "Yen",
        ans2text: "Won",
        ans3text: "Dollar",
        ans4text: "Euro",
        answer: "Yen",
    },
    {
        question: "What is the largest ocean in the world?",
        ans1text: "Atlantic Ocean",
        ans2text: "Indian Ocean",
        ans3text: "Arctic Ocean",
        ans4text: "Pacific Ocean",
        answer: "Pacific Ocean",
    },
    {
        question: "What is the hardest natural substance on Earth?",
        ans1text: "Diamond",
        ans2text: "Gold",
        ans3text: "Iron",
        ans4text: "Platinum",
        answer: "Diamond",
    },
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Donald Trump",
    },{
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    }
]
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);  
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    // console.log(checkedAns.nextElementSibling.textContent);
    if( checkedAns === null){
        alert("Please select an answer");
    }else{
        if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        if( currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
});
