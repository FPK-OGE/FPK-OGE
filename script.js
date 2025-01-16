

let clock = () => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    if (hrs == 0) 
      hrs = 24;
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;
  
    let time = `${hrs}:${mins}`;
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000);
  };
  
  clock();

  const startOff = document.querySelector('#start-on-js')
  const btnStart = document.querySelector('#btn-start-js')

  btnStart.addEventListener('click', function(){

    startOff.classList.toggle('start-off')
    
  });

  // Изменение темы
  const BtnNight = document.querySelector('#btn-night-js')
  const circle = document.querySelector('#circle-js')
  const background = document.querySelector('#background-js')

  circle.classList.remove('circle-nights')
  background.classList.remove('background-night')

  BtnNight.addEventListener('click', function(){

    circle.classList.toggle('circle-nights')
    circle.classList.toggle('circle-day')
    background.classList.toggle('background-night')
    background.classList.toggle('background-day')
    

  });
  
  function night() {
    let fpkblack = document.querySelectorAll('.FPK');
    let answerInput = document.querySelectorAll('#answerInput');

    // Проходим по каждому элементу и меняем его стиль
    fpkblack.forEach((element) => {
        if (
            element.style.backgroundColor === "" ||
            element.style.backgroundColor === "white"
        ) {
            element.style.backgroundColor = "rgb(24, 22, 22)"; // Меняем фон на черный
            element.style.color = "white"; // Меняем текст на белый
        } else {
            element.style.backgroundColor = "white"; // Меняем фон на белый
            element.style.color = "rgb(24, 22, 22)"; // Меняем текст на черный
        }
    });

    answerInput.forEach((element) => {
        if (
            element.style.backgroundColor === "" ||
            element.style.backgroundColor === "white"
        ) {
            element.style.backgroundColor = "rgb(24, 22, 22)"; // Меняем фон на черный
            element.style.color = "white"; // Меняем текст на белый
        } else {
            element.style.backgroundColor = "white"; // Меняем фон на белый
            element.style.color = "rgb(24, 22, 22)"; // Меняем текст на черный
        }
    });

    const image = document.querySelector(".task-img");
    
    // Применяем инверсию только для изображения .task-img
    if (image.style.filter.includes('invert')) {
        image.style.filter = 'blur(4px)'; // Оставляем только размытие
    } else {
        image.style.filter = 'invert(91.5%) blur(4px)'; // Добавляем инверсию и сохраняем размытие
    }

    const startBtn = document.querySelector(".start-button");

    if (startBtn.style.filter === "invert(100%)") {
        startBtn.style.filter = "invert(0)"; // Отключаем инверсию
    } else {
        startBtn.style.filter = "invert(100%)"; // Включаем инверсию
    }

    const fadingShadow = document.querySelector(".fading-shadow");

    if (fadingShadow.style.filter === "invert(100%)") {
        fadingShadow.style.filter = "invert(0)"; // Отключаем инверсию
    } else {
        fadingShadow.style.filter = "invert(100%)"; // Включаем инверсию
    }

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        const currentColor = button.style.color || "black";
        const newColor = currentColor === "black" ? "white" : "black";

        button.style.color = newColor;
    });
}
  

  // Открытие фпк
  const fpk = document.querySelector('#FPK-JS')
  const logo = document.querySelector('#logo-js')

  logo.addEventListener('click', function(){

    fpk.classList.toggle('FPK-OFF')

  });

  const choice1 = document.querySelector('#choice1-js')
  const btn1Choice1 = document.querySelector('#btn1-choice1-js')
  const btn2Choice1 = document.querySelector('#btn2-choice1-js')

  const choiceOge = document.querySelector('#choice-oge-js')
  const btn1ChoiceOge = document.querySelector('#btn1-choice-oge-js')
  const btn2ChoiceOge = document.querySelector('#btn2-choice-oge-js')
  const btn3ChoiceOge = document.querySelector('#btn3-choice-oge-js')

  const choiceEge = document.querySelector('#choice-ege-js')
  const btn1ChoiceEge = document.querySelector('#btn1-choice-ege-js')
  const btn2ChoiceEge = document.querySelector('#btn2-choice-ege-js')
  const btn3ChoiceEge = document.querySelector('#btn3-choice-ege-js')

  choice1.classList.remove('choice1-off')
  choice1.classList.remove('choice1-none')


  btn1Choice1.addEventListener('click', function(){

    choice1.classList.add('choice1-off')

    setTimeout(function() {
  
      choice1.classList.add('choice1-none')
      choiceOge.classList.remove('choice-oge-off')

  
    }, 550);

  })

  btn2Choice1.addEventListener('click', function(){

    choice1.classList.add('choice1-off')

    setTimeout(function() {
  
      choice1.classList.add('choice1-none')
      choiceEge.classList.remove('choice-ege-off')
  
    }, 550);

  })

  class Timer {
    constructor(button, timerText, duration) {
        this.button = button;
        this.timerText = timerText;
        this.duration = duration || 60000; // По умолчанию 1 минута
        this.isRunning = false;
        this.testCompleted = false;
        this.interval = null;

        this.button.addEventListener('click', () => this.toggle());
    }

toggle() {
    if (!this.isRunning && !this.testCompleted) {
        this.start();
        this.button.textContent = 'Завершить тест';

        const taskImg = document.querySelector('.task-img-blur');
        if (taskImg) {
            // Получаем текущий фильтр
            let currentFilter = taskImg.style.filter;

            // Заменяем любое значение blur на blur(0)
            taskImg.style.filter = currentFilter.replace('blur(4px)', 'blur(0)');
        }

        const tasksOff = document.querySelector('.tasks-off');
        if (tasksOff) {
            tasksOff.style.opacity = '1'; // Установка opacity
        }
    } else if (this.isRunning) {
        this.stop();
        this.button.textContent = 'Начать тест';
        this.button.style.opacity = '0.6'; // Добавление стиля непрозрачности
    }
}

    start() {
        const startTime = Date.now() + this.duration;

        const updateTimer = () => {
            const currentTime = Date.now();
            const timeLeft = startTime - currentTime;

            if (timeLeft <= 0) {
                clearInterval(this.interval);
                this.timerText.textContent = "Время вышло!";
                this.isRunning = false;
                this.testCompleted = true;
                this.button.disabled = true;
                this.button.style.opacity = '0.6'; // Добавляем стиль непрозрачности

                // Включаем кнопки с классом btn-night
                this.enableBtnNight();
            } else {
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
                const milliseconds = Math.floor(timeLeft % 1000);

                const paddedMinutes = String(minutes).padStart(2, '0');
                const paddedSeconds = String(seconds).padStart(2, '0');
                const paddedMilliseconds = String(milliseconds).padStart(3, '0');

                this.timerText.textContent = `${paddedMinutes}:${paddedSeconds}:${paddedMilliseconds}`;
            }
        };

        // Отключаем кнопки с классом btn-night
        this.disableBtnNight();

        this.interval = setInterval(updateTimer, 10);
        this.isRunning = true;
    }

    stop() {
        clearInterval(this.interval);
        this.isRunning = false;
        this.testCompleted = true;
        this.button.disabled = true;
        this.button.style.opacity = '0.6'; // Добавляем стиль непрозрачности

        // Включаем кнопки с классом btn-night
        this.enableBtnNight();
    }

    // Функция для отключения кнопок с классом btn-night
    disableBtnNight() {
        const buttons = document.querySelectorAll('.btn-night');
        buttons.forEach(btn => {
            btn.disabled = true;
        });
    }

    // Функция для включения кнопок с классом btn-night
    enableBtnNight() {
        const buttons = document.querySelectorAll('.btn-night');
        buttons.forEach(btn => {
            btn.disabled = false;
        });
    }
}

