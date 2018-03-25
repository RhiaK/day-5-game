//I need to get car1 to move right when the right arrow is pushed
//car2 needs to go right by one table space when the "D" button is pushed, attach to table?
//they need to stop when they reach the sign
//check for winner
//display winner

let car1 = document.getElementById("first");
let car2 = document.getElementById("second");


let carLeft = 0;

let move = (e) => {
	if(e.keyCode == 39) {
		carLeft +=10;
		car1.style.left = carLeft + 'px';
		if(carLeft >= 1200) {
			alert("You have won!!!!");
		}}
	
	if(e.keyCode == 68) {
		carLeft +=10;
		car2.style.left = carLeft + 'px';
		if(carLeft >= 1200) {
			alert("You have won!!!!");
}}}

 



document.onkeydown = move;

//	right arrow 39, d 68

//});










//if button press, remove last space in array, right justify