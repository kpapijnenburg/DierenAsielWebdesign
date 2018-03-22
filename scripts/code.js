function OnReady() {
    console.log('Pagina geladen, DOM klaar voor gebruik.');

    $("#naam").focus(function () {
        $('#hidden').show();
    });

    $("#naam").blur(function () {
        $('#hidden').hide();
    });
}

$(document).ready(OnReady);







