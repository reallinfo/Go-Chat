var moment = require('moment');

// Jan 1st 1970 00:00:00 am -- Unix epoch

// var date = new Date();
// var month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
// console.log(month[date.getMonth()]);

// var date = moment();
// date.add(100,'year').subtract(10,'months');
// console.log(date.format('dddd, MMM Do YYYY, h:mm:ss a'));

// 11:46 am

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1508307668100;
var date = moment(createdAt);
console.log(date.format('h:mm:ss a'));

