"use strict";

/**
 * Form Validation
 */
$(document).ready(function () {
    $('#msg-sent-alert').hide();
    var textarea = $('.long-text');
    var email = $('#email');
    var sendBtn = $('#send-btn');
    var name = $('#name');
    // textarea auto change rows, display word count
    textarea.on('input', function (event) {
        var val = textarea.val();
        var rows = calculateRows(val);
        var wordCount = val.length
        textarea.attr('rows', rows);
        $('#word-count').text(wordCount);
        if (wordCount >= 250) {
            $('#word-count-container').css('color', 'rgba(218, 4, 40, 0.87)');
        } else {
            $('#word-count-container').css('color', 'initial');
        }
    });
    // email validation
    email.on('input', function (event) {
        updateValidInputCSS(email, 'email')
    });

    // name validation
    name.on('input', function (event) {
        updateValidInputCSS(name, 'name')
    });

    sendBtn.click(function (event) {
        event.preventDefault();
        // Form validation
        if (isValidName() && isValidEmail()) {
            $('#msg-form').slideToggle('slow');
            if ($('#msg-sent-alert').is(':visible')) {
                $('#msg-sent-alert').hide()
            } else {
                $('#msg-sent-alert').show()
            }
        } else {
            var htmlStr = ''
            if (!isValidName() && !isValidEmail()) {
                htmlStr = `<strong>Oops!</strong> Please check your name and email`;
                email.css('border-color', 'rgba(218, 4, 40, 0.87)');
                email.css('color', 'rgba(218, 4, 40, 0.87)');
                name.css('border-color', 'rgba(218, 4, 40, 0.87)');
                name.css('color', 'rgba(218, 4, 40, 0.87)');
            } else if (!isValidName()) {
                htmlStr = `<strong>Oops!</strong> Please fill in your name`;
                name.css('border-color', 'rgba(218, 4, 40, 0.87)');
                name.css('color', 'rgba(218, 4, 40, 0.87)');
            } else {
                htmlStr = `<strong>Oops!</strong> please check your email if it is in the correct format`;
                email.css('border-color', 'rgba(218, 4, 40, 0.87)');
                email.css('color', 'rgba(218, 4, 40, 0.87)');
            }
            $('.alert-danger').html(htmlStr);
            $('.alert-danger').css('transition', 'opacity 0.5s');
            $('.alert-danger').css('transition', 'padding 0.5s');
            $('.alert-danger').css('padding', '5px');
            $('.alert-danger').css('opacity', '1');
        }
    })

})

/**
 * Helper function for calculating textarea rows
 */
var calculateRows = function (val) {
    return (val.match(/\n/g) || []).length + 1;
}

var isValidName = function () {
    return ($('#name').val() != '' && $('#name').val() != null && $('#name').val() != undefined);
}

var isValidEmail = function () {
    var email = $('#email').val();
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

var updateValidInputCSS = function (el, type) {
    if ((type == 'email' && !isValidEmail()) || type == 'name' && !isValidName()) {
        el.css('border-color', 'rgba(218, 4, 40, 0.87)');
        el.css('color', 'rgba(218, 4, 40, 0.87)');
    } else {
        el.focusout(function () {
            el.css('border-color', '#C5C1C0');
            el.css('color', '#848484');
        })
        el.focus(function () {
            el.css('border-color', '#F7CE3E');
            el.css('color', 'rgb(222, 171, 46)');
        })
        el.css('border-color', '#F7CE3E');
        el.css('color', 'rgb(222, 171, 46)');
        if(isValidEmail() && isValidName()){
            $('.alert-danger').css('padding', '0');
            $('.alert-danger').css('opacity', '0');
        }
    }
}