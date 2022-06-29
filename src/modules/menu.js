const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const scrollNext = document.querySelectorAll("a")[0];
  const scrollNextBlock = document.getElementById("service-block");

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  menuBtn.addEventListener('click', handleMenu);
  closeBtn.addEventListener('click', handleMenu);

  const scroll = (step) => {
    window.scrollBy({
      top: step,
      behavior: "smooth"
    });
  };

  menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', (e) => {
      const menuAttr = menuItem.getAttribute('href');
      const stepMenu = document.querySelector(menuAttr).getBoundingClientRect().top;
      
      e.preventDefault();
      scroll(stepMenu);
      handleMenu();
    });
  });

  scrollNext.addEventListener('click', (e) => {
    const blockPosition = scrollNextBlock.getBoundingClientRect().top;
    e.preventDefault();
    scroll(blockPosition);
  });

};

export default menu;