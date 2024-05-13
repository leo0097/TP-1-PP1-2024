let i = + prompt("hola, ingrese un numero")||0
    if(i%1!=0){
        alert(i + " es un numero no entero. Adios")
    }else{
        while(!(i>3)){
            alert(i)
            i=i+1
        }
        alert(i +" adios")
    }