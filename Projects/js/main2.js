//Save data from form into local storage function
$('#submit').on('click', function (key){
    if(!key){
      var userValues    = Math.floor(Math.random()*100000001);
    }else{
      userValues = key;
    }
	  var userData = {};
	      userData.fname = $('#fname').val();
	      userData.lname = $('#lname').val();
	      userData.email = $('#email').val();
	      userData.subject = $('#subject').val();
	      userData.datedue = $('#datedue').val();
	      userData.notes = $('#notes').val();

    localStorage.setItem(userValues, JSON.stringify(userData));
    alert("Homework Added!");
    console.log(userData);
});

$('#view').on('pageinit', function(){
		if(localStorage.length === 0){
			alert("There are no assignments in Local Storage so default data has been added.");
			//defaultData();
		}
});

//Clear data from local storage function
$('#clear').on('click', function(){
	localStorage.clear();
	alert("All saved assignments have been cleared for Local Storage.");
});


/*
$.ajax({    url      : "data.json",
			type     : "GET",
			dataType : "json",
			success  : function(data, status) {
				console.log(status, data);    
			}});
*/