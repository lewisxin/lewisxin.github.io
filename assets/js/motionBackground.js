document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
        dotColor: '#C5C1C0',
        lineColor: '#C5C1C0'
    });
    var intro = document.getElementById('intro');
    intro.style.marginTop = -intro.offsetHeight / 2 + 'px';
}, false);