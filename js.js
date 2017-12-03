var btn = document.getElementsByClassName('button');
var btnLength = btn.length;

function btnloop(btn) {
    for (var a = 0; a < btnLength; a++) {
        alert(btn[0].innerText);
        alert(btn[1].innerText);
        alert(btn[2].innerText);
        alert(btn[3].innerText);
        alert(btn[4].innerText);
        break;
    }
}