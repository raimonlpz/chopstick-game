let start = document.getElementById('start-button');
start.addEventListener('click', level1);


let buttonBlue = document.getElementById('blue');
buttonBlue.addEventListener('click', touchBlue);

let buttonRed = document.getElementById('red');
buttonRed.addEventListener('click', touchRed);

let buttonGreen = document.getElementById('green');
buttonGreen.addEventListener('click', touchGreen);

let buttonOrange = document.getElementById('orange');
buttonOrange.addEventListener('click', touchOrange);


let initSound = new Sound('media/sound.mp3');
let ambientSound = new Sound('media/ambient.mp3');
let failSound = new Sound('media/fail.mp3');


function Sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
}

let level = document.getElementById('level');

let arrUser = [];
let playing = false;

function touchBlue(){

    
    buttonBlue.classList.add('light');
    initSound.play();
    
    setTimeout(function(){
        buttonBlue.classList.remove('light');
    }, 700);
    
    if(playing){
        console.log('blue');
        arrUser.push(0);
    }
  
}
let b1 = touchBlue;


function touchRed(){

    buttonRed.classList.add('light');
    initSound.play();
    
    setTimeout(function(){
        buttonRed.classList.remove('light');
    }, 700);
    
    if(playing){
        console.log('red');
        arrUser.push(1);
    }
}
let b2 = touchRed;


function touchGreen(){

    
    buttonGreen.classList.add('light');
    initSound.play();
    
    setTimeout(function(){
        buttonGreen.classList.remove('light');
    }, 700);
    
    if(playing){
        console.log('green');
        arrUser.push(2);

    }
}
let b3 = touchGreen;


function touchOrange(){

    buttonOrange.classList.add('light');
    initSound.play();
    
    setTimeout(function(){
        buttonOrange.classList.remove('light');
    }, 700);
    
    if(playing){
        console.log('orange');
        arrUser.push(3);
    }
}
let b4 = touchOrange;

let arrLevel = [b1,b2,b3,b4];
let arrIndex = [];


// RANDOM SERIE #LEVEL 1

function level1(){
   
    playing = true;
    failSound.stop();


    for(let i=1;i<5; i++){
        level.innerHTML = level.innerHTML.replace(i,1);
    }
    
    let start = document.getElementById('start-button');
    start.parentNode.removeChild(start);

    let random;
    let arr1 = [];

    for(let i=0; i<4; i++){
        random = Math.floor(Math.random() * 4);
        arrIndex.push(random);
        arr1.push(arrLevel[random]);
        setTimeout(() => arr1[i](),1500*i);
    }

    for(let i=0; i<4; i++){
        arrIndex.push(arrIndex[i]);
    }
    console.log(arrIndex);
    setTimeout(checkResult, 17000);
    countDown();
}



let counter; 
counter = document.createElement('h4');

function countDown(){
    counter.classList.remove('normalize-font')
    for(let i=17; i>0; i--){
      
      counter.innerHTML = 17-i;
      setTimeout(() => 
      document.body.appendChild(counter)
      , 1000*i);
      setTimeout(() => 
      counter.innerHTML = counter.innerHTML.replace(17-i,17-i-1)
      , 1000*i);
    }
}
  



let result = false;
function checkResult(){

    let restart; 
    restart = document.createElement('button');

    if(arrIndex.length == arrUser.length){
        for(let i=0; i<8; i++){
            if(arrIndex[i] !== arrUser[i]){
              result = false;
              break;
            } else {
              result = true;
            }   
        }
    } else {
        result = false;
    }
    if(result){
        counter.innerHTML = counter.innerHTML.replace(0,'YAAY YOU WIN!')
        counter.classList.add('normalize-font')

        restart.innerHTML = 'CONTINUE';
        restart.setAttribute('id','start-button');
        restart.setAttribute('class','restart');
        document.body.appendChild(restart)

        arrIndex = [];
        arrUser = [];
        let continuePlay = document.getElementById('start-button');
        continuePlay.addEventListener('click', level2);
        ambientSound.play();
        
    } else{
        counter.innerHTML = counter.innerHTML.replace(0,'OOPS YOU LOSE!')
        counter.classList.add('normalize-font')

        restart.innerHTML = 'TRY AGAIN';
        restart.setAttribute('id','start-button');
        restart.setAttribute('class','restart')
        document.body.appendChild(restart)

        arrIndex = [];
        arrUser = [];
        let tryAgain = document.getElementById('start-button');
        tryAgain.addEventListener('click', level1);

        failSound.play();
    }
    playing = false;
}




