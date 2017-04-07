/**
 * Created by a.gupta1409 on 07-04-2017.
 */


function done(){
    console.log("doIT");
    var editor = document.getElementById('editor');
    var regex1 = /\<a\>/g;
    var regex2 = /\<\/a\>/g;
    console.log(regex1);
    console.log(regex2);
    var arr1 = [];
    var arr2 = [];

    var x;

    while(true){
        x = regex1.exec(editor.innerText);
        console.log(x);
        if(x === null){
            break;
        }
        arr1.push(x.index)
    }
    console.log("arr1");
    console.log(arr1);

    var y;

    while(true){
        y = regex2.exec(editor.innerText);
        console.log(y);
        if(y === null){
            break;
        }
        arr2.push(y.index)
    }
    console.log("arr2");
    console.log(arr2)


    var link = document.getElementById('link');
    link.innerHTML = "";

    arr1.every(function(item,index,arr1){
        if(arr2[index+1] < item || arr1[index+1] < arr2[index]){
            alert("anchor tags are not appropriate")
            link.innerHTML = "";
            return false;
        }

        var a = document.createElement('a');
        a.href = "null";
        var str = editor.innerText.substr(item+3,arr2[index]-item-3);
        console.log(str);
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