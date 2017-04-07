/**
 * Created by a.gupta1409 on 07-04-2017.
 */

/* function to be implemented on button DONE */
function done(){
    var editor = document.getElementById('editor');

    var regex1 = /\<a\>/g;
    var regex2 = /\<\/a\>/g;

    var arr1 = [];      /* arr1 holds index of <a> */
    var arr2 = [];      /* arr2 holds index of </a> */

    var x;

    while(true){
        x = regex1.exec(editor.innerText);
        if(x === null){
            break;
        }
        arr1.push(x.index)
    }

    var y;

    while(true){
        y = regex2.exec(editor.innerText);
        if(y === null){
            break;
        }
        arr2.push(y.index)
    }


    var link = document.getElementById('link');
    link.innerHTML = "";

    /* Adding links to the bottom of the page */
    arr1.every(function(item,index,arr1){
        if(arr2[index+1] < item || arr1[index+1] < arr2[index]){
            alert("anchor tags are not appropriate")
            link.innerHTML = "";
            return false;
        }

        var a = document.createElement('a');
        a.href = "null";
        var str = editor.innerText.substr(item+3,arr2[index]-item-3);
        var txt = document.createTextNode(str);
        if( (index+1)%2 === 0) {
            a.style.color = 'blue';
        }else{
            a.style.color = 'red';
        }

        a.appendChild(txt);
        link.appendChild(a);
        link.appendChild(document.createElement('br'));
        return true;
    });

}