$('#home').on('pageinit', function(){
	//code needed for home page goes here

});	
	
$('#add').on('pageinit', function(){
		var 	myAddForm = $('#additemform'),
				errorLink = $('#errorlinks'),
				defaultData= $('jsondata')
		;
                
	myAddForm.validate({
		invalidHandler: function(form, validator) {
                       errorLink.click();
		       var html ='';
                       for (var key in validator.submitted){
				var label = $('label[for^="'+ key +'"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');
				var fieldName = legend.length ? legend.text() : label.text();
				html += '<li>'+ fieldName +'</li>';
			};
			console.log(fieldName);
			$("#usererrors ul").html(html);
		},
			submitHandler: function() {
                                var itemData = myAddForm.serializeArray();
                                parseAddForm(itemData);
				alert("Homework Added!");
                                }
        });
	//any other code needed for addItem page goes here
	
		// Save user data to Local Storage
		var parseAddForm = function(itemData){
			var key		= Math.floor(Math.random()*100000001);
			localStorage.setItem(key, JSON.stringify(itemData));
			console.log(itemData);
		};
		// Display data function
		var autofillData = function (itemData){
			for (var n in json){
			var id = Math.floor(Math.random()*100000001);
				localStorage.setItem(id, JSON.stringify(json[n]))
			}
		};
});

	//The functions below can go inside or outside the pageinit function for the page in which it is needed.

	
	
	

	var deleteItem = function (){
		
	};

	var clearLocal = function(){

	};