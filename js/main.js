"use strict";

document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
        dotColor: '#C5C1C0',
        lineColor: '#C5C1C0'
    });
    var intro = document.getElementById('intro');
    intro.style.marginTop = -intro.offsetHeight / 2 + 'px';
}, false);

$(document).ready(function () {
    var date = new Date();
    $('.footer-info').html('&copy; Liu Xin &#183; Lewis | ' + date.getDate() + ' ' + translateMonth(date.getMonth()) + ' ' + date.getFullYear())
})

var translateMonth = function (monthInNum) {
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return month[monthInNum];
}

