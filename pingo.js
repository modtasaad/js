// var fName = prompt('EnterYOUR Frist Name');
// console.log(fName);
// var lName = prompt('Enter Your Last Name');
// console.log(lName);
// var conf = confirm('Confirm Your full Name');
// console.log(conf);
// var brith = prompt('Enter Your Brith Date');
// console.log(brith);
// alert(  'welcome' +"  "+ fName+"  "+lName+"  "+'Your are'+"  "+brith+"  "+'years old') ;
// alert('Show a message to tell the user that it’s the first release of a calculator that only has a summation feature.');
// var fnum = Number( prompt('Enetr frist Numper'));
// console.log(fnum);
// var lnum =  Number( prompt('Enter Last Numper'));
// console.log(lnum);
// var z = fnum+lnum
//  Number( alert(fnum+ '+'+lnum +'='+z));
var age = Number( prompt("Enter YOUr age"));
while ( age>0){
if(isNaN(age)){
    alert( age + "error")
    }
    if(age<=10){
        alert("you are young")
    }
    else if(age<=18){
       alert("you are tennager ");
    }
    else if(age<=50){
        alert("you are growen up");
    }
    else{
        alert("you are old")
    }
     age = Number (prompt("enter your age"));  
}

