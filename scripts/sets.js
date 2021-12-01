var selectedSection = 'A';
$(document).ready(function () {


    $('#dropDownType').change(function (e) {
        check($('#dropDownType').val());
    });

    $('#btnSetsReset').click(function (e) {
        location.reload();
    });
});


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
