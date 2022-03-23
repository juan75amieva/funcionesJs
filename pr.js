// let acumulador = ""
// let entrada ="juan esta con sueño"

// for(i = 0;i< entrada.length; i++){
//      acumulador += entrada[i]
//     console.log(acumulador)
// }
let entrada = "eso es una lista en orden ponele"
let entradaSeparada = entrada.split(' ')
console.log(entradaSeparada)


var lista1 =[]
var lista2 =[]

for(i = 0; i<entradaSeparada.length; i++){
    // entradaSeparada[i%2] = entradaSeparada[i%2].push(entradaSeparada[i])
    
    if (i%2 ==0){
        lista1 += entradaSeparada[i] + " "
        // lista1 += " "
        console.log(lista1)
    }else{
        lista2 += entradaSeparada[i] + " "
        console.log(lista2)
    }    
}

var listas = []
listas.push(lista1,lista2)

console.log(listas)
