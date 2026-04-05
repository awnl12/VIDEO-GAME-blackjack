let deck = [];
const tipos = ['C', 'D', 'H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0;
let puntosComputadora = 0;

//REFERENCIA EN HTML


const divCartasPc = document.querySelector('#computadora-cartas')

const btnPedir = document.querySelector('#btnPedir');
const divCartasJugador = document.querySelector('#jugador-cartas')

const btnDetener = document.querySelector('#btnDetener');
const btnNuevoJuego = document.querySelector('#btnNuevo')

const puntosHTMl = document.querySelectorAll('small');


console.log(btnPedir)

const crearDeck = () =>{

    for(let i = 2; i<= 10; i++){
        for(let tipo of tipos){
        deck.push(i + tipo)}
    }

    for (let tipo of tipos){
        for (let esp of especiales){
            deck.push( esp + tipo);
        }
    }
    
    
    deck = _.shuffle(deck);
    

    return deck;
}

crearDeck();


const pedirCarta = () => {
    if(deck.length === 0){
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();
    return carta;   

}

pedirCarta();


const valorCarta = (carta) =>{

    const valor = carta.substring(0, carta.length-1);

    return  ( isNaN( valor ) ) ?
    ( valor === 'A' ) ? 11 : 10
    : valor * 1;

}


const turnoComputadora = (puntosMinimos) =>{
    do{
    const carta = pedirCarta();
    
    puntosComputadora += valorCarta(carta);
    puntosHTMl[1].innerText = puntosComputadora;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;

    imgCarta.classList.add('carta');

    divCartasPc.append(imgCarta);

    if (puntosMinimos > 21)
        { break;}

    } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );


setTimeout( () => {
 
    if(puntosComputadora === puntosMinimos){
        alert('Nadie Gana: ()')
    } else if (puntosMinimos > 21){
        alert('Computadora Gana')
    } else if (puntosComputadora === 21){
        alert('Jugador Gana')
    } else {
        alert('Computadora Gana')
    }
}, 10);

}




//Eventos
btnPedir.addEventListener('click', ()/*(Callback -> lo que se dispara al presionar el evento)*/ => {

    const carta = pedirCarta();
    
    puntosJugador += valorCarta(carta);
    puntosHTMl[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;

    imgCarta.classList.add('carta');

    divCartasJugador.append(imgCarta);



    if (puntosJugador > 21){
        console.warn('Lo siento, perdiste');
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21 ){
        console.warn('21, Genial!');
        btnPedir.disabled = true;
    }
})
    // const cartaCpu = pedirCarta();

    // puntosComputadora += valorCarta(carta);
    // puntosHTMl[1].innerText = puntosComputadora;

    // const cartaImgCpu = document.createElement('img');
    // cartaImgCpu.src = `assets/cartas/${cartaCpu}.png`;

    // cartaImgCpu.classList.add('carta');
    // divCartasPc.append(cartaImgCpu);

    //      if (puntosComputadora > 21){
    //         console.warn('Lo siento, perdiste');
    //         btnPedir.disabled = true;
    //     } else if (puntosComputadora === 21 ){
    //         console.warn('21, Genial!');
    //         btnPedir.disabled = true;
    //     }



btnDetener.addEventListener('click', () => {

    btnPedir.disabled = true;
    turnoComputadora();
    btnDetener.disabled = true;

})


btnNuevoJuego.addEventListener('click', () => {
    deck = [];
    deck = crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTMl[0] = 0;
    puntosHTMl[1] = 0;

    divCartasJugador.innerHTML = '';
    divCartasPc.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false
})