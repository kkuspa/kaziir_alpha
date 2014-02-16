function SignUp() {
	var user = new Parse.User();
	var form = document.getElementById("signup-form")
	event.preventDefault();


	var firstname = form.firstname.value;
	var lastname = form.lastname.value;
	var email = form.email.value;
	var grad = form.grad.value;
	var major = form.major.value;
	var password = "6789";
	
	user.set("firstname", firstname);
	user.set("lastname", lastname);
	user.set("email", email);
	user.set("username", email);
	user.set("password", password);
	user.set("grad", grad);
	user.set("major", major);


	user.signUp(null, {
	  success: function(user) {
		// Hooray! Let them use the app now.
		alert("Thank you for signing up! We'll send you an email once we launch Kaziir!");
		form.submit();
	  },
	  error: function(user, error) {
		// Show the error message somewhere and let the user try again.
		alert("Error: " + error.code + " " + error.message);
	  }

	});

	return false;
};