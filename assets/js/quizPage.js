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
  const [options, setOptions, showAnswer] = optionsElement();
  const [timer, setTimer, resetTimer, stopTimer] = timerElement();
  const [score, updateScore] = scoreElement();

  let currentQuestionIndex = 0;
  localStorage.setItem('score', JSON.stringify(0));
  const setData = async () => {
    const {
      question,
      options,
      answer,
    } = questions[currentQuestionIndex];

    setQuestionNumber(currentQuestionIndex + 1, questions.length);
    setQuestion(question);
    setOptions(options, answer, stopTimer, updateScore);
    await setTimer();
    showAnswer(answer);
  };

  setData();

  const goToNext = async (event) => {
    event.target.innerText = currentQuestionIndex < questions.length - 2 ? 'Next >' : 'Finish ✅';
    if (event.target.innerText === 'Finish ✅') {
      stopTimer();
      location.href = './result.html';
    }
    currentQuestionIndex++;
    resetTimer();
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
