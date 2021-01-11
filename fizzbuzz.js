console.log("Fizz-buzz");

//check if dividible by 5

function check5(num) {
	return (num % 5 == 0);
	
}

//check if dividible by 3

function check3(num) {
	return(num % 3 == 0);
}

//loop trough the numbers

var i = 1;

while(i<100) {
	var printer = ""; 
	var five = check5(i);
	var three = check3(i);
	if(three) {
		printer += "fizz";
	}
	if(five) {
		printer += "buzz";
	}
	if(printer == "") {
		printer = i;
	}
	console.log(printer);
	i++;
}
