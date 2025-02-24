const coversSection = document.querySelector('.animate-section');

// Перевіряємо, чи елемент присутній на сторінці
if (coversSection) {
    // Налаштування Intersection Observer
    const observerOptions = {
        root: null, // viewport за замовчуванням
        threshold: 0.5, // 50% елемента має бути видно
    };
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            const line = document.querySelector('.marquee-line ');
            console.log(line);
            if (entry.isIntersecting) {
                line.setAttribute('animationDuration', '10');
                console.log(entry.target);
            } else {
                line.setAttribute('animationDuration', '0');
            }
        });
    };

    // Створюємо новий Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Спостерігаємо за секцією Covers
    observer.observe(coversSection);
}



