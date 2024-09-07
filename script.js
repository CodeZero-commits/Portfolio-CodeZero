const hero = document.getElementById("hero");
const parallaxImages = document.querySelectorAll(".parallax-image");

hero.addEventListener("mousemove", (e) => {
  const { offsetWidth: width, offsetHeight: height } = hero;
  const { clientX: mouseX, clientY: mouseY } = e;

  const centerX = width / 2;
  const centerY = height / 2;

  const moveX = (mouseX - centerX) / centerX;
  const moveY = (mouseY - centerY) / centerY;

  parallaxImages.forEach((image) => {
    const speed = parseFloat(image.getAttribute("data-speed") || 0.05);
    const x = moveX * speed * 100;
    const y = moveY * speed * 100;
    image.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// Restablecer posición al salir del hero
hero.addEventListener("mouseleave", () => {
  parallaxImages.forEach((image) => {
    image.style.transform = "translate(0px, 0px)";
  });
});

const carousel = document.querySelector(".proyectos-carousel");
const cards = document.querySelectorAll(".proyectos-card");
const leftArrow = document.querySelector(".carousel-arrow-left");
const rightArrow = document.querySelector(".carousel-arrow-right");

let currentIndex = 0;

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth;
  const gap = 20; // El mismo valor que en el CSS
  carousel.style.transform = `translateX(-${
    currentIndex * (cardWidth + gap)
  }px)`;
}

leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

rightArrow.addEventListener("click", () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

// Ajustar la visibilidad de las flechas
function updateArrowVisibility() {
  leftArrow.style.display = currentIndex === 0 ? "none" : "flex";
  rightArrow.style.display =
    currentIndex === cards.length - 1 ? "none" : "flex";
}

updateArrowVisibility();

// Actualizar visibilidad de flechas después de cada clic
leftArrow.addEventListener("click", updateArrowVisibility);
rightArrow.addEventListener("click", updateArrowVisibility);

// Manejar redimensionamiento de ventana
window.addEventListener("resize", updateCarousel);

//Start Header
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
