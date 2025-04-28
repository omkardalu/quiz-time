import element from "./elements.js  ";
import quiz from "./index.js";
import questions from "./data.js";
const createResultPage = () => {

  const image = element({
    element: 'img',
    className: 'quiz-logo-land-pg',
    src: './asserts/images/logo.svg',
  });

  const score = JSON.parse(localStorage.getItem('score')) || 0;
  const totalQuestions = questions.length;
  const resultText = `You scored ${score} out of ${totalQuestions}`;

  const result = element({
    element: 'h1',
    className: 'result-text',
    children: resultText,
  });

  const securedBar = element({
    element: 'div',
    className: 'secured',
  });

  securedBar.style.width = `${(score / totalQuestions) * 100}%`;

  const resultBar = element({
    element: 'div',
    className: 'result-bar',
    children: [securedBar,result],
  });


  const button = element({
    element: 'button',
    className: 'start-button',
    id: 'start-button',
    children: 'Play Again >>>',
  });

  button.onclick = () => {
    location.href = './index.html'
  };

  const page = element({
    element: 'main',
    className: 'result-page',
    id: 'result-page',
    children: [image, resultBar, button],
  });

  quiz(page);
  const scoreElement = document.getElementById('score-board');

};
createResultPage();
localStorage.setItem('score', JSON.stringify(0));