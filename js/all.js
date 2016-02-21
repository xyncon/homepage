function bigLetter(selector) {
    var text = selector.html();
    var res = '';
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
function toggleMenu() {
    $('.menu').toggle();
}
function navigate(chosenMenuElem) {
    $('.menu > ul > li').siblings().each(function () {
        $(this).removeClass('active');
    });
    chosenMenuElem.addClass('active');
}
$(function () {
    $('.cap').each(function () {
        bigLetter($(this));
    });
    $('.menu').hide();
    $('.menu-button').on('click', function () {
        toggleMenu();
    });
    $('.menu > ul > li').on('click', function () {
        navigate($(this));
    });
});
//# sourceMappingURL=all.js.map