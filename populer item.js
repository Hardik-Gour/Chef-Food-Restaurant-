document.addEventListener('DOMContentLoaded', function () {
            const sliderTrack = document.querySelector('#fav-slider-track');
            const slides = document.querySelectorAll('.fav-food-slide');
            const nextBtn = document.querySelector('.fav-slider-btn.next');
            const prevBtn = document.querySelector('.fav-slider-btn.prev');

            if (!sliderTrack || !slides.length || !nextBtn || !prevBtn) {
                console.error("Slider elements not found!");
                return;
            }

            let currentSlide = 0;
            const slideCount = slides.length;

            function updateSlider() {
                const slideWidth = slides[0].clientWidth;
                sliderTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

                // Disable/enable buttons based on current slide
                prevBtn.disabled = currentSlide === 0;
                nextBtn.disabled = currentSlide === slideCount - 1;

                // Visual feedback for disabled state
                prevBtn.style.opacity = currentSlide === 0 ? 0.5 : 1;
                nextBtn.style.opacity = currentSlide === slideCount - 1 ? 0.5 : 1;
            }

            function goToNextSlide() {
                if (currentSlide < slideCount - 1) {
                    currentSlide++;
                    updateSlider();
                }
            }

            function goToPrevSlide() {
                if (currentSlide > 0) {
                    currentSlide--;
                    updateSlider();
                }
            }

            nextBtn.addEventListener('click', goToNextSlide);
            prevBtn.addEventListener('click', goToPrevSlide);

            // Initialize slider position and button states
            updateSlider();

            // Handle window resize
            window.addEventListener('resize', function () {
                updateSlider();
            });
        });