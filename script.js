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

  const taskbarOn = document.querySelector('#taskbar-on-js')
  const BtnTaskbar = document.querySelector('#btn-taskbar')

  taskbarOn.classList.remove('task-off')

  BtnTaskbar.addEventListener('click', function(){
    taskbarOn.classList.toggle('task-off')

  })

  const btnOff = document.querySelector('#btn-off')
  const main = document.querySelector('#main-js')
  const windowsXp = document.querySelector('#WindowsXp-js')
  const off = document.querySelector('#off')
 
  windowsXp.classList.remove('WindowsXp-off')


  btnOff.addEventListener('click', function(){
    windowsXp.classList.add('WindowsXp-off')
    main.classList.remove('main-none')

    setTimeout(function() {
  
      off.classList.remove('off-none')
      main.classList.add('main-none')

    }, 3500);


  })

  const item1 = document.querySelector('#item1')
  const logo = document.querySelector('#logo')
  const logotext2 = document.querySelector('#logotext2')
  const btninternet = document.querySelector('#btninternet')
  const fpk = document.querySelector('#FPK')

  logo.classList.remove('logo2')
  logotext2.classList.remove('logo-text2')

  btninternet.addEventListener('click', function(){
    logo.classList.add('logo2')
    logotext2.classList.add('logo-text2')
    logo.classList.remove('logo')
    logotext2.classList.remove('logo-text')
    

    setTimeout(function() {
  
     btninternet.addEventListener('click', function(){
      fpk.classList.remove('FPK-OGE-OFF')

     })

    }, 1);

    setTimeout(function() {
  
      btninternet.addEventListener('click', function(){
        fpk.classList.remove('FPK-OGE')
 
      })
 
     }, 500);


  });



