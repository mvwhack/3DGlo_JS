const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector("menu");

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };
  
  menuBtn.addEventListener('click', handleMenu);

  menu.addEventListener('click', (e) => {

    if (e.target.closest('a') && e.target.closest('a').className === '') {
      console.dir();
      e.preventDefault();
      const menuAttr = e.target.closest('a').hash;
      const stepMenu = document.querySelector(menuAttr).getBoundingClientRect().top;

      window.scrollBy({
        top: stepMenu,
        behavior: "smooth"
      });

      handleMenu();

    } else if (e.target.closest('.close-btn')) {
      handleMenu();
    }
  });

};

export default menu;