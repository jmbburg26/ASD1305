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

/*
$(document).on('click', '#add', function(){
    var doc = {};
    $.couch.db("asdproject").saveDoc(doc, {
      success: function(data) {
        console.log(data);
      },
      error: function(status) {
          console.log(status);
      }
  });
});
//View Items Page
$(document).on('pageinit', '#view', function(){
  $.couch.db("asdproject").view("asdproject/course", {
    success: function(data){
    $('#savedList').empty();
      $.each(data.rows, function(index, value){
        var item = (value.value || value.doc);
        $('#savedList').append(
          $('<li>').append(
            $('<a>')
              .attr("href", "assignment.html?course=" + item.subject)
              .text(item.subject)
          )
        );
      });
      $('#savedList').listview('refresh');
    }
  });
});



$(add).on('click', '#save', function(){
    $.couch.db("asdproject/course").saveDoc(additemform, {
      success: function(data) {
        console.log(data);
      },
      error: function(status) {
          console.log(status);
      }
  });
});


var urlVars = function(data){
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
}

$(document).on('pageinit', '#assignment', function(){
  var subject = urlVars()["subject"];
  //console.log(subject);
  $.couch.db("asdproject").view("asdproject/workList", {
    key: "subject:" + subject
  });
});

*/