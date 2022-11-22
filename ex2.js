function volcount (str) {
     var count=0;
     var voules ="aeoiu";
     for (let i = 0; i < str.length; i++) {
        if (voules.indexOf(str[i])>-1){
            count++
        }
        
     }
     return " this string" + "  " + count+ "  " + "voules" 
}
var str = prompt("entr your word");
 document.write( volcount(str));