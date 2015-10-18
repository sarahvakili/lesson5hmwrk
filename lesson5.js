// Variables 

	/* Variables can be of any data types. See line X.
	Set a variable with an = sign, and it holds that value.
	To set a variable, use [var name = variablename] */

	var name = "Sarah";
	var lastname = "Vakili";
	var birthday = "January 10th";
	var age = 26;

	/* Once your variable is declared, 
	you can change the value at any time */

	name = "Gerald";
	lastname = "Isaac";
	birthday = "June 20th";
	age = 27;

	/* To see the value of your variable,
	use console.log(variablename) */

	console.log(name);
	console.log(birthday);


// Debugging (alerts, comments, the console)

	/* How to log to console:
	Use console.log + ("INPUT")
	This will appear only in the console
	Not the body of the page */

	console.log("This is an example of a log to console.");

	
	/* How to trigger an alert:
	Use alert + ("INPUT")
	And a browser pop-up will appear with your input */

	alert ("This is an example of an alert");

// Data Types
	/* String = text
	Must be in quotation marks */
	
	

		// Adding strings together is called String Concatenation

		
		"This is an Example";

	/* Number = numbers (duh)
	Can stand on their own */

	1, 2.3, 4000

		// Javascript can do all basic math.

		10 + 10;
		10/2;

		var x = 10;
		x * 5;


	/* Boolean = true and false
	Use it to set paramters */

	true;
	false;

	/* Undefined = no value */

// Arrays

	/* Arrays hold collections of data of any time and combination.
	Arrays can also be stored in variables. */

	[1, 2, 3, 4];
	[1, 2, "Sarah", "Gerald"];

	var ages = [25, 26, 27, 28];

	/* Accessing arrays items:
	Each item in the array has an index number, 
	starting with 0. To access the array item, call the 
	array with brackets and the index number */

	var fruit = ["Apples", "Oranges", "Grapes", "Pears"];
	console.log(fruit[1]);
	//This will return "Oranges" in the console.

		/* You can store arrays INSIDE of other arrays.
		This is called a mulit-dimensional array */

		var pasta = ["Spaghetti", "Rigatoni", "Bowtie"];
		var sauce = ["Marinara", "Pesto", "Alfredo"];
		var dish = [pasta, sauce];

		/* To access items inside multi-dimensional arrays, 
		You must access the array and then the item, with
		index numbers starting with '0' */

		var dish = [pasta, sauce];
		console.log(dish[0][2]);
		//This will return "Bowtie" in the console.

		var dish = [pasta, sauce];
		console.log(dish[1][0]);
		//This will return "Marinara" in the console.

			/* Objects are key-value pairs 
			that can be stored within arrays. */

			var dish = { pasta: 'Spaghetti', sauce: 'Marinara'}

			/* You can retrieve data with bracket notation */

			console.log(dish['pasta']);
			//This will return 'Spaghetti' in the console.

			/*You can also retrieve data using dot notation */
			var dish = { pasta: 'Spaghetti', sauce: 'Marinara'}

			console.log(dish.sauce);
			//This will return 'Marinara' in the console.


//Logic & Testing

	/* Use '===' for Boolean comparisons. 
	This checks both the value and type of variable,
	as opposed to just '=='.

	You can also use '!==' to test if items 
	are NOT EQUAL*/

	"Example" === "Example";
	//True

	"Example" === "Testing";
	//False

	"5" === 5
	//False

	5 === 5
	//True

	"Example" !== "Testing";
	//True

	"5" !== 5
	//True

	5 !== 5
	//False

	// There are also value comparisons using '<, >, <=, >='

		/* Using, Boolean comparisons, you can create Conditionals. 
		Use the 'if' statement to run code if the conditions are true.
		Use the 'else' statuemnt to run code ithe condition is false. */

		if (100>101) {
			console.log("You're terrible at math");
		} else {
			console.log("You're good at math");
		}
		//This will return 'You're good at math' in the console.

			/* 'Else if' allows you to run a test 
			before getting to the next line. */

			if ("Dogs" === "Cats") {
				console.log("You don't know your animals");
			} else if ("Cats" === "Cats") {
				console.log("You're a cat lover");
			} else {
				console.log("We'll never know");
			}
			//This will return 'You're a cat lover'.



/* The bullet points referring to ​_”Logic"_​ and ​_”Testing"_​ are 
an opportunity for you guys to (a) demonstrate what you've 
learned about Boolean comparisons (ie. `===`, `>`, etc.) 
and (b) perhaps research other logical operators 
(I'd recommend `&&` and `||` in particular). */


//Functions

	/* A function is a procedure that performs a specific action. 
	It works in two stages -- first define, then call. 
	You can define your function however you like. */

	//Below is how to define it:
	function example() {
		console.log("This is a function example");
	} 

	//This is how to call it:
	example();
	//This should return 'This is a function example'.

		/* Arguments are an input specific to the function. 
		They cannot be be accesed outside of the function. */
		function example(myString) {
		console.log(myString);
		alert(myString);
	}

	example("Cookies");

//Three Example Functions

	//One

	//Two

	//Three

