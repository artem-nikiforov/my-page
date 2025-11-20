document.addEventListener('DOMContentLoaded', function() {
    let switchWord = document.getElementById('switch-word');
    // Весь ваш остальной код

let roleArr = ['дизайнер','разработчик','продюсер','сценарист','редактор','менеджер']

let currentIndex = 0;
switchWord.textContent = roleArr[currentIndex]

let lastScrollTop = 0;
let scrollCounter = 0;

function updateText() {
            currentIndex = (currentIndex + 1) % roleArr.length;
            //switchWord.style.opacity = '0';
            
            setTimeout(() => {
                switchWord.textContent = roleArr[currentIndex];
                switchWord.style.opacity = '1';
            }, 150);
            console.log(currentIndex)
        }

// Обработчик скролла
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDelta = Math.abs(scrollTop - lastScrollTop);
            
    // Увеличиваем счетчик на величину скролла
    scrollCounter += scrollDelta;
    lastScrollTop = scrollTop;
            
    // Каждые 10px обновляем текст
    if (scrollCounter >= 20) {
        updateText();
        scrollCounter = 0; // Сбрасываем счетчик
            }
        });

    });