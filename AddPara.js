/**
 * Created by a.gupta1409 on 04-04-2017.
 */
window.onload=function() {
    var editor = document.getElementById('editor');
    var txt = sessionStorage.getItem('edit');
    editor.innerHTML = txt == null ? "" : txt;

    editor.addEventListener('blur',function(){
        sessionStorage.setItem('edit',"<p>"+this.innerHTML+"</p>");
    })

}


function refresh() {
    sessionStorage.setItem('edit','');
}
