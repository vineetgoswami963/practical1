let win = 0;
let lose=0;
let draw=0;

function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById('player-choice').textContent = `  ${playerChoice}`;
  document.getElementById('computer-choice').textContent = `  ${computerChoice}`;

  let result = '';
  if (playerChoice === computerChoice) {
    result = 'It\'s a draw!';
    draw++;
    const temp=document.getElementById('gif');
    temp.src = 'waiting.gif';
    
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) 
  {
    result = 'You win!';
    win++;
    const temp=document.getElementById('gif');
    temp.src = 'scaler-create-impact.gif';
    setTimeout(() => {
        console.log('Removing GIF');
        temp.src = 'waiting.gif';
      }, 4000);

  } else {
    const loseSound = new Audio('moye-moye.mp3');
    loseSound.play();
    setTimeout(() => {
        loseSound.pause();
        loseSound.currentTime = 0;
      }, 4000);
      if(lose<3)
    {
    const temp=document.getElementById('gif');
    temp.src = 'modi-dance-modi-gi.gif';
    setTimeout(() => {
        console.log('Removing GIF');
        temp.src = 'waiting.gif';
      }, 4000);
    }

    if(lose>=3)
{
    const temp=document.getElementById('gif');
    temp.src = 'tumse-na-ho-payega-tumse-na-ho-payega-meme.gif';
    setTimeout(() => {
        console.log('Removing GIF');
        temp.src = 'waiting.gif';
      }, 6000);
}
    result = 'Computer wins!';
    lose++;
  }
   
  document.getElementById('result').textContent = result;
  document.getElementById('score').textContent = `wins: ${win}`;
  document.getElementById('result2').textContent=`loses are: ${lose}`;
  document.getElementById('result3').textContent=`draws are: ${draw}`;

}


