highest_number = 6;
lowest_number = 1;
dice1 = Math.floor((Math.random()*highest_number)+lowest_number);   
dice2 = Math.floor((Math.random()*highest_number)+lowest_number);   
document.getElementById('output1').innerHTML = dice1;   
document.getElementById('output2').innerHTML = dice2;
console.log(dice1);
console.log(dice2);
var rollButton = document.getElementById("roll-button");
rollButton.onclick = function(){
  document.getElementById("output-container").style.display = "flex";
  var d1 = document.getElementById("dice1");
  var d2 = document.getElementById("dice2");
  var d3 = document.getElementById("dice3");
  var d4 = document.getElementById("dice4");
  var d5 = document.getElementById("dice5");
  var d6 = document.getElementById("dice6");
  var d7 = document.getElementById("dice7");
  var d8 = document.getElementById("dice8");
  var d9 = document.getElementById("dice9");
  var d10 = document.getElementById("dice10");
  var d11 = document.getElementById("dice11");
  var d12 = document.getElementById("dice12");
  if (dice1 === 1) {
	d1.style.display = "flex";
	d2.style.display = "none";
	d3.style.display = "none";
	d4.style.display = "none";
	d5.style.display = "none";
	d6.style.display = "none";
  } else if (dice1 === 2) {
	  d1.style.display = "none";
	  d2.style.display = "flex";
	  d3.style.display = "none";
	  d4.style.display = "none";
	  d5.style.display = "none";
	  d6.style.display = "none";
  } else if (dice1 === 3) {
	   d1.style.display = "none";
	   d2.style.display = "none";
	   d3.style.display = "flex";
	   d4.style.display = "none";
	   d5.style.display = "none";
	   d6.style.display = "none";
  } else if (dice1 === 4) {
	  d1.style.display = "none";
	  d2.style.display = "none";
	  d3.style.display = "none";
	  d4.style.display = "flex";
	  d5.style.display = "none";
	  d6.style.display = "none";
  } else if (dice1 === 5) {
	  d1.style.display = "none";
	  d2.style.display = "none";
	  d3.style.display = "none";
	  d4.style.display = "none";
	  d5.style.display = "flex";
	  d6.style.display = "none";
  } else if (dice1 === 6) {
	  d1.style.display = "none";
	  d2.style.display = "none";
	  d3.style.display = "none";
	  d4.style.display = "none";
	  d5.style.display = "none";
	  d6.style.display = "flex";
  }
    if (dice2 === 1) {
	d7.style.display = "flex";
	d8.style.display = "none";
	d9.style.display = "none";
	d10.style.display = "none";
	d11.style.display = "none";
	d12.style.display = "none";
  } else if (dice2 === 2) {
	  d7.style.display = "none";
	  d8.style.display = "flex";
	  d9.style.display = "none";
	  d10.style.display = "none";
	  d11.style.display = "none";
	  d12.style.display = "none";
  } else if (dice2 === 3) {
	   d7.style.display = "none";
	   d8.style.display = "none";
	   d9.style.display = "flex";
	   d10.style.display = "none";
	   d11.style.display = "none";
	   d12.style.display = "none";
  } else if (dice2 === 4) {
	  d7.style.display = "none";
	  d8.style.display = "none";
	  d9.style.display = "none";
	  d10.style.display = "flex";
	  d11.style.display = "none";
	  d12.style.display = "none";
  } else if (dice2 === 5) {
	  d7.style.display = "none";
	  d8.style.display = "none";
	  d9.style.display = "none";
	  d10.style.display = "none";
	  d11.style.display = "flex";
	  d12.style.display = "none";
  } else if (dice2 === 6) {
	  d7.style.display = "none";
	  d8.style.display = "none";
	  d9.style.display = "none";
	  d10.style.display = "none";
	  d11.style.display = "none";
	  d12.style.display = "flex";
  }

  var correctAnswer = dice1 + dice2;
  console.log(correctAnswer);
  var message1 = "<h3>Well done</h3>";
  var message2 = "<h3>The answer is " + correctAnswer + "<br>Try again</h3>";
  var submit = document.getElementById("sub");
  submit.onclick = function() {
	var valEntered = document.getElementById("diceAnswer");
  	var num = valEntered.value;
	var numEntered = parseInt(num);
	console.log(numEntered);
	console.log(num);
	if (numEntered === correctAnswer) {
	  document.getElementById("message").style.display = "block";
	  document.getElementById("message").style.backgroundColor = "#6eff63";
      document.getElementById("message").innerHTML = message1;
  document.getElementById("refresh-container").style.display = "flex";
	} else if (numEntered !== correctAnswer) {
		document.getElementById("message").style.display = "block";
		document.getElementById("message").style.backgroundColor = "#ff6363";
		document.getElementById("message").innerHTML = message2;
		document.getElementById("refresh-container").style.display = "flex";
	} else if (num === "") {
		document.getElementById("message").style.display = "none";   //not working
	}
  };
  
};

var refresh = document.getElementById("refresh-button");
refresh.onclick = function() {
	window.location.reload();
}

// clear input
/*
rollButton.onclick = function() {
	if (dice1 !== 
}



	document.getElementById("output1").value = '';
	document.getElementById("output2").value = '';
*/
/*
Math.floor((Math.random()*highest_number)+lowest_number)

above code processed in this order:

1   Math.random() * highest_number
2   Add lowest number
3   Round down ( with Math.floor ) the result of steps 1 and 2
4   Assign the rounded value to dice1
*/