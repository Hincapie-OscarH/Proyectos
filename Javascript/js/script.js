function sayMe(num) {
    if (num > 0){
        console.log(num)
        alert('Este número es positivo')
    }
    else if (num < 0){
        console.log(num)
        alert('Este número es negativo')
    }
    else if (num === 0){
        console.log(num)
        alert('El número es cero')
    }
    else if (num === null){
        console.log(num)
        alert('El número es nulo')
    }
    else if (num === undefined){
        console.log(num) 
        alert('Valor vacio')
    }
}

function hervirAgua(){
        
    for(var temperatura = 0; temperatura <= 100; temperatura++) {
        
        console.log(temperatura + " Grados")
        if (temperatura === 100){
            alert('El agua ha hervido')
        }
    }
}