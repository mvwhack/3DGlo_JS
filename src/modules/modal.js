const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const modalClose = modal.querySelector('.popup-close');
  const modalContent = modal.querySelector('.popup-content');

  let top = 25;
  let modalPosition;
  let idAnimation;

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

  modalClose.addEventListener('click', () => {
    modalContent.style.top = '';
    modal.style.display = 'none';
  });

};

export default modal;