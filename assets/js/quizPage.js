import element from './elements.js';
import components from './components.js'
import speakerContainer from './speakerContainer.js';
import timerElement from './timer.js';
import optionsElement from './options.js';
import questionNumberElement from './questionNumber.js';
import questions from './data.js';
import quiz from './index.js';

const quizPage = () => {
  const { questionElement, scoreElement, next } = components;
  const [question, setQuestion] = questionElement();
  const [questionNumber, setQuestionNumber] = questionNumberElement();
  const [options, handleOptions, showAnswer] = optionsElement();
  const [timer, setTimer, resetTimer, stopTimer] = timerElement();
  const [score, updateScore] = scoreElement();

  const getCurrentIndex = () => {
    try {
      const isAnswered = JSON.parse(localStorage.getItem('isAnswered'));
      const currentQuestion = JSON.parse(localStorage.getItem('currentQuestion')) || 0;
      if (isAnswered) {
        localStorage.setItem('isAnswered', false);
        currentQuestion  === questions.length - 1 ? location.href = './result.html' : null;
        return currentQuestion + 1;
      }
      return currentQuestion;
    } catch (e) {
      console.log(e);
    }
  };

  let currentQuestionIndex = getCurrentIndex();

  const setData = async () => {
    const {
      question,
      options,
      answer,
    } = questions[currentQuestionIndex];
    setQuestionNumber(currentQuestionIndex, questions.length);
    setQuestion(question);
    handleOptions(options, answer, stopTimer, updateScore);
    await setTimer();
    showAnswer(answer);
  };

  setData();

  const goToNext = async (event) => {
    if (event.target.innerText === 'Finish ✅') {
      stopTimer();
      location.href = './result.html';
    }
    event.target.innerText = currentQuestionIndex < questions.length - 2 ? 'Next >' : 'Finish ✅';
    resetTimer();
    currentQuestionIndex++;
    await setData();
  };

  next.addEventListener('click', goToNext);

  const page = element({
    element: 'main',
    className: 'quiz-page',
    id: 'quiz-page',
    children: [score, speakerContainer(), questionNumber, question, timer, options, next],
  });

  quiz(page);
};

quizPage();
