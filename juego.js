var altura_minima = 52;
// Altura minima requerida en centimetros
var edad_minima = 10;
// Edad minima requerida 
var altura_persona = 155;
// Altura del usuario en centimetros
var edad_persona = 13;
// Edad del usuario 

if(altura_persona >= altura_minima){
    console.log("¡Súbete, chico!");
    }
else{
    console.log("Lo siento, chico. Tal vez el próximo año");
}
// El programa dejara pasar al chico si tiene la altura minimna

if(altura_persona >= altura_minima && edad_persona >= edad_minima){
    console.log("¡Súbete, chico!");
    }
else{
    console.log("Lo siento, chico. Tal vez el próximo año");
}
// El programa dejara pasar al chico si tiene la altura minimna y la edad minima

if(altura_persona >= altura_minima || edad_persona >= edad_minima){
    console.log("¡Súbete, chico!");
    }
else{
    console.log("Lo siento, chico. Tal vez el próximo año");
}
// El programa dejara pasar al chico si tiene la altura minimna o la edad minima