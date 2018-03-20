function OnReady() {
    console.log('Pagina geladen, DOM klaar voor gebruik.');
    
}

$(document).ready(OnReady);

function hide() {
    var element = document.getElementById('hidden');
    element.style.visibility = 'hidden';
    console.log("unfocus")
}

function show() {
    var element = document.getElementById('hidden');
    element.style.visibility = 'visible';
    console.log("focus")
}

$("naam").focus(show());
$("naam").blur(hide());







