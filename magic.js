//hide an element
const hide = (Id) => {
    document.getElementById(Id).style.display = "none";
 }
 //show an element
 const show = (Id) => {
    document.getElementById(Id).style.display = "block";
 }

 let randomAnswer = Math.floor(Math.random()* 12);
 let eightBall = '';
 let answer = document.getElementById('answer');

 switch (randomAnswer) {

   case 0:
   eightBall = 'It is certain';
   answer.innerText = eightBall;
   console.log(eightBall);
   document.write(answer);
   break;

   case 1:
   eightBall = 'It is decidedly so';
   answer.innerText = eightBall;
   console.log(eightBall)
   document.write(answer);
   break;

   case 2:
   eightBall = 'Reply hazy, try again';
   answer.innerText = eightBall;
   console.log(eightBall);
   document.write(answer);
   break;
   case 3:

   eightBall = 'Cannot predict now';
   answer.innerText = eightBall;
   console.log(eightBall);
   document.write(answer);
   break;

   case 4:
   eightBall = 'Do not count on it';
   answer.innerText = eightBall;
   console.log(eightBall);
   document.write(answer);
   break;

   case 5:
   eightBall = 'My sources say no';
   answer.innerText = eightBall;
   console.log(eightBall);
   document.write(answer);
   break;

   case 6:
   eightBall = 'Outlook not so good';
   answer.innerText = eightBall;
   console.log(eightBall);
   document.write(answer);
   break;

   case 7:
   eightBall = 'Signs point to yes';
   answer.innerText = eightBall;
   console.log(eightBall);
   document.write(answer);
   break;
   
   case 8:
    eightBall = 'Ehh';
    answer.innerText = eightBall;
    console.log(eightBall);
    document.write(answer);
    break;

    case 9:
   eightBall = "Don't quit your day job";
   answer.innerText = eightBall;
   console.log(eightBall);
   document.write(answer);
   break;

   case 10:
    eightBall = 'Ask again later';
    answer.innerText = eightBall;
    console.log(eightBall);
    document.write(answer);
    break;

    case 11:
    eightBall = 'It is possible';
    answer.innerText = eightBall;
    console.log(eightBall);
    document.write(answer);
    break;

    case 12:
    eightBall = "I predict outcomes, I don't make miracles";
    answer.innerText = eightBall;
    console.log(eightBall);
    document.write(answer);
    break;
     
   default: 
   console.log(eightBall);
   console.log('Battery low')
 
 }

const magic = () =>  {

    let question = document.getElementById('question');

    let outerShell = document.getElementById('outer-shell');

    let mainContainer = document.getElementById('main-container');


    for (let i = 0; i < 1; i++){
        if (question.value.length >= 5){
            console.log(i)
            question.value = 'it is working its magic';
            outerShell.style.animationPlayState = 'running';
            mainContainer.style.animationPlayState = 'running';


            setTimeout(function (){
                show('answer-container');
                }, 2000);

            setTimeout(function (){
                hide('answer-container');
                question.value = '';
                location.reload();
                return false;
                }, 7000);
        }

    }
    
}
