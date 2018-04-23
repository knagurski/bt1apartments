document.addEventListener('DOMContentLoaded', () => {
  const productionsGallery = document.querySelector('.productions__gallery');

  if (productionsGallery) {
    if (window.IntersectionObserver) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.filter(entry => entry.isIntersecting).forEach(({target}) => {
          observer.unobserve(target)

          loadGallery()
        })
      }, {rootMargin: '30px'})

      observer.observe(productionsGallery)
    } else {
      loadGallery()
    }
  }

  function loadGallery () {
    new Flickity(
      productionsGallery,
      {
        imagesLoaded: true,
        adaptiveHeight: true,
        wrapAround:true,
        lazyLoad: true,
        autoPlay: true
      }
    );
  }
}, false)
