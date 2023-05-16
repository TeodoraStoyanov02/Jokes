
const jokes = [
  {
    question: "How many developers does it take to screw in a lightbulb?",
    answer: "None. Its a hardware problem."
  },
  {
    question: "Why did the private classes break up?",
    answer: "Because they never saw each other."
  },
  {
    question: "Why did the programmer quit her job?",
    answer: "Because she didnt get arrays."
  },
  {
    question: "Why do programmers prefer dark mode?",
    answer: "Because light attracts bugs."
  }
];

const jokeQuestionElement = document.getElementById("joke-question");
const jokeAnswerElement = document.getElementById("joke-answer");
const newJokeButton = document.getElementById("new-joke-btn");


function generateRandomJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomJoke = jokes[randomIndex];
  return randomJoke;
}


function displayJoke() {
  const joke = generateRandomJoke();
  jokeQuestionElement.textContent = joke.question;
  jokeAnswerElement.textContent = joke.answer;
}


newJokeButton.addEventListener("click", displayJoke);


displayJoke();
