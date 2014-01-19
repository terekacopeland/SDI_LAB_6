//alert("JavaScript works!");

//Tereka Copeland
//SDI 1401
//January 18, 2014
//Working with Arrays


//my function

var myFunction = function(){
	
	var familyNames = ["Belinda's", "Joe's", "Phillip's'", "Tereka's'"];
	var familyHobbies = ["foodie.", "traveller.", "sports enthusiast.", "raver."];
	
	console.log("The length of the array is " + familyNames.length);
	
	familyNames[familyNames.length] = "Jill's";
	familyHobbies[familyHobbies.length] = "movies."
	
	for (var i = 0; i < familyNames.length; i++) {
		alert(familyNames[i]);
		console.log(familyNames[i] + " hobbie is " + familyHobbies[i]);
		 
	};

	var lostname = familyNames.pop();
	var losthobbie = familyHobbies.pop();
	
	familyNames.push("Tracy's");
	familyHobbies.push("cooking.");
	
	console.log(familyNames);
	console.log(familyHobbies);
	
	
	
	
	
	

};

myFunction();


		