document.querySelectorAll('.start-button').forEach((button, index) => {
    const timerText = button.nextElementSibling;
    const duration = parseInt(button.dataset.duration) || 60000; // Время из data-атрибута или по умолчанию 1 минута
    new Timer(button, timerText, duration);
});



  // const choice1 = document.querySelector('#choice1-js')
  // const btn1Choice1 = document.querySelector('#btn1-choice1-js')
  // const btn2Choice1 = document.querySelector('#btn2-choice1-js')

  // const choiceOge = document.querySelector('#choice-oge-js')
  // const btn1ChoiceOge = document.querySelector('#btn1-choice-oge-js')
  // const btn2ChoiceOge = document.querySelector('#btn2-choice-oge-js')
  // const btn3ChoiceOge = document.querySelector('#btn3-choice-oge-js')

  // const choiceEge = document.querySelector('#choice-ege-js')
  // const btn1ChoiceEge = document.querySelector('#btn1-choice-ege-js')
  // const btn2ChoiceEge = document.querySelector('#btn2-choice-ege-js')
  // const btn3ChoiceEge = document.querySelector('#btn3-choice-ege-js')

  const btn1ogeEazy = document.querySelector('#btn1-choice-oge-eazy-js')
  const eazyAnimationOge = document.querySelector('.eazyAnimationOge-off')
  const greenFrame = document.querySelector('.green-frame-off')

