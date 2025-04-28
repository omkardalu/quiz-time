import element from './elements.js';

const optionsElement = () => {

  const option1 = element({
    element: 'div',
    id: 'option1',
    className: 'option',
    children: 'Option 1',
  });

  const option2 = element({
    element: 'div',
    id: 'option2',
    className: 'option',
    children: 'Option 2',
  });

  const option3 = element({
    element: 'div',
    id: 'option3',
    className: 'option',
    children: 'Option 3',
  });

  const option4 = element({
    element: 'div',
    id: 'option4',
    className: 'option',
    children: 'Option 4',
  });

  const options = element({
    element: 'div',
    className: 'options-container',
    children: [option1, option2, option3, option4]
  });

  const showAnswer = (answer) => {
    const optionElements = document.querySelectorAll('.option');
    for (const option of optionElements) {
      if (option.innerText === answer) {
        option.className = 'option correct';
      }
    }
  };

  const setOptions = (optionsArray, answer, stopTimer, updateScore) => {
    const optionElements = [option1, option2, option3, option4];

    optionElements.forEach((option, index) => {
      option.innerText = optionsArray[index];
      option.className = 'option';

      const handleClick = (event) => {
        stopTimer();
        if (event.target.innerText === answer) {   
          updateScore();
          event.target.className = 'option correct';
        } else {
          event.target.className = 'option wrong';
          showAnswer(answer);
        }
        option.removeEventListener('click', handleClick);
      }
      option.addEventListener('click', handleClick);

    });
  };

  return [options, setOptions, showAnswer];
};

export default optionsElement;