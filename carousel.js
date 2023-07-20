const carousel = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const carouselItems = document.querySelectorAll('.carousel-item');
const numItems = carouselItems.length;
const itemsPerSlide = 1;
let index = 0;

prevButton.addEventListener('click', moveCarouselLeft);
nextButton.addEventListener('click', moveCarouselRight);

function moveCarouselRight(e) {
  const movement = 1;  
  index += movement * itemsPerSlide;
  if (index < 0) {
    index = numItems - itemsPerSlide;
  } else if (index >= numItems) {
    index = 0;
  }
  const transformPercentage = -(index * 100 / numItems);
  carousel.style.transform = `translateX(${transformPercentage}%)`;
}

function moveCarouselLeft(e) {
    const movement = -1;
    index += movement * itemsPerSlide;
    if (index < 0) {
      index = numItems - itemsPerSlide;
    } else if (index >= numItems) {
      index -= numItems;
    }
    const transformPercentage = -(index * 100 / numItems);
    carousel.style.transform = `translateX(${transformPercentage}%)`;
  }

function message() {
  Swal.fire({
    icon:'success',
    title:'sucesso!',
    text:'item adicionado ao carrinho',
    color:"#d40b9f"
  }
  )
}
