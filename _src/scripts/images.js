document.addEventListener('DOMContentLoaded', () => {
  const lazyLoadImages = [...document.querySelectorAll('.image--lazy')]
  const lazyLoadBgs = [...document.querySelectorAll('.bg--lazy')]

  if (window.IntersectionObserver) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.filter(entry => entry.isIntersecting).forEach(({target}) => {
        observer.unobserve(target)

        if (target.querySelector('.image--lazy')) {
          displayImage(target.querySelector('.image--lazy'))
        }

        if (target.dataset.src) {
          displayBg(target)
        }
      })
    }, {rootMargin: '30px'})

    lazyLoadImages.forEach(img => {
      const wrapper = document.createElement('div')
      wrapper.classList.add('image--lazy-wrapper')
      img.parentNode.insertBefore(wrapper, img)
      wrapper.appendChild(img)
      observer.observe(wrapper)
    })

    lazyLoadBgs.forEach(el => observer.observe(el))
  } else {
    lazyLoadImages.forEach(displayImage)
    lazyLoadBgs.forEach(displayBg)
  }

  /**
   * @param {Node} img
   */
  function displayImage (img) {
    const $img = $(img)

    $img.removeClass('image--lazy')
    if ($img.parent().is('.image--lazy-wrapper')) {
      img.parentNode.parentNode.replaceChild(img, img.parentNode)
    }
    $img.attr('src', $img.data('src'))
  }

  /**
   * @param {Node} el
   */
  function displayBg (el) {
    el.style.backgroundImage = `url(${$(el).data('src')})`
  }
}, false)
