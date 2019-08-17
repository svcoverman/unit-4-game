$( document ).ready(function(){
    let randomNum=Math.floor(Math.random()*101+19)
    // Random number between 19-120 shown at the start of the game
    $('#randomNumber').text(randomNum);
    // Appending random number to html
    let num1= Math.floor(Math.random()*11+1)
    let num2= Math.floor(Math.random()*11+1)
    let num3= Math.floor(Math.random()*11+1)
    let num4= Math.floor(Math.random()*11+1)
    // Setting up random numbers between 1-12 for each jewel
    let userTotal= 0; 
    let wins= 0;
    let losses = 0;
    // Tallies
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  //resets the game
  function reset(){
        randomNum=Math.floor(Math.random()*101+19);
        console.log(randomNum)
        $('#randomNumber').text(randomNum);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
        //      
  function winning(){
    alert("You won, good JOB!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  function losing(){
    alert ("You lose, try AGAIN!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  // Jewels click function
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == randomNum){
            winning();
          } else if ( userTotal > randomNum){
            losing();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == randomNum){
            winning();
          } else if ( userTotal > randomNum){
            losing();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
            if (userTotal == randomNum){
            winning();
          } else if ( userTotal > randomNum){
            losing();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
            if (userTotal == randomNum){
            winning();
          } else if ( userTotal > randomNum){
            losing();
          }
    });   
  }); 