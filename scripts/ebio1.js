var audio = new Audio("../audio/seta.m4a");
var number =100;
$(document).ready(function () {
    twoByTwo();

    pageLoadValues();

    
    $('#Ans1').hide();
    $('#Ans2').hide();
    $('#Ans3').hide();
    $('#Ans4').hide();
    $('#imgImage2').css('visibility', 'hidden');

    $("#imgImage").attr("src","../Images/aa1.png");

    $('#divAnswer').hide();
    
    
  $('#imgImage2').click(function () {
    debugger;
    $("#imgImage").css('visibility', 'hidden');
    $('#divAnswer').show();
        $('#Ans1').show();
    $("#imgImage2").css("background-image","");
    $("#imgImage2").attr("src","../Images/next1.png");
     $('#dragtarget1').css('visibility', 'visible');
     $('#btnPlay').css('visibility', 'hidden');
        
   

    if(number==0){
        $("#imgImage2").css("background-image","../Images/next1.png");
        $('#Ans2').show();
            $('#dragtarget1').css('visibility', 'visible');
            $('#dragtarget2').css('visibility', 'visible');
            new Audio("../audio/two.m4a").play();
            number=4;
    }
    else if(number == 4){
        $('#Ans3').show();
       
    $("#imgImage2").css("background-image","../Images/next1.png");
    new Audio("../audio/four.m4a").play();
        number=6;
    }
    else if(number == 6){
        $('#Ans4').show();
        $("#imgImage2").css("visibility","hidden");
        new Audio("../audio/six.m4a").play();
    
    }
  
   
    else{
      //  $("#imgImage").attr("src","../Images/aa1.png");
    }
    if(number == 100){
        new Audio("../audio/one.m4a").play();
    number = 0;
    $('#imgImage2').css('background-image', 'url(../Images/try.png)');
}
});

});
  $("#txtMattrixNumber2").change(function () {
        twoByTwo();
    });

    

  $('#dropDownType').change(function (e) {
      check($('#dropDownType').val());
  });

  $('#btnSetsReset').click(function (e) {
      location.reload();
  });
  

