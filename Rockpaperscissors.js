const getUserChoice= userInput => {
userInput=userInput.toLowerCase();
if (userInput==='rock'||userInput==='paper'||userInput==='scissors')
{
return userInput;
}
else
{
  console.log('Error!!');
}
};
function getComputerChoice(){
Math.floor(Math.random()*3);
 if (randomNumber=0)
 {
   return 'paper';
 }
 if (randomNumber=1)
 {
   return 'rock'
 }
 if (randomNumber=2)
 {
   return 'scissors'
 }
}

function determineWinner(userChoice,computerChoice)
{
  if (userChoice===computerChoice)
  {
   return '*The game is a tie!';
  }
  if (userChoice==='rock')
  {
    if(computerChoice==='paper')
    {
      return '*The computer won!';
    }
    else {
      return '*You won!';
    }
  }
  if (userChoice==='paper')
  {
    if (computerChoice==='scissors')
    {
      return '*The computer won!';
    }
    else {
      return '*You won!';
    }
  }
  if (userChoice==='scissors')
  {
    if(computerChoice==='rock')
    {
      return '*The computer won!';
    }
    else{
      return '*You won!';
    }
  }
}
const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('*You threw: ' + userChoice);
  console.log('*The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
console.log('***Rock, Paper, or Scissors***');
playGame();
console.log('******************************')