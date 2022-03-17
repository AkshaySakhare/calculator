
    function addition(){
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
   
   c= a+b;
    document.getElementById("result").value=c;
    document.getElementById("operation").innerHTML= "+";
   
    }

    function subtractraction(){
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
   
   c= a-b;
    document.getElementById("result").value=c;
    document.getElementById("operation").innerHTML= "-";
   
    }
