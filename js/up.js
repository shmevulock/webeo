/*PLAY UP / ir hacia arriba*/
$(document).ready(function(){
   
    $('.up').click(function(){
       
        $('body,html').animate({
           scrollTop:'0px' 
        }, 300);
        
    });
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
           $('.up').slideDown(300);
            
          
           }else{
               $('.up').slideUp(300);
               
           }
    });
    /*ICON WHATSAPP*/
      
    
   /* $(window).ready(function(){
       var x= $(window).width();
        alert(x);
    });*/
    /*-------------*/
    
    /*---------------------------------*/
    
    
    
               $('li').on('click',function(){
                   $(this).siblings().removeClass('activli');
                   $(this).addClass('activli');
               });
         
    
    
    
    
    
    
    
    /*Paginacion*/
    
      $("#ocultsec").click(function(){
                 document.getElementById("secpage30").style.display="flex";
                 document.getElementById("secpage31").style.display="flex";
                 document.getElementById("secpage32").style.display="flex";
                 document.getElementById("secpage20").style.display="none";
                 document.getElementById("secpage21").style.display="none";
                 document.getElementById("secpage22").style.display="none";
                 document.getElementById("secpage10").style.display="none";
                 document.getElementById("secpage11").style.display="none";
                 document.getElementById("secpage12").style.display="none";
                 document.getElementById("secpage26").style.display="none";
                 document.getElementById("secpage27").style.display="none";
                 document.getElementById("secpage28").style.display="none";
                 document.getElementById("secpage29").style.display="none";
                 document.getElementById("secpage33").style.display="none";
                 document.getElementById("secpage34").style.display="none";
                 document.getElementById("secpage35").style.display="none";
                 document.getElementById("secpage36").style.display="none";
                 document.getElementById("secpage37").style.display="none";
                 document.getElementById("secpage38").style.display="none";
                 
                
                
             
        });  
            
             $("#mostrarsec").click(function(){
                 document.getElementById("secpage30").style.display="none";
                 document.getElementById("secpage31").style.display="none";
                 document.getElementById("secpage32").style.display="none";
                 document.getElementById("secpage20").style.display="flex";
                 document.getElementById("secpage21").style.display="flex";
                 document.getElementById("secpage22").style.display="flex";
                 document.getElementById("secpage10").style.display="none";
                 document.getElementById("secpage11").style.display="none";
                 document.getElementById("secpage12").style.display="none";
                 document.getElementById("secpage26").style.display="none";
                 document.getElementById("secpage27").style.display="none";
                 document.getElementById("secpage28").style.display="none";
                 document.getElementById("secpage29").style.display="none";
                 document.getElementById("secpage33").style.display="none";
                 document.getElementById("secpage34").style.display="none";
                 document.getElementById("secpage35").style.display="none";
                 document.getElementById("secpage36").style.display="none";
                 document.getElementById("secpage37").style.display="none";
                 document.getElementById("secpage38").style.display="none"; 
               
              
             
        });  
             $("#mostrarsec1").click(function(){
                 document.getElementById("secpage30").style.display="none";
                 document.getElementById("secpage31").style.display="none";
                 document.getElementById("secpage32").style.display="none";
                 document.getElementById("secpage20").style.display="none";
                 document.getElementById("secpage21").style.display="none";
                 document.getElementById("secpage22").style.display="none";
                 document.getElementById("secpage10").style.display="flex";
                 document.getElementById("secpage11").style.display="flex";
                 document.getElementById("secpage12").style.display="flex";
                 document.getElementById("secpage26").style.display="none";
                 document.getElementById("secpage27").style.display="none";
                 document.getElementById("secpage28").style.display="none";
                 document.getElementById("secpage29").style.display="none";
                 document.getElementById("secpage33").style.display="none";
                 document.getElementById("secpage34").style.display="none";
                 document.getElementById("secpage35").style.display="none";
                 document.getElementById("secpage36").style.display="none";
                 document.getElementById("secpage37").style.display="none";
                 document.getElementById("secpage38").style.display="none";
                 
              
             
        });  
    
      $("#mostrarsec4").click(function(){
                 document.getElementById("secpage30").style.display="none";
                 document.getElementById("secpage31").style.display="none";
                 document.getElementById("secpage32").style.display="none";
                 document.getElementById("secpage20").style.display="none";
                 document.getElementById("secpage21").style.display="none";
                 document.getElementById("secpage22").style.display="none";
                 document.getElementById("secpage10").style.display="none";
                 document.getElementById("secpage11").style.display="none";
                 document.getElementById("secpage12").style.display="none";
                 document.getElementById("secpage26").style.display="flex";
                 document.getElementById("secpage27").style.display="flex";
                 document.getElementById("secpage28").style.display="flex";
                 document.getElementById("secpage29").style.display="none";
                 document.getElementById("secpage33").style.display="none";
                 document.getElementById("secpage34").style.display="none";
                 document.getElementById("secpage35").style.display="none";
                 document.getElementById("secpage36").style.display="none";
                 document.getElementById("secpage37").style.display="none";
                 document.getElementById("secpage38").style.display="none";
                
             
        }); 
      $("#mostrarsec5").click(function(){
                 document.getElementById("secpage30").style.display="none";
                 document.getElementById("secpage31").style.display="none";
                 document.getElementById("secpage32").style.display="none";
                 document.getElementById("secpage20").style.display="none";
                 document.getElementById("secpage21").style.display="none";
                 document.getElementById("secpage22").style.display="none";
                 document.getElementById("secpage10").style.display="none";
                 document.getElementById("secpage11").style.display="none";
                 document.getElementById("secpage12").style.display="none";
                 document.getElementById("secpage26").style.display="none";
                 document.getElementById("secpage27").style.display="none";
                 document.getElementById("secpage28").style.display="none";
                 document.getElementById("secpage29").style.display="flex";
                 document.getElementById("secpage33").style.display="flex";
                 document.getElementById("secpage34").style.display="flex";
                 document.getElementById("secpage35").style.display="none";
                 document.getElementById("secpage36").style.display="none";
                 document.getElementById("secpage37").style.display="none";
                 document.getElementById("secpage38").style.display="none";
                
             
        }); 
      $("#mostrarsec6").click(function(){
                 document.getElementById("secpage30").style.display="none";
                 document.getElementById("secpage31").style.display="none";
                 document.getElementById("secpage32").style.display="none";
                 document.getElementById("secpage20").style.display="none";
                 document.getElementById("secpage21").style.display="none";
                 document.getElementById("secpage22").style.display="none";
                 document.getElementById("secpage10").style.display="none";
                 document.getElementById("secpage11").style.display="none";
                 document.getElementById("secpage12").style.display="none";
                 document.getElementById("secpage26").style.display="none";
                 document.getElementById("secpage27").style.display="none";
                 document.getElementById("secpage28").style.display="none";
                 document.getElementById("secpage29").style.display="none";
                 document.getElementById("secpage33").style.display="none";
                 document.getElementById("secpage34").style.display="none";
                 document.getElementById("secpage35").style.display="flex";
                 document.getElementById("secpage36").style.display="flex";
                 document.getElementById("secpage37").style.display="flex";
                 document.getElementById("secpage38").style.display="none";
                
              
             
        }); 
    
    $("#mostrarsec7").click(function(){
                 document.getElementById("secpage30").style.display="none";
                 document.getElementById("secpage31").style.display="none";
                 document.getElementById("secpage32").style.display="none";
                 document.getElementById("secpage20").style.display="none";
                 document.getElementById("secpage21").style.display="none";
                 document.getElementById("secpage22").style.display="none";
                 document.getElementById("secpage10").style.display="none";
                 document.getElementById("secpage11").style.display="none";
                 document.getElementById("secpage12").style.display="none";
                 document.getElementById("secpage26").style.display="none";
                 document.getElementById("secpage27").style.display="none";
                 document.getElementById("secpage28").style.display="none";
                 document.getElementById("secpage29").style.display="none";
                 document.getElementById("secpage33").style.display="none";
                 document.getElementById("secpage34").style.display="none";
                 document.getElementById("secpage35").style.display="none";
                 document.getElementById("secpage36").style.display="none";
                 document.getElementById("secpage37").style.display="none";
                 document.getElementById("secpage38").style.display="flex";
                
              
             
        });
    
    
    /*----------------**/
     $("#ocultsecopi").click(function(){
                
                 document.getElementById("secopi1").style.display="flex";
                 document.getElementById("secopi2").style.display="flex";
                 document.getElementById("secopi3").style.display="flex";
                 document.getElementById("secopi4").style.display="flex";
                 document.getElementById("secopi5").style.display="flex";
                 document.getElementById("secopi6").style.display="flex";
                 document.getElementById("secopi7").style.display="flex";
                 document.getElementById("secopi8").style.display="flex";
                 document.getElementById("secopi9").style.display="flex";
                 document.getElementById("secopi10").style.display="none";
                 document.getElementById("secopi11").style.display="none";
                 document.getElementById("secopi12").style.display="none";
                 document.getElementById("secopi13").style.display="none";
                 document.getElementById("secopi14").style.display="none";
                 document.getElementById("secopi15").style.display="none";
                 document.getElementById("secopi16").style.display="none";
                 document.getElementById("secopi17").style.display="none";
                 document.getElementById("secopi18").style.display="none";
                 document.getElementById("secopi19").style.display="none";
        }); 
      $("#mostrarsecopi").click(function(){
                
                 document.getElementById("secopi1").style.display="none";
                 document.getElementById("secopi2").style.display="none";
                 document.getElementById("secopi3").style.display="none";
                 document.getElementById("secopi4").style.display="none";
                 document.getElementById("secopi5").style.display="none";
                 document.getElementById("secopi6").style.display="none";
                 document.getElementById("secopi7").style.display="none";
                 document.getElementById("secopi8").style.display="none";
                 document.getElementById("secopi9").style.display="none";
                 document.getElementById("secopi10").style.display="flex";
                 document.getElementById("secopi11").style.display="flex";
                 document.getElementById("secopi12").style.display="flex";
                 document.getElementById("secopi13").style.display="flex";
                 document.getElementById("secopi14").style.display="flex";
                 document.getElementById("secopi15").style.display="flex";
                 document.getElementById("secopi16").style.display="flex";
                 document.getElementById("secopi17").style.display="flex";
                 document.getElementById("secopi18").style.display="flex";
                 document.getElementById("secopi19").style.display="none";
        });
    $("#mostrarsecopi3").click(function(){
                
                 document.getElementById("secopi1").style.display="none";
                 document.getElementById("secopi2").style.display="none";
                 document.getElementById("secopi3").style.display="none";
                 document.getElementById("secopi4").style.display="none";
                 document.getElementById("secopi5").style.display="none";
                 document.getElementById("secopi6").style.display="none";
                 document.getElementById("secopi7").style.display="none";
                 document.getElementById("secopi8").style.display="none";
                 document.getElementById("secopi9").style.display="none";
                 document.getElementById("secopi10").style.display="none";
                 document.getElementById("secopi11").style.display="none";
                 document.getElementById("secopi12").style.display="none";
                 document.getElementById("secopi13").style.display="none";
                 document.getElementById("secopi14").style.display="none";
                 document.getElementById("secopi15").style.display="none";
                 document.getElementById("secopi16").style.display="none";
                 document.getElementById("secopi17").style.display="none";
                 document.getElementById("secopi18").style.display="none";
                 document.getElementById("secopi19").style.display="flex";
                 document.getElementById("secopi19").style.margin="0 auto";
        });
    
    
  $("#conprin").click(function(){
                
      document.getElementById("consec").style.display="none";
      document.getElementById("conprin").style.background="#00867d";
      document.getElementById("conprin").style.cursor="pointer";
      document.getElementById("sectionA").style.color="white";
      document.getElementById("plus").style.display="inline-block";
      document.getElementById("minus").style.display="none";
      
      document.getElementById("consec").style.display="block";
      document.getElementById("conprin").style.background="#eee";
      document.getElementById("sectionA").style.color="#5B615F";
      document.getElementById("plus").style.display="none";
      document.getElementById("minus").style.display="inline-block";
     
      document.getElementById("consec1").style.display="none";
      document.getElementById("conprin1").style.background="#00867d";
      document.getElementById("sectionA1").style.color="white";
      document.getElementById("plus1").style.display="inline-block";
      document.getElementById("minus1").style.display="none";
      
      document.getElementById("consec2").style.display="none";
      document.getElementById("conprin2").style.background="#00867d";
      document.getElementById("sectionA2").style.color="white";
      document.getElementById("plus2").style.display="inline-block";
      document.getElementById("minus2").style.display="none";
      
      document.getElementById("consec3").style.display="none";
      document.getElementById("conprin3").style.background="#00867d";
      document.getElementById("sectionA3").style.color="white";
      document.getElementById("plus3").style.display="inline-block";
      document.getElementById("minus3").style.display="none";
      
      document.getElementById("consec4").style.display="none";
      document.getElementById("conprin4").style.background="#00867d";
      document.getElementById("sectionA4").style.color="white";
      document.getElementById("plus4").style.display="inline-block";
      document.getElementById("minus4").style.display="none";
        });
    $("#conprin1").click(function(){
                
      document.getElementById("consec1").style.display="block";
      document.getElementById("conprin1").style.background="#eee";
      document.getElementById("sectionA1").style.color="#5B615F";
      document.getElementById("plus1").style.display="none";
      document.getElementById("minus1").style.display="inline-block";
        
       
      document.getElementById("consec").style.display="none";
      document.getElementById("conprin").style.background="#00867d";
      document.getElementById("sectionA").style.color="white";
      document.getElementById("plus").style.display="inline-block";
      document.getElementById("minus").style.display="none";
        
      document.getElementById("consec2").style.display="none";
      document.getElementById("conprin2").style.background="#00867d";
      document.getElementById("sectionA2").style.color="white";
      document.getElementById("plus2").style.display="inline-block";
      document.getElementById("minus2").style.display="none";
        
      document.getElementById("consec3").style.display="none";
      document.getElementById("conprin3").style.background="#00867d";
      document.getElementById("sectionA3").style.color="white";
      document.getElementById("plus3").style.display="inline-block";
      document.getElementById("minus3").style.display="none";
      
      document.getElementById("consec4").style.display="none";
      document.getElementById("conprin4").style.background="#00867d";
      document.getElementById("sectionA4").style.color="white";
      document.getElementById("plus4").style.display="inline-block";
      document.getElementById("minus4").style.display="none";        
        });
    
    $("#conprin2").click(function(){
                
      document.getElementById("consec2").style.display="block";
      document.getElementById("conprin2").style.background="#eee";
      document.getElementById("sectionA2").style.color="#5B615F";
      document.getElementById("plus2").style.display="none";
      document.getElementById("minus2").style.display="inline-block";
        
       
      document.getElementById("consec").style.display="none";
      document.getElementById("conprin").style.background="#00867d";
      document.getElementById("sectionA").style.color="white";
      document.getElementById("plus").style.display="inline-block";
      document.getElementById("minus").style.display="none";
      
               
      document.getElementById("consec1").style.display="none";
      document.getElementById("conprin1").style.background="#00867d";
      document.getElementById("sectionA1").style.color="white";
      document.getElementById("plus1").style.display="inline-block";
      document.getElementById("minus1").style.display="none";
        
      document.getElementById("consec3").style.display="none";
      document.getElementById("conprin3").style.background="#00867d";
      document.getElementById("sectionA3").style.color="white";
      document.getElementById("plus3").style.display="inline-block";
      document.getElementById("minus3").style.display="none";
        
      document.getElementById("consec4").style.display="none";
      document.getElementById("conprin4").style.background="#00867d";
      document.getElementById("sectionA4").style.color="white";
      document.getElementById("plus4").style.display="inline-block";
      document.getElementById("minus4").style.display="none";
        
      document.getElementById("consec4").style.display="none";
      document.getElementById("conprin4").style.background="#00867d";
      document.getElementById("sectionA4").style.color="white";
      document.getElementById("plus4").style.display="inline-block";
      document.getElementById("minus4").style.display="none";
        
        });
    
     $("#conprin3").click(function(){
                
      document.getElementById("consec3").style.display="block";
      document.getElementById("conprin3").style.background="#eee";
      document.getElementById("sectionA3").style.color="#5B615F";
      document.getElementById("plus3").style.display="none";
      document.getElementById("minus3").style.display="inline-block";
        
       
      document.getElementById("consec").style.display="none";
      document.getElementById("conprin").style.background="#00867d";
      document.getElementById("sectionA").style.color="white";
      document.getElementById("plus").style.display="inline-block";
      document.getElementById("minus").style.display="none";
      
               
      document.getElementById("consec1").style.display="none";
      document.getElementById("conprin1").style.background="#00867d";
      document.getElementById("sectionA1").style.color="white";
      document.getElementById("plus1").style.display="inline-block";
      document.getElementById("minus1").style.display="none";
         
      document.getElementById("consec2").style.display="none";
      document.getElementById("conprin2").style.background="#00867d";
      document.getElementById("sectionA2").style.color="white";
      document.getElementById("plus2").style.display="inline-block";
      document.getElementById("minus2").style.display="none";
         
      document.getElementById("consec4").style.display="none";
      document.getElementById("conprin4").style.background="#00867d";
      document.getElementById("sectionA4").style.color="white";
      document.getElementById("plus4").style.display="inline-block";
      document.getElementById("minus4").style.display="none";
        });
    
    $("#conprin4").click(function(){
                
      document.getElementById("consec4").style.display="block";
      document.getElementById("conprin4").style.background="#eee";
      document.getElementById("sectionA4").style.color="#5B615F";
      document.getElementById("plus4").style.display="none";
      document.getElementById("minus4").style.display="inline-block";
        
       
      document.getElementById("consec").style.display="none";
      document.getElementById("conprin").style.background="#00867d";
      document.getElementById("sectionA").style.color="white";
      document.getElementById("plus").style.display="inline-block";
      document.getElementById("minus").style.display="none";
      
               
      document.getElementById("consec1").style.display="none";
      document.getElementById("conprin1").style.background="#00867d";
      document.getElementById("sectionA1").style.color="white";
      document.getElementById("plus1").style.display="inline-block";
      document.getElementById("minus1").style.display="none";
         
      document.getElementById("consec2").style.display="none";
      document.getElementById("conprin2").style.background="#00867d";
      document.getElementById("sectionA2").style.color="white";
      document.getElementById("plus2").style.display="inline-block";
      document.getElementById("minus2").style.display="none";
        
      document.getElementById("consec3").style.display="none";
      document.getElementById("conprin3").style.background="#00867d";
      document.getElementById("sectionA3").style.color="white";
      document.getElementById("plus3").style.display="inline-block";
      document.getElementById("minus3").style.display="none";
        });
   
    /*------------------------------------------------------------------------*/
    
});