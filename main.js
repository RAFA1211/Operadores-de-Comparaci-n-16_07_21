//Pedir 2 datos por pantalla y almacenarlo en 2 variables
//diferentes
//Variable 1(num1)  Variable2(numero2)
//Realizar todas las operaciones de comparación vistas en clase 
//Extra: Explicar con sus propias palabras porque se dio el resultado 'true , false'


let n1, n2; 
n1=prompt(`Ingrese el Primer Número`)
n2=prompt (`Ingrese el Segundo Número`)
console.log(`El primer número es:  ` + n1)
console.log(`El segundo número es:  ` + n2)

//Operador de Mayor que 
// n1 > n2 
// console.log(n1 > n2);
let resultado1 = n1 > n2;
console.log(`N1 es mayor que N2?: `,resultado1)
if (n1 > n2) {console.log(`N1 es mayor que N2`)}

//Operador de Mayor o igual que 
// n1 >= n2 
// console.log(n1 >= n2);
let resultado2 = n1 >= n2;
console.log(`N1 es mayor o igual que N2?: `,resultado2)


//Operador de menor que 
// n1 < n2 
// console.log(n1 < n2);
let resultado3 = n1 < n2;
console.log(`N1 menor que N2?: `,resultado3)
if (n1 < n2) {console.log(`N1 es menor que N2`)}

//Operador de menor o igual que 
// n1 <= n2 
// console.log(n1 < n2);
let resultado4 = n1 < n2;
console.log(`N1 es menor o igual que N2?: `,resultado4)

//Operador igual que 
// n1 = n2 
// console.log(n1 < n2);
let resultado5 = n1 == n2;
console.log(`N1 es igual que N2?: `,resultado5)
if (n1 == n2) {console.log(`N1 es igual que N2`)}


//Operador  identico que 
// n1 === n2 
// console.log(n1 === n2);
let resultado6 = (n1 === n2);
console.log(`N1 es identico que N2?: `,resultado6)

//Operador diferente que 
// n1 != n2 
// console.log(n1 != n2);
let resultado7 = (n1 != n2);
console.log(`N1 es diferente que N2?: `,resultado7)

//Operador diferente estricto que 
// n1 != n2 
// console.log(n1 = n2);
let resultado8 = (n1 !== n2);
console.log(`N1 es diferente estricto que N2?: `,resultado8)

if (n1 > n2) {console.log(`N1 es mayor que N2`)}




