"use strict";

$(document).ready(function () {
    var date = new Date();
    $('.footer-info').html('&copy; Liu Xin &#183; Lewis | ' + date.getDate() + ' ' + translateMonth(date.getMonth()) + ' ' + date.getFullYear())
})

var translateMonth = function (monthInNum) {
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return month[monthInNum];
}