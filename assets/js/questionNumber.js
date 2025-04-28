import element from './elements.js';

const questionNumberElement = () => {

  const questionNumber = element({
    element: 'h1',
    className: 'question-number',
    children: '1/25',
  });
  const questionNumberContainer = element({
    element: 'div',
    className: 'question-number-container',
    children: questionNumber,
  });
  const setQuestionNumber = (currentQuestion, totalQuestions) => {
    questionNumber.innerText = `${currentQuestion}/${totalQuestions}`;
  };
  return [questionNumberContainer, setQuestionNumber];
};

export default questionNumberElement;