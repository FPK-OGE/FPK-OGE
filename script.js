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

  