// RANDOM SERIE #LEVEL 2

function level2(){

    playing = true;
    ambientSound.stop();
    
    level.innerHTML = level.innerHTML.replace(1,2);
    
    
    let start = document.getElementById('start-button');
    start.parentNode.removeChild(start);

    let random;
    let arr1 = [];

    for(let i=0; i<6; i++){
        random = Math.floor(Math.random() * 4);
        arrIndex.push(random);
        arr1.push(arrLevel[random]);
        setTimeout(() => arr1[i](),1500*i);
    }

    for(let i=0; i<6; i++){
        arrIndex.push(arrIndex[i]);
    }
    console.log(arrIndex);
    setTimeout(checkResult2, 23000);
    countDown2();
}


function checkResult2(){

    let restart; 
    restart = document.createElement('button');

    if(arrIndex.length == arrUser.length){
        for(let i=0; i<12; i++){
            if(arrIndex[i] !== arrUser[i]){
              result = false;
              break;
            } else {
              result = true;
            }   
        }
    } else {
        result = false;
    }
    if(result){
        counter.innerHTML = counter.innerHTML.replace(0,'YAAY YOU WIN!')
        counter.classList.add('normalize-font')

        restart.innerHTML = 'CONTINUE';
        restart.setAttribute('id','start-button');
        restart.setAttribute('class','restart');
        document.body.appendChild(restart)

        arrIndex = [];
        arrUser = [];
        let continuePlay = document.getElementById('start-button');
        continuePlay.addEventListener('click', level3);
        ambientSound.play();
        
    } else{
        counter.innerHTML = counter.innerHTML.replace(0,'OOPS YOU LOSE!')
        counter.classList.add('normalize-font')

        restart.innerHTML = 'TRY AGAIN';
        restart.setAttribute('id','start-button');
        restart.setAttribute('class','restart')
        document.body.appendChild(restart)

        arrIndex = [];
        arrUser = [];
        let tryAgain = document.getElementById('start-button');
        tryAgain.addEventListener('click', level1);
        failSound.play();
    }
    playing = false;
}



function countDown2(){
    counter.classList.remove('normalize-font')
    for(let i=23; i>0; i--){
      
      counter.innerHTML = 23-i;
      setTimeout(() => 
      document.body.appendChild(counter)
      , 1000*i);
      setTimeout(() => 
      counter.innerHTML = counter.innerHTML.replace(23-i,23-i-1)
      , 1000*i);
    }
}




// RANDOM SERIE #LEVEL 3


function level3(){

    playing = true;
    ambientSound.stop();

    level.innerHTML = level.innerHTML.replace(2,3);

    
    let start = document.getElementById('start-button');
    start.parentNode.removeChild(start);

    let random;
    let arr1 = [];

    for(let i=0; i<8; i++){
        random = Math.floor(Math.random() * 4);
        arrIndex.push(random);
        arr1.push(arrLevel[random]);
        setTimeout(() => arr1[i](),1500*i);
    }

    for(let i=0; i<8; i++){
        arrIndex.push(arrIndex[i]);
    }
    console.log(arrIndex);
    setTimeout(checkResult3, 30000);
    countDown3();
}


