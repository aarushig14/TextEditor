/**
 * Created by a.gupta1409 on 05-04-2017.
 */

window.onload=function () {
    sessionStorage.removeItem('draggeditem');
    var editor = document.getElementById('editor');
    editor.innerHTML = null;
    editor.addEventListener('keypress',addpara,false);
    editor.addEventListener('click',handle,false);
    editor.addEventListener('dblclick',formatting,false);
    document.getElementById('title').innerHTML = null;

}

/* global variable cnt*/
cnt=0;

/* function to add paragraph on enter */
function addpara(event) {
    var editor = document.getElementById('editor');

    if(cnt == 0 && event.keyCode === 32){
        document.execCommand('formatBlock',false,'p');
    }
    if (event.keyCode === 13) {
        document.execCommand('formatBlock',false,'p');
        addDrag();
    }
}


/* function to add drag property in paragraph elements */
function addDrag(){
    var paras = document.getElementsByTagName('p');
    var p = paras[paras.length-1];
    p = createP(p);
    cnt++;
}

/* START DRAG */
function startdrag(e) {
    sessionStorage.setItem('draggeditem',e.target.outerHTML);
}

/* DROPPED */
function dropped(e) {
    e.preventDefault();
    var p = createP();
    p.innerHTML = sessionStorage.getItem('draggeditem') ;
    e.target.parentNode.insertBefore(p,e.target);
}

/* END DRAG */
function enddrag(e){
    e.target.parentNode.removeChild(e.target);
}

/* function to create element p with event listeners */
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
        e.preventDefault()
    },false);
    p.addEventListener('dragend',enddrag,false);
    p.addEventListener('dragover',function(e){
        e.preventDefault()
    },false);
    p.addEventListener('drop',dropped,false);
    return p;
}




