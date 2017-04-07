/**
 * Created by a.gupta1409 on 07-04-2017.
 */

function dblclick(e){
    var s = document.getSelection();
    var range = s.getRangeAt(0);
    var node = s.anchorNode
    var text = e.target.innerHTML ;
    var str= text.substring(0,range.startOffset) + "<b>" + range.toString() + "</b>" + text.substring(range.endOffset);
    e.target.innerHTML = str;
    console.log(str);

    var element = document.createElement('span');


}

var tooltip={
    showtip:function () {

    },
    hidetip: function () {

    }
}