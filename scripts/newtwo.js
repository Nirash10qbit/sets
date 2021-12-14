var audio = new Audio("../audio/eee.m4a");
var number =100;
$(document).ready(function () {
    twoByTwo();

    pageLoadValues();
    hideInputs();

    
    $('#Ans1').hide();
    $('#Ans2').hide();
    $('#Ans8').hide();
    $('#Ans9').hide();
    $('#Ans10').hide();
    $('#Ans4').hide();

    $('#bio').show();

    $('#dime').hide();
    $('#cal').hide();
    $('#total').hide();

    $('#first').hide();
    $('#second').hide();

    $('#exp').hide();

    $('#imgImage2').css('visibility', 'hidden');
    $('#imgImage3').css('visibility', 'hidden');


    $("#imgImage").attr("src","../Images/em1.png");
   
    $('#divAnswer').hide();
    
    
  $('#imgImage2').click(function () {
    debugger;
    $("#imgImage").css('visibility', 'hidden');
    $("#imgImage3").css('visibility', 'visible');
    $("#imgImage3").attr("src","../Images/idi.png");
    $('#exp').hide();
    $('#first').show();
    $('#second').show();
    $('#bio').hide();
    $('#dime').show();
    // $('#divAnswer').show();
    //    $('#Ans1').show();
    $("#imgImage2").css("background-image","");
    $("#imgImage2").attr("src","../Images/next1.png");
     $('#dragtarget1').css('visibility', 'visible');
     $('#btnPlay').css('visibility', 'hidden');
        
   

    if(number==0){
        $('#bio').hide();
        $("#imgImage2").css("background-image","../Images/next1.png");
        $('#dime').hide();
        $('#cal').show();
        $('#exp').show();
            $('#dragtarget1').css('visibility', 'visible');
            $('#dragtarget2').css('visibility', 'visible');
            new Audio("../audio/ea1.m4a").play();
            number=4;
    }
    else if(number == 4){
        $('#dime').hide();
        $('#Ans8').show();
        $('#Ans9').show();
        $('#Ans10').show();
        $('#exp').hide();
        $('#imgImage3').css('visibility', 'hidden');
    $("#imgImage2").css("background-image","../Images/next1.png");
    new Audio("../audio/ea2.m4a").play();
        number=6;
    }
    else if(number == 6){
        $('#dime').show();
        $('#Ans4').show();
        $('#total').show();
        $("#imgImage2").css("visibility","hidden");
        $('#imgImage3').css('visibility', 'hidden');
    
    }
  
   
    else{
      //  $("#imgImage").attr("src","../Images/aa1.png");
    }
    if(number == 100){
    number = 0;
    $('#bio').hide();
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

  
 $('#Acol3').text('('+($('#TR1TD0').val()+'' + $('#LTR1TD0').val())+' + '+$('#TR2TD0').val()+') ');
 $('#Arow1').text('('+($('#TR0TD1').val()+'' + $('#LTR1TD0').val())+' + '+$('#TR0TD2').val()+') ');
 
 
 
 $('#Ans6').text('('+($('#TR0TD1').val()+'' + $('#LTR1TD0').val())+' + '+$('#TR0TD2').val()+') ('+($('#TR1TD0').val()+'' + $('#LTR1TD0').val())+' + '+$('#TR2TD0').val()+') ');
 
 $('#Ans2').text('('+($('#TR0TD1').val()+'' + $('#LTR1TD0').val())+')('+($('#TR1TD0').val()+'' + $('#LTR1TD0').val())+') + ('+($('#TR0TD1').val()+'' + $('#LTR1TD0').val())+')('+$('#TR2TD0').val()+') + ('+$('#TR0TD2').val()+')('+($('#TR1TD0').val()+'' + $('#LTR1TD0').val())+') + ('+$('#TR0TD2').val()+')('+($('#TR2TD0').val())+')');
 
 

 $('#Ans8').text('');
 $('#Ans8').append((parseFloat($('#TR1TD0').val())*parseFloat($('#TR0TD1').val())))
 .append($('#LTR1TD0').val()+'<sup>2</sup>' )
 .append(' + ');

 $('#Ans9').text('');
 $('#Ans9').append((parseFloat($('#TR0TD1').val())*parseFloat($('#TR2TD0').val()))).append($('#LTR1TD0').val())
 .append(' + ')
 .append((parseFloat($('#TR1TD0').val())*parseFloat($('#TR0TD2').val()))).append($('#LTR1TD0').val());
 
 $('#Ans10').text('');
 $('#Ans10').append(' + ')
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

  
function paly(){
    var play = $('#btnPlay').text();
    if(play == "Play"){
        audio.play();
        $('#btnPlay').text("Pause");
        setTimeout(function(){  
           
        $('#imgImage2').css('visibility', 'visible');
        $('#imgImage2').css('background-image', 'url(../Images/try.png)');
        
       // $('#btnPlay').css('visibility', 'hidden');

        }, 6000);
       
    }
    else{
        audio.pause();
        $('#btnPlay').text("Play");
    }
}

function pageLoadValues(){
    $('#TR0TD1').val(2);
    $('#TR0TD2').val(3);
    $('#TR1TD0').val(1);
    $('#TR2TD0').val(2);
    formula();
}