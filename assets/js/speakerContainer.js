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
  speaker.style.display = 'none';
  
  const mute = element({
    element: 'img',
    className: 'quiz-speaker-mute',
    src: './assets/images/speaker-mute.svg',
  });
  
  const audio = element({
    element:'audio',
    className: 'quiz-audio',
    src: './assets/audio/music.mp3',
  }) 
  audio.loop = true;
  const handlespeaker = () => {
    const speakerElement = document.querySelector('.quiz-speaker-sound');
    const muteElement = document.querySelector('.quiz-speaker-mute');
    if (speakerElement.style.display === 'none') {
      speakerElement.style.display = 'block';
      muteElement.style.display = 'none';
      audio.play(); 
    } else {
      speakerElement.style.display = 'none';
      muteElement.style.display = 'block';
      audio.pause();
    }
  }
  speaker.onclick = () => {
    handlespeaker();
  };
  mute.onclick = () => {
    handlespeaker();
  }
  return element({
    element: 'header',
    className: 'quiz-header', 
    children: [logo, speaker, mute,audio],
  });
};

export default speakerContainer;