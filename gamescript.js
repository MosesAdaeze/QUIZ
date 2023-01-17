const startButton = document.getElementById('start-btn')
const quizContainerElement = document.getElementById('container')
const nextButton = document.getElementById('next-btn')
const questionContainer = document.getElementById("question"); //call question id
const answerButtonsElement = document.getElementById('answer-buttons')



let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => { //nextbutton to move to nextquestion
    currentQuestionIndex++
    setNextQuestion()
  })



function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    // shuffledQuestions = question.sort(() => Math.random() - .5)
    // currentQuestionIndex = 0
    quizContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    // showQuestion(shuffledQuestions[currentQuestionIndex])//show question call element id.
}

function showQuestion(question) {
    questionElement.innerText = question.question //allows quetion con to show question
    question.answers.forEach(answer => { //look through answers
        const button =document.createElement('button') //create a button
        button.innerText = answer.text
        button.classList.add('btn')//add a button class
        if (answer.correct) { //checking correct answers
          button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)//add btn element
    });
}

// reset question
function resetState() {
    // clearStatusClass(document.body)
    nextButton.classList.add('hide') //hide next button (65)
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }
  
const question = [
    {
      question: 'What is 2 + 2',
      answers: [
        { text: '4', correct: true },
        { text: '22', correct: false },
        { text: '15', correct: false },
        { text: 'none', correct: false }
      ]
    },

    {
        question: 'What is 8 + 8',
        answers: [
          { text: '4', correct: true },
          { text: '22', correct: false },
          { text: '16', correct: true },
          { text: 'none', correct: false }
        ]
      },

      {
        question: 'What is 2 + 2',
        answers: [
          { text: '4', correct: true },
          { text: '22', correct: false },
          { text: '15', correct: false },
          { text: 'none', correct: false }
        ]
      },

      {
        question: 'What is 2 + 2',
        answers: [
          { text: '4', correct: true },
          { text: '22', correct: false },
          { text: '15', correct: false },
          { text: 'none', correct: false }
        ]
      }
]