//Display data from CouchDB as a listview with links to individual pages
$('#view').on('pageinit', function(){
	$.couch.db("asd1305project").view("asd1305app/assignments", {
		success: function(data){
			//console.log(data);
			$('#savedList').empty();
			$.each(data.rows, function(index, assignments){
					//console.log(assignments);
					var fname = assignments.value.fname;
					var lname = assignments.value.lname;
					var email = assignments.value.email;
					var subject = assignments.value.subject;
					var datedue = assignments.value.date;
					var notes = assignments.value.notes;
					//console.log(datedue);
					$('#savedList').append(
						$('<li>').append(
							$('<a>').attr("href", "assignments.html?assignments=" + assignments.value.subject)
								.text(subject + ": " + datedue)
						)
					);
				});
				$('#savedList').listview('refresh');
		}
	});
});	

var urlVars = function(){
	var urlData = $($.mobile.activePage).data("url");
	var urlParts = urlData.split('?');
	var urlPairs = urlParts[1].split('&');
	var urlValues = {};
	for (var pair in urlPairs){
		var keyValue = urlPairs[pair].split('=');
		var key = decodeURIComponent(keyValue[0]);
		var value = decodeURIComponent(keyValue[1]);
		urlValues[key] = value;
		}
		return urlValues;
		//console.log(urlValues);
};

$(document).on('pageinit', '#assignments', function(){
	var assignment = urlVars()["assignment"];
	//var urlData = $(this).data("url"):
	console.log(assignment);		
});

//Save data from form into CouchDB function call
$('#submit').on('click', function (key){
    storeData();
});

//Function to save data into CouchDb
var storeData = function (){
    var userData = {};
    	userData._id = "assignment" + $('#_id').val();
        userData.fname = $('#fname').val();
        userData.lname = $('#lname').val();
        userData.email = $('#email').val();
        userData.subject = $('#subject').val();
        userData.datedue = $('#datedue').val();
        userData.notes = $('#notes').val();

    $.couch.db("asd1305project").saveDoc(userData, {
    	success: function(){
    		alert("Homework Added!");
    	}
    });
    
    console.log(userData);
};


/*
var urlVars = function(){
	var urlData = $($.mobile.activePage).data("url");
	var urlParts = urlData.split('?');
		var urlPairs = urlParts[1].split('&');
		var urlValues = {};
		for (var pair in urlPairs){
			var keyValue = urlPairs[pair].split('=');
			var key = decodeURIComponent(keyValue[0]);
			var value = decodeURIComponent(keyValue[1]);
			urlValues[key] = value;
		}
		return urlValues;
};

//Display data funciton
var displayData = function(){
    $("#savedList").empty();
        for (var i= 0, j=localStorage.length; i<j ; i++){
            var key = localStorage.key(i);
            var item = JSON.parse(localStorage.getItem(key));
            console.log(item);
            var makeSubList = $("<li></li>");
            var makeSubLi = $( "<h3>"+item.datedue+"</h3>"+
                "<p>"+item.fname+"</p>" +
                "<p>"+item.lname+"</p>"+
                "<p>"+item.email+"</p>" +
                "<p>"+item.subject+"</p>" +
                "<p>"+item.notes+"</p>");
            var makeLink = $("<a id='"+key+"'>Edit</a>");
            makeLink.on('click', function(){
               editAssignment();
            });
            makeLink.html(makeSubLi);
            makeSubList.append(makeLink).appendTo("#savedList");
            $("#savedList").listview("refresh");
        };
};

//Function to delete a single assignment
$('#delete').on('click', function(){
  $.couch.db("asd1305project")removeDoc({
  	_id : id,
  	_rev : rev
  	},{
  	success: function(){
  		alert("Assignment was deleted!");
  	}
  })
});
*/