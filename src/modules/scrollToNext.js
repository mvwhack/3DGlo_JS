const scrollToNext = () => {
  const scrollNext = document.querySelectorAll("a")[0];
  const scrollNextBlock = document.getElementById("service-block");

  scrollNext.addEventListener('click', (e) => {
    const blockPosition = scrollNextBlock.getBoundingClientRect().top;
    e.preventDefault();
    window.scrollBy({
      top: blockPosition,
      behavior: "smooth"
    });
  });
};

export default scrollToNext;