function twoByTwo() 
{
   var genarateTag = "";
    genarateTag += "<div class='card card-body bg-info' >";
    genarateTag += "<table >";
    for (let tr = 0; tr < 3; tr++) {
        genarateTag += "  <tr id='tbtTR"+tr+"'  >";
        for (let td = 0; td < 3; td++) {
            genarateTag += "      <td id='tbtTR"+tr+"TD"+td+"'  class='"+(tr != 0 && td != 0 ?'border':'')+"'  style='"+(tr != 0 && td != 0 ?'width:100px; height:100px;':'width:30px; height:5px;')+"' >";
            if(tr==0 && td==0)
                continue;
                if(tr==0 || td==0)
                {
                    genarateTag += "<div class='row'>";
                    genarateTag += "<input type='text' id='TR"+tr+"TD"+td+"' onchange='changeSize(this)' class='form-control form-control-sm' style='"+(tr != 0 && td != 0 ?'':'width:30px; height:10px;')+"' value='"+(parseFloat(tr) +parseFloat(td) +1) +"' />";
                   if((tr== 0 && td==1)||tr== 1 && td==0)
                    //genarateTag += "<input type='text' id='LTR"+tr+"TD"+td+"' onchange='changeSize(this)' class='form-control form-control-sm' style='"+(tr != 0 && td != 0 ?'':'width:30px; height:10px;')+"' value='x' />";
                    genarateTag += "<select  id='LTR"+tr+"TD"+td+"' onchange='changeSize(this)' class='form-control form-control-sm' style='"+(tr != 0 && td != 0 ?'':'width:30px; height:10px;')+"'  ><option select value='X'>X</option><option select value=''></option>";
                    genarateTag += "</div>";
                } else{
                    genarateTag += "<label id='TR"+tr+"TD"+td+"'  >TR"+tr+"TD"+td+"</label>";
                }
            genarateTag += "      </td>";
        }
        genarateTag += "  </tr>";
    }
    genarateTag += "</table>";
    genarateTag += "</div>";
    $('#divGen').text("");
    $('#divGen').append(genarateTag);
    formula();
  }

  function changeSize(controle) {
      debugger
      if(controle.id == "TR1TD0" || controle.id == "TR2TD0"){
          var tr1=parseFloat($('#TR1TD0').val())+parseFloat($('#TR2TD0').val());
          var td1Pr = (parseFloat($('#TR1TD0').val()) / tr1)*100;
          var td2Pr = (parseFloat($('#TR2TD0').val()) / tr1)*100;
      $('#tbtTR1TD1').css('height',(2*td1Pr) +'px');
      $('#tbtTR1TD2').css('height',(2*td1Pr) +'px');

      $('#tbtTR2TD1').css('height',(2*td2Pr) +'px');
      $('#tbtTR2TD2').css('height',(2*td2Pr) +'px');

    
    }
    if(controle.id == "TR0TD1" || controle.id == "TR0TD2"){
        var td1=parseFloat($('#TR0TD1').val())+parseFloat($('#TR0TD2').val());
        var tr1Pr = (parseFloat($('#TR0TD1').val()) / td1)*100;
        var tr2Pr = (parseFloat($('#TR0TD2').val()) / td1)*100;

        $('#tbtTR1TD1').css('width',(2*tr1Pr) +'px');
        $('#tbtTR1TD2').css('width',(2*tr2Pr) +'px');

        $('#tbtTR2TD1').css('width',(2*tr1Pr) +'px');
        $('#tbtTR2TD2').css('width',(2*tr2Pr) +'px');
      }

      formula();

  }
  function formula() {
       //formula call
var val1 = parseFloat($('#TR0TD1').val())
var val2 = parseFloat($('#TR1TD0').val())
var val3 = parseFloat($('#TR0TD2').val())
var val4 = parseFloat($('#TR2TD0').val())
$('#TR1TD1').text('('+($('#TR0TD1').val()+'' + $('#LTR1TD0').val())+')('+$('#TR1TD0').val()+'' + $('#LTR0TD1').val()+')');
$('#TR1TD2').text('('+($('#TR0TD1').val()+'' + $('#LTR1TD0').val())+')('+$('#TR0TD2').val()+')');
$('#TR2TD1').text('('+($('#TR2TD0').val()+')('+$('#TR0TD1').val()+'' + $('#LTR0TD1').val()+')'));
$('#TR2TD2').text('('+$('#TR0TD2').val()+')'+'('+$('#TR2TD0').val()+')');

$('#Ans1').text('('+($('#TR0TD1').val()+'' + $('#LTR1TD0').val())+' + '+$('#TR0TD2').val()+') ('+($('#TR1TD0').val()+'' + $('#LTR1TD0').val())+' + '+$('#TR2TD0').val()+') ');
$('#Ans2').text('('+($('#TR0TD1').val()+'' + $('#LTR1TD0').val())+')('+($('#TR1TD0').val()+'' + $('#LTR1TD0').val())+') + ('+($('#TR0TD1').val()+'' + $('#LTR1TD0').val())+')('+$('#TR2TD0').val()+') + ('+($('#TR1TD0').val()+'' + $('#LTR1TD0').val())+')('+$('#TR0TD2').val()+') + ('+($('#TR2TD0').val())+')('+$('#TR0TD2').val()+')');
$('#Ans3').text('');
$('#Ans3').append((parseFloat($('#TR1TD0').val())*parseFloat($('#TR0TD1').val())))
.append($('#LTR1TD0').val()+'<sup>2</sup>' )
.append(' + ')
.append((parseFloat($('#TR0TD1').val())*parseFloat($('#TR2TD0').val()))).append($('#LTR1TD0').val())
.append(' + ')
.append((parseFloat($('#TR1TD0').val())*parseFloat($('#TR0TD2').val()))).append($('#LTR1TD0').val())
.append(' + ')
.append(parseFloat($('#TR2TD0').val())*parseFloat($('#TR0TD2').val()));

$('#Ans4').text('');
$('#Ans4').append((parseFloat($('#TR1TD0').val())*parseFloat($('#TR0TD1').val())))
.append($('#LTR1TD0').val()+'<sup>2</sup>' )
.append(' + ')
.append((parseFloat($('#TR0TD1').val())*parseFloat($('#TR2TD0').val()))+(parseFloat($('#TR1TD0').val())*parseFloat($('#TR0TD2').val()))).append($('#LTR1TD0').val())
.append(' + ')
.append(parseFloat($('#TR2TD0').val())*parseFloat($('#TR0TD2').val()));

  }

  
function paly(){
    var play = $('#btnPlay').text();
    if(play == "Play"){
        audio.play();
        $('#btnPlay').text("Pause");
        setTimeout(function(){  
           
        $('#imgImage2').css('visibility', 'visible');
        $('#imgImage2').css('background-image', 'url(../Images/try.png)');
        
       // $('#btnPlay').css('visibility', 'hidden');

        }, 500);
       
    }
    else{
        audio.pause();
        $('#btnPlay').text("Play");
    }
}

function pageLoadValues(){
    $('#TR0TD1').val(2);
    $('#TR0TD2').val(3);
    $('#TR1TD0').val(4);
    $('#TR2TD0').val(5);
    formula();
}