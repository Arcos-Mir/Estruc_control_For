/* Crear un programa que imprima en consola los números impares del 1 al 50 */


/* opcion 1 */
function numImpares () {
    for(let i = 1; i <= 50; i += 2) {
        console.log(i);
    }
}

numImpares();

/* opcion 2 */

/* function numImpar() {
    for(let i = 1; i <= 50; i++) {
        if(i % 2 !== 0) {
            console.log(i);
        }
    }
}

numImpar(); */


/* crear un programa que pregunte al usuario un número. Usando el archivo de arreglo de pokemons, mostrar
solo los nombres de los pokemons cuyos números son multiplos de 5 desde 1 hasta el número introducido por
el usuario */

let number = prompt(" Escribe un número entre 1 y 100");

console.log("Mi número ingresado es: ", number);

let pokemons = [ 'bulbasaur', 'ivysaur','venusaur','charmander','charmeleon','charizard','squirtle','wartortle',
'blastoise','caterpie','metapod','butterfree','weedle','kakuna','beedrill','pidgey','pidgeotto','pidgeot',
'rattata','raticate','spearow','fearow','ekans','arbok','pikachu','raichu','sandshrew','sandslash','nidoran-f',
'nidorina','nidoqueen','nidoran-m','nidorino','nidoking','clefairy','clefable','vulpix','ninetales','jigglypuff',
'wigglytuff','zubat','golbat','oddish','gloom','vileplume','paras','parasect','venonat','venomoth','diglett',
'dugtrio','meowth','persian','psyduck','golduck','mankey','primeape','growlithe','arcanine','poliwag','poliwhirl',
'poliwrath','abra','kadabra','alakazam','machop','machoke','machamp','bellsprout','weepinbell','victreebel',
'tentacool','tentacruel','geodude','graveler','golem','ponyta','rapidash','slowpoke','slowbro','magnemite',
'magneton','farfetchd','doduo','dodrio','seel','dewgong','grimer','muk','shellder','cloyster','gastly','haunter',
'gengar','onix','drowzee','hypno','krabby','kingler','voltorb' ]

/* console.log(pokemons[10]); */

function numPokemons () {
    for (let i = 0; i <= number; i++) {
        if (i % 5 === 0){
            console.log("El pokemon multiplo de 5 es: ", pokemons[i])
        }
    }
}

numPokemons();



/* crea un programa que recorra el arreglo[4, "dos", 8, "tres", 5 ,9, 1 "cero"] y muestre en consola
solo lo elementos que son de tipo número*/

let num = [4, "dos", 8, "tres", 5 ,9 , 1, "cero"];
/* imprime en consola el arreglo en su estado original */
console.log(num);
let isInt = [];
function onlyNum() {
    
    for ( let i = 0; i <= num.length; i++) {
        if(num[i] % 1 === 0) {
            isInt.push(num[i]);
        }
    }
    return isInt;
}
console.log("Los números son: ", isInt);

onlyNum();


    