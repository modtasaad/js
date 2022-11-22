var t =prompt("enter the time");
hours =parseInt(t);
var AmOrPM = hours >=12?'PM' : 'AM';
hours = (hours%12) || 12;
var lastTime = hours+" : "+"00"+" "+AmOrPM;
alert(lastTime);

//  function 

// function tConvert (time) {
//     time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
//     if (time.length > 1) { // If time format correct
//       time = time.slice (1);  // Remove full string match value
//       time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
//       time[0] = +time[0] % 12 || 12; // Adjust hours
//     }
//     return time.join (''); // return adjusted time or original string
//   }
//      var ti = prompt("enter the time");
//  alert( tConvert (ti));
