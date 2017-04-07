/**
 * Created by a.gupta1409 on 07-04-2017.
 */

var tooltip = {
    show: function (e) {
        console.log("show");
        var elem = document.createElement('span');
        elem.className = 'tooltip';
        elem.onblur = function () {
            document.querySelector('.tooltip').remove();
        }
        addButton(elem);
        e.target.appendChild(elem);
        e.target._spanRef = elem;

    }
}

function formatting(e){
    console.log("dblCLick");
    tooltip.show(e);
}

function addButton(elem) {

    var editor = document.getElementById('editor');

    var div = document.createElement('div');
    div.className = 'btn-group';
    var bold = document.createElement('button');
    bold.innerHTML = 'B';
    bold.id = 'bold';

    bold.onclick = function (e) {
        console.log("bold")
        editor.focus();
        document.execCommand("bold", false, null);
        document.querySelector('.tooltip').remove();
    }

    div.appendChild(bold);

    var underline = document.createElement('button');
    underline.innerHTML = 'U';
    underline.id = 'underline';

    underline.onclick = function (e) {
        console.log("underline")
        editor.focus();
        document.execCommand('underline',false,null);
        document.querySelector('.tooltip').remove();

    }

    div.appendChild(underline);

    var red = document.createElement('button');
    red.innerHTML = 'RED';
    red.id = 'red';
    red.onclick = function (e) {
        console.log("red")
        editor.focus();
        document.execCommand('forecolor', false, 'red');
        document.querySelector('.tooltip').remove();

    }
    div.appendChild(red);




    elem.appendChild(div);
}