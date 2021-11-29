var selectedSection = 'A';
var audio = new Audio("../audio/sets0.m4a");
var number =100;

$(document).ready(function () {
    $('#imgImage2').css('visibility', 'hidden');
   VisibleTrueButtons();
   
 
  $("#imgImage").attr("src","../Images/sname.png");

    $('#dropDownType').change(function (e) {
        check($('#dropDownType').val());
    });

    $('#btnSetsReset').click(function (e) {
        location.reload();
    });
    
    $('#imgImage2').click(function () {
        $("#imgImage2").attr("src","../Images/next1.png");
        $("#imgImage").attr("src","../Images/aaa.png");
        var abc = $("#imgImage").attr("src");
        $('.example-table').css('background-image', 'url(../Images/SetA.png)');
       
        $('#dropDownType').val("A");
        VisibleFalseButtons();

        if(number==0){
            $("#imgImage").attr("src","../Images/s1.png");
            $('#dragtarget1').css('visibility', 'visible');
            $('.example-table').css('background-image', 'url(../Images/SetAUB_N.png)');
            new Audio("../audio/sets1.m4a").play();

            number=1;
        }
        else if(number == 1){
            $("#imgImage").attr("src","../Images/s2.png");
            $('#dragtarget1').css('visibility', 'visible');
            $('#dragtarget2').css('visibility', 'visible');
            $('.example-table').css('background-image', 'url(../Images/SetAA.png)');
            new Audio("../audio/sets2.m4a").play();
            number=4;
        }
        else if(number == 4){
            $("#imgImage").attr("src","../Images/s4.png");
            $('#dragtarget1').css('visibility', 'visible');
            $('#dragtarget2').css('visibility', 'visible');
            $('#dragtarget4').css('visibility', 'visible');
            $('.example-table').css('background-image', 'url(../Images/SetA^B.png)');
            new Audio("../audio/sets4.m4a").play();
            number=6;
        }
        else if(number == 6){
            $("#imgImage").attr("src","../Images/s6.png");
            $('#dragtarget1').css('visibility', 'visible');
            $('#dragtarget2').css('visibility', 'visible');
            $('#dragtarget4').css('visibility', 'visible');
            $('#dragtarget6').css('visibility', 'visible');
            $('.example-table').css('background-image', 'url(../Images/SetBB.png)');
            new Audio("../audio/sets6.m4a").play();
            number=8;
        }
        else if(number == 8){
            $("#imgImage").attr("src","../Images/ab1.png");
            $('#dragtarget1').css('visibility', 'visible');
            $('#dragtarget2').css('visibility', 'visible');
            $('#dragtarget4').css('visibility', 'visible');
            $('#dragtarget6').css('visibility', 'visible');
            $('.example-table').css('background-image', 'url(../Images/SetA.png)');
            $("#imgImage2").css("visibility","hidden");
            new Audio("../audio/AUBEX.m4a").play();
        }
       
        else{
          //  $("#imgImage").attr("src","../Images/aa1.png");
        }
        if(number == 100){
        new Audio("../audio/setssas.m4a").play();
        number = 0;
        }
    });
});

function selectSet() {
    selectedSection = 'B';
}

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);

}

function dragging(event) {
    //document.getElementById("demo").innerHTML = "The p element is being dragged";
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    check($('#dropDownType').val());
}

