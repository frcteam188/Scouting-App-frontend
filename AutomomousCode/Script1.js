var Score = 0;
let list = [""];

function AddPoints(amt, index) 
{
	if (list.includes(index)) return;

	 Score += amt;
     list.push(index);
	 UpdateScore();
	 ChangeButton(index);
}

function UpdateScore() 
{
	document.getElementById("score").innerHTML = Score;  
}

function ChangeButton(identifier) 
{
   document.getElementById(identifier).innerHTML = "."; 
}



 