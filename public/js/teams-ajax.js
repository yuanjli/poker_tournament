$(document).ready(function() {
  console.log('Hello from teams-ajax.js!');
  // TO DO: Define calls to PUT and DELETE routes here
  
  $("#edit-form").submit(function(e){
  	e.preventDefault();

  	console.log("edit form is submitted!");
  	var teamUrl = $(this).attr("action");
  	//grabing the data from the entrance of the form. 
  	var teamData = $(this).serialize();
  	
  	console.log("url is ", teamUrl);
  	console.log("data", teamData);
  	
  	$.ajax({
  		method: "PUT", 
  		url: teamUrl,
  		data: teamData
  	}).done(function(data){
  		console.log("success!");
  		// window.location = teamUrl; 
  	}).fail(function(err){
  		console.log("error", err);
  	}); // end of AJAX
  }); //end of edit-form submit 

  $("#delete-btn").click(function(e){
  	e.preventDefault();
  	var teamUrl = $(this).attr("href");

  	console.log("stuff is working, url is", teamUrl);

  	$.ajax({
  		method:"DELETE",
  		url: teamUrl
  	}).done(function(data){
  		console.log("success", data);
  		window.location = "/teams";
  	}).fail(function(err){
  		console.log("err", err);

  	});   // end of AJAX

  });  // End of Delete Button Click  

}); // end of document ready;
