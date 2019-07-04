var preguntas = [
    {
        pregunta: '¿q1?',
        opciones:{
            a: '2',
            b: '3',
            c: '6',
            d: '7',
        },
        correcta: 'd',
    },
    {
        pregunta: '¿q2',
        opciones:{
            a: '2',
            b: '4',
            c: '0',
            d: '1',
        },
        correcta: 'a',
    },
    {
        pregunta: '¿q3?',
        opciones:{
            a: 'Pocho',
            b: 'Chapo',
            c: 'Pepo',
            d: 'Chapu',
        },
        correcta: 'd',
    },
    {
        pregunta: '¿q4?',
        opciones:{
            a: 'Pocho',
            b: 'Chapo',
            c: 'Pepo',
            d: 'Chapu',
        },
        correcta: 'd',
    },
    {
        pregunta: '¿q5x?',
        opciones:{
            a: 'Pocho',
            b: 'Chapo',
            c: 'Pepo',
            d: 'Chapu',
        },
        correcta: 'd',
    }
];

//preguntas random
let tempVal;
let array = ["a", "b", "c", "d"];

function pickRandomQuestion() { 
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        console.log(j);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    console.log(array);
        //   return randomQuestion; //Tengo solo ek Object                 
 }
 

pickRandomQuestion();
