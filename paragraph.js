/**
 * Created by a.gupta1409 on 05-04-2017.
 */

cnt=0;
function addpara(event,element) {
    var editor = document.getElementById('editor');

    if(cnt == 0 && event.keyCode === 32){
        document.execCommand('formatBlock',false,'p');
    }
    if (event.keyCode === 13) {
        document.execCommand('formatBlock',false,'p');
        addDrag();
    }
}

function addDrag(){
    var paras = document.getElementsByTagName('p');
    var p = paras[paras.length-1];
    p = createP(p);
    cnt++;
    console.log(p.outerHTML);
}


function enddrag(e){
    console.log('enddrag');
    console.log(typeof e.target);
    e.target.parentNode.removeChild(e.target);
}

function dropped(e) {
    console.log("dropped");
    e.preventDefault();
    console.log(e.target);
    var p = createP();
    p.innerHTML = sessionStorage.getItem('draggeditem') ;
    e.target.parentNode.insertBefore(p,e.target);
}

function startdrag(e) {
    console.log("startdrag");
    console.log(typeof e.target.outerHTML);
    sessionStorage.setItem('draggeditem',e.target.outerHTML);
}

function createP(element){
    if(!element) {
        var p = document.createElement('p');
    }else{
        p = element;
    }

    p.id = "para"+cnt;
    p.setAttribute('draggable','true');
    p.addEventListener('dragstart',startdrag,false);
    p.addEventListener('dragenter',function(e){
        console.log("dragenter");
        e.preventDefault()
    },false);
    p.addEventListener('dragend',enddrag,false);
    p.addEventListener('dragover',function(e){
        e.preventDefault()
    },false);
    p.addEventListener('drop',dropped,false);
    p.addEventListener('dblclick',dblclick,false);
    return p;
}

function dblclick(e){
    var s = document.getSelection();
    var range = s.getRangeAt(0);
    var node = s.anchorNode
    var text = e.target.innerHTML ;
    var str= text.substring(0,range.startOffset) + "<b>" + range.toString() + "</b>" + text.substring(range.endOffset);
    e.target.innerHTML = str;
    console.log(str);
}



