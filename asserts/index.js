import element from './elements.js';
// landing page
const quiz = (page) => {
  const footer = element({
    element:'footer',
    className:'footer',
    children:'Made with 💗 by Omkar'
  });

  const quizContainer = element({
    element: 'div',
    className: 'quiz-container',
    id: 'quiz-container',
    children: page,
  });
  
  document.body.append(quizContainer,footer);
};
export default quiz;

// quiz page



// results page