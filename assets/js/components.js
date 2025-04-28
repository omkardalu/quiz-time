import questions from './data.js';
import element from './elements.js';

const questionElement = () => {

  const question = element({
    element: 'h1',
    className: 'question',
    children: 'What is the capital of France?',
  });

  const setQuestion = (q) => {
    question.innerText = q;
  };
  return [question, setQuestion];
};

const scoreElement = () => {
  const score = element({
    element: 'div',
    id: 'score-board',
    className: 'score-board',
    children:`score: 0/${questions.length}`,
  });
  
  const updateScore = () => {
    let data;
    try{
      data = JSON.parse(localStorage.getItem('score'));
      localStorage.setItem('score',JSON.stringify(data + 1));
    }catch(e){
      console.log(e);
    }
    score.innerText = `score: ${data +1 }/${questions.length}`;
    return score;
  };
  return [score, updateScore];
};

const next = element({
  element: 'button',
  className: 'next-button',
  children: 'Next >',
});

export default { questionElement, scoreElement, next };