$(document).ready(function () {
    twoByTwo();

    pageLoadValues();
    VisibleFalseImages();
    hideInputs();

    $('#im1').hide();
    $('#im2').hide();
    $('#im3').hide();
    $('#im4').hide();
    
});
 

function twoByTwo() 
{
   var genarateTag = "";
    genarateTag += "<div class='card border-0' style='background-color:  #7acdfe; font-size: 13px;' >";
    genarateTag += "<table >";
    for (let tr = 0; tr < 3; tr++) {
        genarateTag += "  <tr id='tbtTR"+tr+"'  >";
        for (let td = 0; td < 3; td++) {
            genarateTag += "      <td id='tbtTR"+tr+"TD"+td+"'  class='"+(tr != 0 && td != 0 ?'border':'')+"'  style='"+(tr != 0 && td != 0 ?'width:100px; height:80px;':'width:20px; height:5px;')+"' >";
            if(tr==0 && td==0){
                continue;
            }
                if(tr==0 || td==0)
                {
                    genarateTag += "<div class='row'>";
                    genarateTag += "<input type='number' min='1' max='40' id='TR"+tr+"TD"+td+"' onchange='changeSize(this)' class='form-control form-control-sm' style='"+(tr != 0 && td != 0 ?'':'width:45px; font-size: 10px; height:10px;')+"' value='"+(parseFloat(tr) +parseFloat(td) +1) +"' />";
                   if((tr== 0 && td==1)||tr== 1 && td==0)
                    genarateTag += "<input type='text' id='LTR"+tr+"TD"+td+"' onchange='changeSize(this)' class='form-control  form-control-sm' style='"+(tr != 0 && td != 0 ?'':'width:26px; font-size: 10px; height:10px;')+"' value='x' />";
                    genarateTag += "</div>";
                } else{
                    genarateTag += "<label class='d-flex justify-content-center' id='TR"+tr+"TD"+td+"'  >TR"+tr+"TD"+td+"</label>";
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

$('#TR1TD2').text('('+$('#TR0TD2').val()+') ('+$('#TR1TD0').val()+'' + $('#LTR0TD1').val()+')');

$('#TR2TD1').text('('+$('#TR0TD1').val()+'' + $('#LTR0TD1').val()+')  ('+($('#TR2TD0').val()+')'));

$('#TR2TD2').text('('+$('#TR0TD2').val()+')'+'('+$('#TR2TD0').val()+')');




// $('#TR1TD1').text('');
// $('#TR1TD1').append((parseFloat($('#TR1TD0').val())*parseFloat($('#TR0TD1').val())))
// .append($('#LTR1TD0').val()+'<sup>2</sup>' );

// $('#TR1TD2').text('');
// $('#TR1TD2').append((parseFloat($('#TR1TD0').val())*parseFloat($('#TR0TD2').val()))).append($('#LTR1TD0').val());


// $('#TR2TD1').text('');
// $('#TR2TD1').append((parseFloat($('#TR0TD1').val())*parseFloat($('#TR2TD0').val()))).append($('#LTR1TD0').val());

// $('#TR2TD2').text('');
//  $('#TR2TD2').append(parseFloat($('#TR2TD0').val())*parseFloat($('#TR0TD2').val()));


$('#num1').text('('+($('#TR0TD1').val()+'' + $('#LTR1TD0').val())+') ');
$('#num2').text('('+$('#TR0TD2').val()+') ');

$('#num3').text('('+($('#TR1TD0').val()+'' + $('#LTR1TD0').val())+') ');
$('#num4').text('('+$('#TR2TD0').val()+') ');

$('#Acol').text('('+($('#TR1TD0').val()+'' + $('#LTR1TD0').val())+'+'+$('#TR2TD0').val()+') ');
$('#Arow').text('('+($('#TR0TD1').val()+'' + $('#LTR1TD0').val())+'+'+$('#TR0TD2').val()+') ');

$('#Acol1').text('('+($('#TR1TD0').val()+'' + $('#LTR1TD0').val())+' + '+$('#TR2TD0').val()+') ');
$('#Arow1').text('('+($('#TR0TD1').val()+'' + $('#LTR1TD0').val())+' + '+$('#TR0TD2').val()+') ');

$('#Acol2').text('('+($('#TR1TD0').val()+'' + $('#LTR1TD0').val())+' + '+$('#TR2TD0').val()+') ');
$('#Arow2').text('('+($('#TR0TD1').val()+'' + $('#LTR1TD0').val())+' + '+$('#TR0TD2').val()+') ');


$('#Ans6').text('('+($('#TR0TD1').val()+'' + $('#LTR1TD0').val())+' + '+$('#TR0TD2').val()+') ('+($('#TR1TD0').val()+'' + $('#LTR1TD0').val())+' + '+$('#TR2TD0').val()+') ');

$('#Ans2').text('('+($('#TR0TD1').val()+'' + $('#LTR1TD0').val())+')('+($('#TR1TD0').val()+'' + $('#LTR1TD0').val())+') + ('+($('#TR0TD1').val()+'' + $('#LTR1TD0').val())+')('+$('#TR2TD0').val()+') + ('+$('#TR0TD2').val()+')('+($('#TR1TD0').val()+'' + $('#LTR1TD0').val())+') + ('+$('#TR0TD2').val()+')('+($('#TR2TD0').val())+')');



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



$('#Ans7').text('');
$('#Ans7').append((parseFloat($('#TR1TD0').val())*parseFloat($('#TR0TD1').val())))
.append($('#LTR1TD0').val()+'<sup>2</sup>' )
.append(' + ')
.append((parseFloat($('#TR0TD1').val())*parseFloat($('#TR2TD0').val()))+(parseFloat($('#TR1TD0').val())*parseFloat($('#TR0TD2').val()))).append($('#LTR1TD0').val())
.append(' + ')
.append(parseFloat($('#TR2TD0').val())*parseFloat($('#TR0TD2').val()));



  }

  function pageLoadValues(){
    $('#TR0TD1').val(3);
    $('#TR0TD2').val(4);
    $('#TR1TD0').val(5);
    $('#TR2TD0').val(2);
    
    formula();
}

   function hideInputs(){
    $('#TR0TD1').hide();
    $('#LTR0TD1').hide();
    $('#TR0TD2').hide();
    $('#TR1TD0').hide();
    $('#LTR1TD0').hide();
    $('#TR2TD0').hide();
    }

    function VisibleFalseImages(){
       
     }
     
     function VisibleTrueImages(){
         
      }

    function next(e){

        e.preventDefault();
        var inputvalue =   $('#anum').val();
        var generatedvalue =   (parseFloat($('#TR0TD1').val())*parseFloat($('#TR2TD0').val()))+(parseFloat($('#TR1TD0').val())*parseFloat($('#TR0TD2').val()));
    
        $('#im1').hide();
        $('#im2').hide();
        $('#im3').hide();
        $('#im4').hide();
       
        if(inputvalue == generatedvalue){
            $('#im1').show();
            new Audio("../audio/ha.mp3").play();
            $('#im3').hide();
            $('#im4').show();
        }
        else{
            $('#im2').show();
            new Audio("../audio/sa.mp3").play();
            $('#im3').hide();
            $('#im4').show();
        }
    
    }
