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
            var makeSubList = $("<div></div>");
            var makeSubLi = $( "<h3>"+item.datedue[1].val+"</h3>"+
                "<p>"+item.fname[1].val+"</p>" +
                "<p>"+item.lname[1].val+"</p>"+
                "<p>"+item.email[1].val+"</p>" +
                "<p>"+item.subject[1].val+"</p>" +
                "<p>"+item.notes[1].val+"</p>" );
            var makeLink = $("<a href='#' id='"+key+"'>Edit</a>");
            makeLink.on('click', function(){
               // console.log("This is my key: "+this.id);
            });
            makeLink.html(makeSubLi);
            makeSubList.append(makeLink).appendTo("#savedList");
        }; // end for loop
        $("ul").listview('refresh');
    });  // end storage.on

//Function to add json data 
$('#loadjson').on('click', function(){
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