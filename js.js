var btn = document.getElementsByClassName('button');
var btnLength = btn.length;

function btnloop(btn) {
    for (var a = 0; a < btnLength; a++) {
        alert(btn[a].innerText);
    }
}