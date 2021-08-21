let userName = "Prince";

userName? console.log(`Hello ${userName}!`):console.log("Hello!");

let userQuestion = "How much backend developers earn?";

console.log(`${userName} wants to know: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

 let eightBall = "";

 switch (randomNumber){
   case 0:
   eightBall = "Backend developer earn pretty well";
   break;
     
   case 1:
   eightBall='It is certain';
   break;
     
   case 2:
   eightBall='It is decidedly so';
   break;
     
   case 3:
   eightBall='Reply hazy try again';
   break;
     
   case 4:
   eightBall='Cannot predict now';
   break;
     
   case 5:
   eightBall='Do not count on it';
   break;
     
   case 6:
   eightBall = 'Do not count on it';
   break;
     
   case 7:
  eightBall = 'My sources say no';
   break;
     
   case 8:
   eightBall = 'Outlook not so good';
   break;
     
   default:
   eightBall = 'Signs point to yes';
   break;
   }
console.log(`I am the magic  8 ball and my answer is: ${eightBall}!`);
