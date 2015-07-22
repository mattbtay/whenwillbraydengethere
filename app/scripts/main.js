// jshint devel:true
$(document).ready(function(){

	timeCalculator();

	//instagram photos

	var userFeed = new Instafeed({
        get: 'user',
        userId: 2111454600,
        accessToken: '2111454600.467ede5.0e86225e49134a2d935e14c206904731',
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="panel panel-default"><div class="panel-body"><a href="{{link}}"><img class="img-responsive" src="{{image}}" /></a></div><div class="panel-footer">{{caption}}</div></div>'
    });

    userFeed.run();


});

function timeCalculator(){

	var today = moment().toISOString();
	var todayArray = moment(today).format("YYYY, MM, DD");
	var todayFinal = moment(todayArray, "YYYY, MM, DD").toArray();
	var birth = moment('2015-11-05', 'YYYY-MM-DD').toArray();
	console.log(todayFinal);
	//console.log(birth);

	var a = moment([2015, 10, 5]);
	var b = moment(todayFinal);
	var diffDays = a.diff(b, 'days');
	//console.log(difference); // 1

	$('#timeDays').html('Brayden Ray will be here in ' +  '<span>' + diffDays + '</span>' + ' days!');
	$('.twitter-share-button').attr('href', 'https://twitter.com/intent/tweet?text=Brayden%20will%20be%20here%20in%20' + diffDays + ' days!');
	//9 months in days 273.93

	// calc time left
	var daysLeft = parseInt(diffDays);
	var percentLeft = (daysLeft / 273.93) * 100;
	var percentComp = 100 - percentLeft;
	//console.log(daysLeft);
	//console.log(percentLeft);
	console.log(percentComp);

	setTimeout(function(){
	$('.progress-bar').css('width', Math.round(percentComp) + '%');

	},1500);

	setTimeout(function(){
		$('.stat p').html(Math.round(percentComp) + '%' + ' Complete');
	},1800);

	$('.progress-bar').attr('aria-valuenow', percentComp);
	$('.progress-bar span').html(percentComp + '%');



}