function check(action) {
    var text = "";
    if (action == 'A') {
        $('.example-table').css('background-image', 'url(../Images/SetA.png)');
        var list = document.getElementById('divSetA').children;
        for (var i = 0; i < list.length; i++) {
            var el = list[i].lastChild;
            text += el.textContent + " , ";
        }
        var list = document.getElementById('divSetA_B').children;
        for (var i = 0; i < list.length; i++) {
            var el = list[i].lastChild;
            text += el.textContent + " , ";
        }
        if (text != '')
            text = text.substring(0, text.length - 2);
        $('#btnA').text("A = { " + text + " }");
    } else if (action == 'B') {
        //B
        $('.example-table').css('background-image', 'url(../Images/SetB.png)');
        text = "";
        var list = document.getElementById('divSetB').children;
        for (var i = 0; i < list.length; i++) {
            var el = list[i].lastChild;
            text += el.textContent + " , ";
        }
        var list = document.getElementById('divSetA_B').children;
        for (var i = 0; i < list.length; i++) {
            var el = list[i].lastChild;
            text += el.textContent + " , ";
        }
        if (text != '')
            text = text.substring(0, text.length - 2);
        $('#btnA').text("B = { " + text + " }");
    } else if (action == 'AUB') {
        //AUB
        $('.example-table').css('background-image', 'url(../Images/SetAUB.png)');
        text = "";
        var list = document.getElementById('divSetA').children;
        for (var i = 0; i < list.length; i++) {
            var el = list[i].lastChild;
            text += el.textContent + " , ";
        }
        var list = document.getElementById('divSetB').children;
        for (var i = 0; i < list.length; i++) {
            var el = list[i].lastChild;
            text += el.textContent + " , ";
        }
        var list = document.getElementById('divSetA_B').children;
        for (var i = 0; i < list.length; i++) {
            var el = list[i].lastChild;
            text += el.textContent + " , ";
        }
        if (text != '')
            text = text.substring(0, text.length - 2);
        $('#btnA').text("AUB = { " + text + " }");

    } else if (action == 'A^B') {
        $('.example-table').css('background-image', 'url(../Images/SetA^B.png)'); text = "";
        text = "";
        var list = document.getElementById('divSetA_B').children;
        for (var i = 0; i < list.length; i++) {
            var el = list[i].lastChild;
            text += el.textContent + " , ";
        }
        if (text != '')
            text = text.substring(0, text.length - 2);
        $('#btnA').text("A^B = { " + text + " }");

    } else if (action == 'A_N') {
        //A'
        $('.example-table').css('background-image', "url(../Images/SetA_N.png)");
        text = "";
        var list = document.getElementById('tblMain').children;
        for (let tr = 0; tr < 3; tr++) {
            for (let td = 0; td < 5; td++) {
                for (var i = 0; i < list[0].children[tr].children[td].children.length; i++) {
                    if ((tr == 1 && td == 1) || tr == 1 && td == 2 || tr == 1 && td == 3)
                        continue
                    var el = list[0].children[tr].children[td].children[i].lastChild;
                    if (el != null)
                        text += el.textContent + " , ";
                }
            }
        }
        for (var i = 0; i < document.getElementById('divSetB').children.length; i++) {
            text += document.getElementById('divSetB').children[i].textContent + " , ";
        }
        if (text != '')
            text = text.substring(0, text.length - 2);
        $('#btnA').text("A' = { " + text + " }");
    } else if (action == 'B_N') {
        //B'
        $('.example-table').css('background-image', "url(../Images/SetB_N.png)");
        text = "";
        var list = document.getElementById('tblMain').children;
        for (let tr = 0; tr < 3; tr++) {
            for (let td = 0; td < 5; td++) {
                for (var i = 0; i < list[0].children[tr].children[td].children.length; i++) {

                    if ((tr == 1 && td == 1) || tr == 1 && td == 2 || tr == 1 && td == 3)
                        continue

                    var el = list[0].children[tr].children[td].children[0].lastChild;
                    if (el != null)
                        text += el.textContent + " , ";
                }
            }
        }
        for (var i = 0; i < document.getElementById('divSetA').children.length; i++) {
            text += document.getElementById('divSetA').children[i].textContent + " , ";
        }

        if (text != '')
            text = text.substring(0, text.length - 2);
        $('#btnA').text("B' = { " + text + " }");

    } else if (action == 'AUB_N') {
        //(AUB)'
        $('.example-table').css('background-image', "url(../Images/SetAUB_N.png)");
        text = "";
        var list = document.getElementById('tblMain').children;
        for (let tr = 0; tr < 3; tr++) {
            for (let td = 0; td < 5; td++) {
                for (var i = 0; i < list[0].children[tr].children[td].children.length; i++) {
                    if ((tr == 1 && td == 1) || (tr == 1 && td == 2) || tr == 1 && td == 3)
                        continue
                    var el = list[0].children[tr].children[td].children[i].lastChild;
                    if (el != null)
                        text += el.textContent + " , ";
                }
            }
        }
        if (text != '')
            text = text.substring(0, text.length - 2);
        $('#btnA').text("(AUB)' = { " + text + " }");

    } else if (action == 'A^B_N') {
        //(A^B)'
        $('.example-table').css('background-image', "url(../Images/SetA^B_N.png)");
        text = "";
        var list = document.getElementById('tblMain').children;
        for (let tr = 0; tr < 3; tr++) {
            for (let td = 0; td < 5; td++) {
                for (var i = 0; i < list[0].children[tr].children[td].children.length; i++) {
                    if ((tr == 1 && td == 2))
                        continue
                    var el = list[0].children[tr].children[td].children[i].lastChild;
                    if (el != null)
                        text += el.textContent + " , ";
                }
            }
        }
        if (text != '')
            text = text.substring(0, text.length - 2);
        $('#btnA').text("(A^B)' = { " + text + " }");

    }
}

function paly(){
    var play = $('#btnPlay').text();
    if(play == "Play"){
        audio.play();
      //  $('#btnPlay').text("Pause");
        setTimeout(function(){  
           
        $('#imgImage2').css('visibility', 'visible');
        $('#imgImage2').css('background-image', 'url(../Images/SetA.png)');
        
        $('#btnPlay').css('visibility', 'hidden');

        }, 23000);
       
    }
    else{
        audio.pause();
        $('#btnPlay').text("Play");
    }
}

function VisibleFalseButtons(){
   $('#dragtarget1').css('visibility', 'hidden');
   $('#dragtarget2').css('visibility', 'hidden');
   $('#dragtarget3').css('visibility', 'hidden');
   $('#dragtarget4').css('visibility', 'hidden');
   $('#dragtarget5').css('visibility', 'hidden');
   $('#dragtarget6').css('visibility', 'hidden');
   $('#dragtarget7').css('visibility', 'hidden');
   $('#dragtarget8').css('visibility', 'hidden');
}

function VisibleTrueButtons(){
    $('#dragtarget1').css('visibility', 'visible');
    $('#dragtarget2').css('visibility', 'visible');
    $('#dragtarget3').css('visibility', 'visible');
    $('#dragtarget4').css('visibility', 'visible');
    $('#dragtarget5').css('visibility', 'visible');
    $('#dragtarget6').css('visibility', 'visible');
    $('#dragtarget7').css('visibility', 'visible');
    $('#dragtarget8').css('visibility', 'visible');
 }