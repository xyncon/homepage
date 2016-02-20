///<reference path="jquery.d.ts" />

function bigLetter(selector:JQuery) {
    var text:string = selector.html();
    var res:string = "";
    for (var i = 0; i < text.length; i++) {
        if (isUpperCase(text[i])) {
            res += '<span class="capital-letter">' + text[i] + '</span>';
        } else {
            res += text[i].toUpperCase();
        }
    }
    selector.html(res);
}

function isUpperCase(test:string) {
    return !!/[A-Z-]/.exec(test[0]);
}

function upperCase(selector:JQuery) {
    var text:string = selector.html();
    var res:string = "";
    for (var i = 0; i < text.length; ++i) {
        res += text[i].toUpperCase();
    }
    selector.html(res);
}

$(function(){
    $(".cap").each(function() {
      bigLetter($(this));
    });

    $(".uc").each(function() {
      upperCase($(this));
    });
});