import {
  animate
} from './helpers';

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const modalContent = modal.querySelector('.popup-content');

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = 'none';
    }
  });

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (screen.width < 768) {
        modal.style.display = 'block';
      } else {
        modal.style.display = 'block';
        animate({
          duration: 500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modalContent.style.top = (25 * progress) + '%';
          }
        });
      }

    });
  });
};

export default modal;