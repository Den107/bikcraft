export function isWebp() {
  function testWebP(callback) {

    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  testWebP(function (support) {

    let className = support === true ? 'webp' : 'no-webp'
    document.documentElement.classList.add(className)
  });
}

export function burgerMenu() {
  const menu = document.querySelector('.menu__body')
  const menuBtn = document.querySelector('.menu__icon')

  const body = document.body

  if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active')
      menuBtn.classList.toggle('active')
      body.classList.toggle('lock')
    })
  }

  function scroll() {
    menu.querySelectorAll('.menu__link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active')
        menuBtn.classList.remove('active')
        body.classList.remove('lock')
      })
    })

    const anchors = document.querySelectorAll('a[href*="#"]')
    anchors.forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substring(1)

        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    })
  }

  // scroll()
}






