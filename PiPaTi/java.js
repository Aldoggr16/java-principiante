// PIEDRA PAPEL TIJERA
var p1 = prompt('Turno del primer jugador');
var p2 = prompt('Turno del segundo jugador');
var pi = 'piedra';
var pa = 'papel';
var ti = 'tijera';


    if (p1 === p2) {
        document.write('Empatados')
    } 
    else if ((p1===ti) && (p2===pa)){
        document.write('Ganador: ¡JUGADOR 1!')
    }
    else if ((p1===ti) && (p2===pi)){
        document.write('Ganador: ¡JUGADOR 2!')
    }
    else if ((p1===pi) && (p2===ti)){
        document.write('Ganador: ¡JUGADOR 1!')
    }
    else if ((p1===pi) && (p2===pa)){
        document.write('Gano jugador 2')
    }
    else if ((p1===pa) && (p2===pi)){
        document.write('Ganador: ¡JUGADOR 1!')
    }
    else if ((p1===pa) && (p2===ti)){
        document.write('Ganador: ¡JUGADOR 2!')
    }