btn1ChoiceOge.addEventListener("mouseenter", function(){
eazyAnimationOge.classList.remove('eazyAnimationOge-off')
});

btn1ChoiceOge.addEventListener("mouseleave", function(){
  eazyAnimationOge.classList.add('eazyAnimationOge-off')
  });


  btn1ChoiceOge.addEventListener('click', function(){

    choiceOge.classList.add('choice-oge-off')

    setTimeout(function() {
      btn1ogeEazy.classList.remove('btn1-choice-oge-eazy-off')
    }, 550);
      
  })

  btn1ChoiceOge.addEventListener("mouseenter", function(){
    greenFrame.classList.remove('green-frame-off')
    });
    
    btn1ChoiceOge.addEventListener("mouseleave", function(){
      greenFrame.classList.add('green-frame-off')
      });








  btn2ChoiceOge.addEventListener('click', function(){

    choiceOge.classList.add('choice-oge-off')

    setTimeout(function() {
      
    }, 550);
      
  })

// Массив правильных ответов
const correctAnswers = ['1,5', 'ответ_для_задачи_2', 'ответ_для_задачи_3', 'ответ_для_задачи_4', 'ответ_для_задачи_5'];

let currentQuestion = 0;     // Текущий номер вопроса
let results = [];            // Массив для сохранения результатов

function checkAnswer() {
    // Получаем ответ пользователя
    const answer = document.getElementById('answerInput').value;

    // Проверяем, правильный ли ответ
    if (answer === correctAnswers[currentQuestion]) {
        results.push(true);      // Сохраняем успешное выполнение
    } else {
        results.push(false);     // Сохраняем неудачное выполнение
    }

    // Очищаем поле ввода
    document.getElementById('answerInput').value = '';

    // Переходим к следующему вопросу
    currentQuestion++;

    // Если все вопросы решены, показываем результаты
    if (currentQuestion >= correctAnswers.length) {
        displayFinalResults();
    }
}

function displayFinalResults() {
    // Показать скрытый блок с результатами
    document.getElementById('finalResults').style.display = 'block';

    // Формируем список результатов
    const resultsList = document.getElementById('resultsList');
    for (let i = 0; i < results.length; i++) {
        let resultItem = document.createElement('li');
        resultItem.textContent = `Задача ${i + 1}: ${results[i] ? 'Правильно' : 'Неправильно'}`;
        resultsList.appendChild(resultItem);
    }

    // Сообщение об общем количестве правильных ответов
    document.getElementById('resultMessage').innerText = `Вы справились с ${results.filter(Boolean).length} из ${correctAnswers.length} задач.`;
}