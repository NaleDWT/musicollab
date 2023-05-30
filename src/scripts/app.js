console.info('coucou');

  //Sticky menu

  const nav = document.querySelector(".menu");
  const header = document.querySelector(".headcontainer");
  const sticky = nav.offsetTop;
  window.onscroll = function() {sticker()};
  function sticker() {
     if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky")
        header.classList.add("sticky")
     } else {
        nav.classList.remove("sticky");
        header.classList.remove("sticky");
     }
  }