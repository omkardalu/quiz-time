import element from './elements.js';

const speakerContainer = () => {
  const logo = element({
    element: 'img',
    className: 'quiz-logo',
    src: './assets/images/logo.svg',
  });
  
  const speaker = element({
    element: 'img',
    className: 'quiz-speaker-sound',
    src: './assets/images/speaker-sound.svg',
  });
  
  const mute = element({
    element: 'img',
    className: 'quiz-speaker-mute',
    src: './assets/images/speaker-mute.svg',
  });
  
  return element({
    element: 'header',
    className: 'quiz-header',
    children: [logo, speaker],
  });
};

export default speakerContainer;