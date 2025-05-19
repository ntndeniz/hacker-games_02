    document.addEventListener('DOMContentLoaded', function() {
      // Slider Fonksiyonelliği
      const slides = document.querySelector('.slides');
      const slideItems = document.querySelectorAll('.slide');
      const prevBtn = document.querySelector('.prev-slide');
      const nextBtn = document.querySelector('.next-slide');
      const dotsContainer = document.querySelector('.slide-dots');
      let currentIndex = 0;
      const slideCount = slideItems.length;

      // Dot indicator'ları oluştur
      slideItems.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slide-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
      });

      const dots = document.querySelectorAll('.slide-dot');

      function updateSlider() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Dot'ları güncelle
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentIndex);
        });
      }

      function goToSlide(index) {
        currentIndex = index;
        updateSlider();
      }

      function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
      }

      function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
      }

      nextBtn.addEventListener('click', nextSlide);
      prevBtn.addEventListener('click', prevSlide);

      // Otomatik slider geçişi
      let slideInterval = setInterval(nextSlide, 5000);

      // Slider'a hover olunca otomatik geçişi durdur
      const slider = document.querySelector('.slider');
      slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
      slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
      });

      // Tüm linkleri index.html'ye yönlendir
      document.querySelectorAll('a').forEach(link => {
        if (link.getAttribute('href') === '#') {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'index.html';
          });
        }
      });
    });