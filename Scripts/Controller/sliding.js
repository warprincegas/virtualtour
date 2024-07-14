
export function slideFunction() {
  const nextEl = document.querySelector('.next')
  const prevEl = document.querySelector('.prev')
  const slidingImages = document.querySelectorAll('.sliding-images img')
  const img = document.querySelector('.sliding-images img')

  console.log(slidingImages.length);
  
  let currentImg = 1;
  let timeout;
  
  nextEl.addEventListener('click', () => {
    currentImg++
    clearTimeout(timeout);
    updateImage();
  });
  
  prevEl.addEventListener('click', () => {
    currentImg--;
    clearTimeout(timeout);
    updateImage();
  });

  updateImage();
  
  function updateImage() {
    if (currentImg > slidingImages.length) {
      currentImg = 1;
    } else if (currentImg < 1){
      currentImg = slidingImages.length;
    };

    slidingImages.forEach(elem => {
      elem.style.transform = `translateX(-${(currentImg - 1) * img.width }px)`;
    });

    timeout = setTimeout(() => {
      currentImg++;
      updateImage();
    },3000);
  };
};

export function slideFunctionPop() {
  const nextEl = document.querySelector('.next-pop')
  const prevEl = document.querySelector('.prev-pop')
  const slidingImages = document.querySelectorAll('.sliding-images-pop img')
  
  const img = document.querySelector('.sliding-images-pop img')

  console.log(slidingImages.length);
  
  let currentImg = 1;
  let timeout;
  
  nextEl.addEventListener('click', () => {
    currentImg++
    clearTimeout(timeout);
    updateImage();
  });
  
  prevEl.addEventListener('click', () => {
    currentImg--;
    clearTimeout(timeout);
    updateImage();
  });

  updateImage();
  
  function updateImage() {
    if (currentImg > slidingImages.length) {
      currentImg = 1;
      
    } else if (currentImg < 1){
      currentImg = slidingImages.length;
    };

    slidingImages.forEach(elem => {
      elem.style.transform = `translateX(-${(currentImg - 1) * window.innerWidth}px)`;
    });

    timeout = setTimeout(() => {
      currentImg++;
      updateImage();
    },3000);
  };
};