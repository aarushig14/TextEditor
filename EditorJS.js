/**
 * Created by a.gupta1409 on 03-04-2017.
 */
cnt = 1;
function addpara(event,element) {

    var editor = document.getElementById('editor');
    console.log("editor" + editor);


    if (event.keyCode === 13) {
        var lastchild = editor.lastElementChild;
        var tag = document.createElement("p");
        tag.id = "para" + cnt;
        cnt++;
        var text = editor.innerHTML;
        if(lastchild == null){
            editor.innerHTML = "<p id = 'para1' >"+editor.innerHTML+"</p>";
            return;
        }
        text = lastchild.innerHTML;
        var child = document.createTextNode(text + "\n");
        console.log(child);
        tag.appendChild(child);
        editor.replaceChild(tag,editor.lastElementChild);
        console.log(editor.innerHTML);
    }
}

function refresh(){
    var editor = document.getElementById('editor');
    editor.innerHTML = "<p id = 'para0'>"+ editor.lastElementChild.innerHTML+"</p>";
}
