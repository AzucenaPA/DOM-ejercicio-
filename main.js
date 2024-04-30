//DOM
const div1 = document.getElementById("div-1");
console.log(div1); //llama al elemento con id tal

const divCollection = document.getElementsByTagName("div"); //llama a todos las etiquetas div 
console.log(divCollection);

const p = document.getElementById("p1");
const userinputs = document.getElementsByName("username");
/*const userinput = document.getElementsByName("username");
console.log(p, userinput[0]); //como el get elements by name da un array, por eso solo llamo al primer elemento
*/
const firstUserInput = userinputs[0];

console.log(p, firstUserInput);
//EVENTS
//firstUserInput.addEventListener("input", (event) =>console.log(event.data));
//lo de event.data lo saqué pq supe que el input se guarda en el atributo data, imprime letra por letra
firstUserInput.addEventListener("input", (event) =>{
    console.log(event.target.value);
    p.innerText = event.target.value;
});
//va concatenando cada letra que le metiste a las anteriores.

