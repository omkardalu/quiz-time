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

  const setQuestionNumber = (currentQuestionIndex, totalQuestions) => {
    questionNumber.innerText = `${currentQuestionIndex + 1}/${totalQuestions}`;
    try{
      localStorage.setItem('currentQuestion',JSON.stringify(currentQuestionIndex));
    }catch(e){
      console.log(e);
    }
  };
  return [questionNumberContainer, setQuestionNumber];
};

export default questionNumberElement;