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


/*
$.ajax({    url      : "data.json",
			type     : "GET",
			dataType : "json",
			success  : function(data, status) {
				console.log(status, data);    
			}});
*/