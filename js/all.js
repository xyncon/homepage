function bigLetter(selector) {
    var text = selector.html();
    var res = "";
    for (var i = 0; i < text.length; i++) {
        if (isUpperCase(text[i])) {
            res += '<span class="capital-letter">' + text[i] + '</span>';
        }
        else {
            res += text[i].toUpperCase();
        }
    }
    selector.html(res);
}
function isUpperCase(test) {
    return !!/[A-Z-]/.exec(test[0]);
}
function upperCase(selector) {
    var text = selector.html();
    var res = "";
    for (var i = 0; i < text.length; ++i) {
        res += text[i].toUpperCase();
    }
    selector.html(res);
}
$(function () {
    $(".cap").each(function () {
        bigLetter($(this));
    });
    $(".uc").each(function () {
        upperCase($(this));
    });
});
//# sourceMappingURL=all.js.map