var dato_base = document.getElementById('base');
var dato_char = document.getElementById('char');
var dato_color = document.getElementById('color');
var resultado = document.getElementById('piramide');

var base,symbol,color;
var linea = '';
getBase = function() {
    base = dato_base.value
}
getSymbol = function() {
    symbol = dato_char.value
}
getColor = function() {
    return dato_color.value
}

dato_base.addEventListener('keyup',getBase);

create = function() {
    linea = '';
    getSymbol();
    resultado.innerHTML = linea;
    color = getColor() 
    
    console.log(create());
}
for (let i = 0; i < base; i++) {
    resultado.innerHTML += '<p class="">' + (linea += ('<span class="">' + symbol + '</span>')) + '</p>';
}
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}




// a = 4537;
// b = 3;
//     console.log( a/b);
//     if (a % b === 0) {
//         console.log( a + ' es multiplo de ' + b);
//     }else {
    //         console.log( a + ' no es multiplo de ' + b);

    //     }
    


    

    




    
    

    