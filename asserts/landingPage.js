import element from "./elements.js";
import quiz from "./index.js";
const createLandingPage = () => {
  const image = element({
    element: 'img',
    className: 'quiz-logo',
    src: './asserts/images/logo.svg',
  });

  const button = element({
    element: 'button',
    className: 'start-button',
    id: 'start-button',
    children: 'Start Now >>>',
  });

  button.onclick = () => {
    location.href = './quiz.html'
  };

  const page = element({
    element: 'main',
    className: 'landing-page',
    id: 'landing-page',
    children: [image, button],
  });

  quiz(page);
};

createLandingPage();