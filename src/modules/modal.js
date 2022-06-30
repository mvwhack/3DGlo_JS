const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const modalContent = modal.querySelector('.popup-content');

  let top = 25;
  let modalPosition;
  let idAnimation;

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = 'none';
      modalContent.style.top = '';
    }
  });

  const moveModal = () => {
    modalPosition += 3;
    idAnimation = requestAnimationFrame(moveModal);

    if (modalPosition < top) {
      modalContent.style.top = `${modalPosition}%`;
    } else {
      cancelAnimationFrame(idAnimation);
    }

  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (screen.width < 768) {
        modal.style.display = 'block';
      } else {
        modal.style.display = 'block';
        modalContent.style.top = `-100%`;
        modalPosition = -100;
        moveModal();
      }

    });
  });
};

export default modal;