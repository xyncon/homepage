///<reference path="jquery.d.ts" />

// takes string from parameter wraps and wraps first letter with span 
// classed 'capital-letter'
function bigLetter(selector:JQuery) {
    var text:string = selector.html();
    var res:string = '';
    for (var i = 0; i < text.length; i++) {
        if (isUpperCase(text[i])) {
            res += '<span class="capital-letter">' + text[i] + '</span>';
        } else {
            res += text[i].toUpperCase();
        }
    }
    selector.html(res);
}

// returns true if parameter is upper case else false
function isUpperCase(test:string) {
    return !!/[A-Z-]/.exec(test[0]);
}

// toggles main navigation
function toggleMenu() {
    $('.menu').toggle();
}

// controlls navigation
function navigate(chosenMenuElem:JQuery) {
    $('.menu > ul > li').siblings().each(function() {
        $(this).removeClass('active')
    })
    chosenMenuElem.addClass('active');
}

$(function(){
    // oversizes first letter of string with class 'cap'
    $('.cap').each(function() {
        bigLetter($(this));
    });

    // hides main navigation initially
    $('.menu').hide();

    // show/hide main navigation
    $('.menu-button').on('click', function() {
        toggleMenu();
    })

    //
    $('.menu > ul > li').on('click', function() {
        navigate($(this));
    })
});