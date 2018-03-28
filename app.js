//I need to get car1 to move right when the right arrow is pushed
//car2 needs to go right by one table space when the "D" button is pushed, attach to table?
//they need to stop when they reach the sign
//check for winner
//display winner

let car1 = document.getElementById("first");
let car2 = document.getElementById("second");



let carLeft = 0;
let carLeft2 = 0;

let move = (e) => {
	if(e.keyCode == 39) {
		carLeft +=50;
		car1.style.left = carLeft + 'px';
		if(carLeft >= 1300) {
			alert("Purple Baloon Won!!!!");
		}}
	
	if(e.keyCode == 68) {
		carLeft2 +=50;
		car2.style.left = carLeft2 + 'px';
		if(carLeft2 >= 1300) {
			alert("Rainbow Baloon Won!!!!");
}}}

document.addEventListener('keydown', (move));


