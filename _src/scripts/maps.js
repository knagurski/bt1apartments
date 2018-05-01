document.addEventListener('DOMContentLoaded', () => {
  const lazyLoadPlaceholders = [...document.querySelectorAll('.map--lazy')]

  if (window.IntersectionObserver) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.filter(entry => entry.isIntersecting).forEach(({target}) => {
        observer.unobserve(target)

        displayMap(target.querySelector('.map--lazy'))
      })
    }, {rootMargin: '30px'})

    lazyLoadPlaceholders.forEach(placeholder => observer.observe(placeholder.parentNode))
  } else {
    lazyLoadPlaceholders.forEach(displayMap)
  }

  /**
   * @param {Node} placeholder
   */
  function displayMap (placeholder) {
    const mapFrame = document.createElement('iframe')

    mapFrame.frameBorder = 0
    mapFrame.style.border = 0
    mapFrame.allowFullscreen = true
    mapFrame.src = $(placeholder).data('src')

    placeholder.parentNode.appendChild(mapFrame)
    placeholder.parentNode.removeChild(placeholder)
  }
}, false)
