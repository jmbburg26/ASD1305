function(doc){
	if(doc._id.substr(0, 10) === "assignment"){
		emit(doc._id.substr(10), {
			"fame" : doc.fname,
			"lname" : doc.lname,
			"email" : doc.email,
			"subject" : doc.subject,
			"date" : doc.datedue,
			"notes" : doc.notes
		});
	}
};