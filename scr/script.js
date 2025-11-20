document.addEventListener('DOMContentLoaded', function() {
    let switchWord = document.getElementById('switch-word');
    console.log(switchWord);

    if (!switchWord) {
        console.error('Элемент switch-word не найден!');
        return;
    }

    let roleArr = ['дизайнер','разработчик','продюсер','сценарист','редактор','менеджер'];
    let currentIndex = 0;
    let lastScrollTop = 0;
    let scrollCounter = 0;

    switchWord.textContent = roleArr[currentIndex];

    function updateText() {
        currentIndex = (currentIndex + 1) % roleArr.length;
        setTimeout(() => {
            switchWord.textContent = roleArr[currentIndex];
            switchWord.style.opacity = '1';
        }, 150);
    }

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDelta = Math.abs(scrollTop - lastScrollTop);
        
        scrollCounter += scrollDelta;
        lastScrollTop = scrollTop;
        
        if (scrollCounter >= 20) {
            updateText();
            scrollCounter = 0;
        }
    });
});