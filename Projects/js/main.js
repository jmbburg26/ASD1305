//Save data from form into local storage function
$('#submit').on('click', function (key){
      
    var key    = Math.floor(Math.random()*100000001);

    var userData = {};
        userData.fname = $('#fname').val();
        userData.lname = $('#lname').val();
        userData.email = $('#email').val();
        userData.subject = $('#subject').val();
        userData.datedue = $('#datedue').val();
        userData.notes = $('#notes').val();

    localStorage.setItem(key, JSON.stringify(userData));
    alert("Homework Added!");

    console.log(userData);
});

//Display data from local storage
$('#view').on('pageinit', function(){
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
                "<p>"+item.notes+"</p>" );
            var makeLink = $("<div id='"+key+"'>Edit</div>");
            makeLink.on('click', function(){
               console.log("This is my key: "+this.id);
            });
            makeLink.html(makeSubLi);
            makeSubList.append(makeLink).appendTo("#savedList");
            $("#savedList").listview("refresh");
        };
    });

$('#view').on('click', function(){
    $("#savedList").listview("refresh");
});

//Function to add json data 
$('#loadjson').on('click', function(){
    if(localStorage.length === 0){
      alert("Default data has been loaded into local storage.");
      defaultData();
    }
});

var defaultData = function(){
    $.ajax({
                url      : "data.json",
                type     : "GET",
                dataType : "json",
                success  : function(data, status) {
                    console.log(status, data);
                }
            });
};

//Clear data from local storage function
$('#clear').on('click', function(){
  localStorage.clear();
  var confirmDelete = confirm("Are you sure you want to delete the assignment?");
    if(confirmDelete){
      localStorage.removeItem(this.key);
      alert("All assignments have been deleted!");
      window.location.reload();
    }else{
      alert("Assignment was NOT deleted!");
    }
});