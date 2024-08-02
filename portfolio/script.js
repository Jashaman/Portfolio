
let  tablinks =document.getElementsByClassName("tablinks");
 let tabcontents =document.getElementsByClassName("tabcontents");

function opentab(tabname){
  
 for( let tablink of tablinks){
  tablink.classlist.remove("activelinks");
           }
   
for( let tabcontent of tabcontents){
       tabcontent.classlist.remove("activetab");
          }
event.currentTarget.classlist .add("activelinks");
          document.getElementById(tabname).classList.add("activetab")
         }