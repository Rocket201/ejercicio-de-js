function pnumero(){

   n1 = prompt("ingresa un numero");
   
   alert("el valor introducido es "+ n1)
   
   if(n1 > 0 ){
    alert(n1+"es positivo")
    console.log(n1+"es un número positivo")
   }else if (n1 == 0){alert("Es igual a 0")}
   else if(n1<0){alert("tu numero es negativo")}
   
}