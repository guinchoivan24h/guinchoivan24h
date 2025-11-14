    <!-- Script para o Slider -->
    
    const slider = document.getElementById('imageSlider');
    const slides = slider.children;
    const nav = document.getElementById('sliderNav');
    let currentIndex = 0;

    // Criar pontos de navegação
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('button');
      dot.addEventListener('click', () => goToSlide(i));
      nav.appendChild(dot);
    }

    function updateNav() {
      const dots = nav.querySelectorAll('button');
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    function goToSlide(index) {
      currentIndex = index;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateNav();
    }

    // Auto slide a cada 4 segundos
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      goToSlide(currentIndex);
    }, 4000);

    // Iniciar
    updateNav();
