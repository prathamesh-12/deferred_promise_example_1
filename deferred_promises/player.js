$(function() {

	var getPlayerInfo = function() {
		var deferred = new $.Deferred();

		$.ajax({
			url : 'player.json',
			dataType : 'json',
			success : deferred.resolve,
			error : deferred.reject
		});

		return deferred.promise();
	}

	var getScores = function() {
		var deferred = $.Deferred();

		$.ajax({
			url : 'scores.json',
			dataType : 'json',
			success : deferred.resolve,
			error : deferred.reject
		});

		return deferred.promise();
	}


	/*getPlayerInfo().done(function(data) {
		data && document.write(data.Player.captain);
	}).fail(function(err) {
		document.write("Something went WRONG!");
	});*/

	getPlayerInfo().then(function( data ) {
		data && document.write("captain name : "+ data.Player.captain+ "<br>");
		getScores().then(function(scores) {
			scores && document.write(scores.Player[1].name+" has scored "+scores.Player[1].runs+" runs");
		}, function() {
			document.write("Something went wrong in priniting scores!");
		})
	}, function() {
		document.write("Something went WRONG in getting Player info!");
	});

	
/*

	getPlayerInfo().then(function( result ) {
		result && document.write(result.Player.batsman[0]);
	}, function( error ) {
		document.write("Something went WRONG!");
	});*/
	

});