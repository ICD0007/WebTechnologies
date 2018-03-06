console.log("Hey there");

/* Task 1: Hover navigation bar to make the box white and the text inside the box black*/

var color = document.querySelectorAll("ul.nav.navbar-nav li a");
for (var i = 0; i < color.length; i++) {
    var listitem = color[i];
    listitem.onmouseover = function () {
        this.style["background-color"] = "white";
        this.style.color = 'black';
    };
    listitem.onmouseout = function() {
        this.style.color = "white";
        this.style["background-color"] = '#383E4C';
    };
}

/* Task 2: Display all information when contact form user clicks submit*/

/* Task 3: Alert box if any field is missing or empty after clicking submit*/

var form = document.querySelector('form.contact-form');
form.onsubmit=function () {
    var field = document.getElementsByTagName("input");
    var result = new Array();
    var missing = new Array();
    for (var i = 0; i < field.length; i++) {
        if (field[i].value == "") {
            missing.push('Please fill in the empty' + ' ' + field[i].getAttribute("name") + ' ' + 'field');
        } else {
            result.push(field[i].getAttribute("name")+":"+ field[i].value);
        }
    }

    var textComment = document.querySelector('form textarea[name=message]');
    if (textComment.value == "") {
        missing.push('Please fill empty' + ' ' + textComment.getAttribute("name") + ' ' + 'field');
    }else{
        result.push(textComment.getAttribute("name")+':'+textComment.value);
    }
    alert(missing.join('\n'));
    alert(result.join('\n'));
}

/* Change color and text of green button when clicked*/

 var buttonGreen = document.getElementsByClassName("feature-content-link green-btn")[0];
    buttonGreen.onclick = function (){
        buttonGreen.innerHTML="Hello";
        buttonGreen.className="feature-content-link blue-btn";
}

/* Link a div button to your facebook or github profile*/
var fb =document.getElementsByClassName("external")[0];
   fb.onclick = function(){
       fb.href="https://github.com/patrbrun/WebTechnologies";
}