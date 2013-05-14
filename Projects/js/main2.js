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

var defaultData = $.ajax({
						    	url      : "js/data.js",
								type     : "GET",
								dataType : "json",
								success  : function(data, status) {
								console.log(status, data);    
							}});

$('#view').on('pageinit', function(){
		if(localStorage.length === 0){
			alert("There are no assignments in Local Storage so default data has been added.");
			//defaultData();
		}
});

//Clear data from local storage function
$('#clear').on('click', function(){
	localStorage.clear();
	var confirmDelete = confirm("Are you sure you want to delete the assignment?");
		if(confirmDelete){
			localStorage.removeItem(this.key);
			alert("Assignment was deleted!");
			window.location.reload();
		}else{
			alert("Assignment was NOT deleted!");
		}
});