function checkResult3(){

    let restart; 
    restart = document.createElement('button');

    if(arrIndex.length == arrUser.length){
        for(let i=0; i<16; i++){
            if(arrIndex[i] !== arrUser[i]){
              result = false;
              break;
            } else {
              result = true;
            }   
        }
    } else {
        result = false;
    }
    if(result){
        counter.innerHTML = counter.innerHTML.replace(0,'YAAY YOU WIN!')
        counter.classList.add('normalize-font')

        restart.innerHTML = 'CONTINUE';
        restart.setAttribute('id','start-button');
        restart.setAttribute('class','restart');
        document.body.appendChild(restart)

        arrIndex = [];
        arrUser = [];
        let continuePlay = document.getElementById('start-button');
        continuePlay.addEventListener('click', level4);
        ambientSound.play();

        
    } else{
        counter.innerHTML = counter.innerHTML.replace(0,'OOPS YOU LOSE!')
        counter.classList.add('normalize-font')

        restart.innerHTML = 'TRY AGAIN';
        restart.setAttribute('id','start-button');
        restart.setAttribute('class','restart')
        document.body.appendChild(restart)

        arrIndex = [];
        arrUser = [];
        let tryAgain = document.getElementById('start-button');
        tryAgain.addEventListener('click', level1);
        failSound.play();
    }
    playing = false;
}


function countDown3(){
    counter.classList.remove('normalize-font')
    for(let i=30; i>0; i--){
      
      counter.innerHTML = 30-i;
      setTimeout(() => 
      document.body.appendChild(counter)
      , 1000*i);
      setTimeout(() => 
      counter.innerHTML = counter.innerHTML.replace(30-i,30-i-1)
      , 1000*i);
    }
}







// RANDOM SERIE #LEVEL 4


function level4(){

    playing = true;
    ambientSound.stop();
   
    level.innerHTML = level.innerHTML.replace(3,4);
    
    let start = document.getElementById('start-button');
    start.parentNode.removeChild(start);

    let random;
    let arr1 = [];

    for(let i=0; i<10; i++){
        random = Math.floor(Math.random() * 4);
        arrIndex.push(random);
        arr1.push(arrLevel[random]);
        setTimeout(() => arr1[i](),1500*i);
    }

    for(let i=0; i<10; i++){
        arrIndex.push(arrIndex[i]);
    }
    console.log(arrIndex);
    setTimeout(checkResult4, 36000);
    countDown4();
}


function checkResult4(){

    let restart; 
    restart = document.createElement('button');

    if(arrIndex.length == arrUser.length){
        for(let i=0; i<20; i++){
            if(arrIndex[i] !== arrUser[i]){
              result = false;
              break;
            } else {
              result = true;
            }   
        }
    } else {
        result = false;
    }
    if(result){
        counter.innerHTML = counter.innerHTML.replace(0,"CONGRATS, YOU'RE A CHOPSTICK MASTER!")
        counter.classList.add('normalize-font')

        restart.innerHTML = 'PLAY AGAIN';
        restart.setAttribute('id','start-button');
        restart.setAttribute('class','restart');
        document.body.appendChild(restart)

        arrIndex = [];
        arrUser = [];
        let continuePlay = document.getElementById('start-button');
        continuePlay.addEventListener('click', level1);
        ambientSound.play();

        
    } else{
        counter.innerHTML = counter.innerHTML.replace(0,'OOPS YOU LOSE!')
        counter.classList.add('normalize-font')

        restart.innerHTML = 'TRY AGAIN';
        restart.setAttribute('id','start-button');
        restart.setAttribute('class','restart')
        document.body.appendChild(restart)

        arrIndex = [];
        arrUser = [];
        let tryAgain = document.getElementById('start-button');
        tryAgain.addEventListener('click', level1);
        failSound.play();
    }
    playing = false;
}


function countDown4(){
    counter.classList.remove('normalize-font')
    for(let i=36; i>0; i--){
      
      counter.innerHTML = 36-i;
      setTimeout(() => 
      document.body.appendChild(counter)
      , 1000*i);
      setTimeout(() => 
      counter.innerHTML = counter.innerHTML.replace(36-i,36-i-1)
      , 1000*i);
    }
}
