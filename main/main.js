var bold = 0 ;

function myfunction() {
    
    console.log(document.getElementById("text").style.fontWeight);

    if (bold == 0){
        document.getElementById("text").style.fontWeight ="bold";
        bold = 1;
    }
    else if (bold == 1){
        document.getElementById("text").style.fontWeight="normal";
        bold = 0 ;
    }
  
} 
var italic=0 ;
function myfunction1() {
 console.log(document.getElementById("text").style.fontStyle);
 if(italic==0){
    document.getElementById("text").style.fontStyle="italic";
    italic=1;
 }
 else if (italic==1){
     document.getElementById("text").style.fontStyle="normal";
     italic = 0;
 }
  }
  var underline=0;
  function myfunction2() {
      console.log(document.getElementById("text").style.textDecoration);
      if(underline==0){  
      document.getElementById("text").style.textDecoration="underline";
      underline=1;  
  }
  else if (underline==1){
 document.getElementById("text").style.textDecoration="none";
 underline=0;
  }
 }
function myfunction3() {
    document.getElementById("text").style.fontSize=document.getElementById("select").value;
}
function myfunction4(){
    document.getElementById("text").style.fontFamily=document.getElementById("select2").value;
}
 
