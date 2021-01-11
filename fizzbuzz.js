console.log("Fizz-buzz");

//check if dividible by 5

function check5(num) {
	if (num % 3 == 0) {
		console.log("buzz");
	}

}

//check if dividible by 3

function check3(num) {
	if (num % 5 == 0) {
		console.log("fizz");
	}
}

//loop trough the numbers

var i = 0;

while(i<100) {
	console.log(i + "{");
	check5(i);
	check3(i);
	console.log("}");
	i++;
}
