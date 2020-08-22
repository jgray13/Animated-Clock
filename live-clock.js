function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
	
   document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
//var msg;    //message displayed to users
var today;        //todays date
var elMessage;       //the element that shows the message
function dateAndTime(today) {
	//declare variables within the function for local scope
	var day, date, month, year, dayNames, monthNames;	
	//create arrays to hold the names of days/months
	dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];
	monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];	
	//collect the parts of the date to show on the page
	day = dayNames[today.getDay()];
	date = today.getDate();
	month = monthNames[today.getMonth()];
	year = today.getFullYear();
	//create the message
	msg =  day + ' ' + date + ' ' + month + ' ' + year + '';
	return msg;
}
today = new Date();                                  //put today's date in variable
elMessage = document.getElementById('date');       //get the element
elMessage.innerHTML = dateAndTime(today);              //add the message