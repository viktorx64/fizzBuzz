console.log("Fizz-buzz");

var i = 1;
 
while(i<200) {
	var printer = ""; 
	if(i % 3 == 0) {
		printer += "fizz";
	}
	if(i % 5 == 0) {
		printer += "buzz";
	}
	if(printer == "") {
		printer = i;
	}
	console.log(printer);
	i++;
}
