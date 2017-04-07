/**
 * Created by a.gupta1409 on 07-04-2017.
 */

var tooltip = {
    show: function (e) {
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

/* function to implement tooltip with formatting options */
function formatting(e){
    if(window.getSelection().getRangeAt(0).toString()) {
        tooltip.show(e);
    }
}

/* function to add buttons to tooltip */
function addButton(elem) {

    var editor = document.getElementById('editor');

    var div = document.createElement('div');
    div.className = 'btn-group';

    /* BOLD */
    var bold = document.createElement('button');
    bold.innerHTML = 'B';
    bold.id = 'bold';
    bold.onclick = function (e) {
        editor.focus();
        document.execCommand("bold", false, null);
        document.querySelector('.tooltip').remove();
    }

    div.appendChild(bold);

    /* UNDERLINE */
    var underline = document.createElement('button');
    underline.innerHTML = 'U';
    underline.id = 'underline';
    underline.onclick = function (e) {
        editor.focus();
        document.execCommand('underline',false,null);
        document.querySelector('.tooltip').remove();

    }

    div.appendChild(underline);

    /* RED */
    var red = document.createElement('button');
    red.innerHTML = 'RED';
    red.id = 'red';
    red.onclick = function (e) {
        editor.focus();
        document.execCommand('forecolor', false, 'red');
        document.querySelector('.tooltip').remove();

    }
    div.appendChild(red);

    elem.appendChild(div);
}

/* function to handle click outside tootltip */
function handle(event) {
    var id = event.srcElement.id;
    var tooltip = document.querySelector('.tooltip');
    if(id=='bold' || id=='underline' || id=='red'){
    }else if(tooltip){
        tooltip.remove();
    }
}

