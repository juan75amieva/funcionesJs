// Separar Separa la entrada por palabras alternativas
//creacion de la funcion separarFrase, asignación de parametros string y byte, y devolviendo un string
function separarFrase(frase,parametro){

//declarar arrays salida
var salida =[];
//declarar variable "acumulador"
var acumulador = ''
//iterar el arrays con el bucle for utilizando la funcion len para definir la condicion
for(i = 0; i<frase.length;i++){
    //si el valor "frase" iterado por  [i] es igual al parametro agragar a salida el valor de acumulador y acumulador asignar el valor " "
    if(frase[i]==parametro){
        salida += acumulador
        acumulador = ' ' 
        // console.log(salida)       
    }else{
    //si no añadir a acumulador el valor de frase[i]
    acumulador += frase[i]

    }

}
//si acumulador no es igual a " " adicionar a salida el valor de acumulador
if(acumulador != ' '){
    salida += acumulador
}

return salida



}

// let frase1 = []
// frase1 = (separarFrase("uno dos tres de ls proxima no funciona", ' '))
// console.log(frase11)
// console.log(typeof frase1)


//creacion de la funcion unirFrase, asignación de parametros string , y devolviendo un string
// var palabras=[]
function unirFrase(palabras,textoDeUnion){
    //Se declara la variable acumulador
    var acumulador = ""
    //se itera con la longitud de palabras como condicion y se le agrega a acumulador el valor de la posicion y de palabras + el texto union
    for(i = 0; i<palabras.length;i++){
        acumulador += palabras[i] + textoDeUnion
        // console.log(palabras[i])

    }
    //se le asigna nuevo valor a acumulador, en este caso se utiliza el espaccio vacio en el primer valor de el segmento len para determinar de esta forma que comienza desde cero hasta 
    //len, y finalmente se designa len -1 para que se selecione hasta el ultimo valor
    // acumulador = acumulador[0:len(acumulador)-len(textoDeUnion)]
    let salida = acumulador
    return salida
    

}   
//  let frase2 = (unirFrase(["es","estas", "son"], " "))
// console.log(frase2)
// console.log(typeof frase2)


//creacion de la funcion Separar, asignación de parametro string , y devolviendo un string

function Separar(entrada){
    //separar la entrada en un array de palabras, por el espacio
    let entradaSeparada = entrada.split(' ')
    //declarar dos listaDeListas: listaImpares y lista2, de strings
    var lista1 =[]
    var lista2 =[]
    //pasar por cada palabra, y si el indice es par lo agregare a la lista1 y si es impar lo agregare a la lista 2
    for(i = 0; i<entradaSeparada.length; i++){
        // entradaSeparada[i%2] = entradaSeparada[i%2].push(entradaSeparada[i])
        
        if (i%2 ==0){
            lista1 += entradaSeparada[i] + " "
            // console.log(lista1)
        }else{
            lista2 += entradaSeparada[i] + " "
            // console.log(lista2)
        }    
    }
    
    var listas = []
    listas.push(lista1,lista2)
    
    
    console.log(listas)
    



}

console.log(Separar("en erase un una lugar vez de en la terabitia mancha paso..."))


// SepararPorToken Separa una frase por el token que se proporciona, solo la primera aparicion
function SepararPorToken(entrada,token){
    //declarar el arrays salida
    let salida = []
    //declarar la variable acumulador
    let acumulador = ""
    //iterar con bucle for utilizando la funcion len para definir la condición
    for(i = 0; i<frase.length;i++){
        if(entrada[i] == token[0] ){
            salida = salida.push(acumulador)
            acumulador = ""
            // si no añadir a acumulador el string de la posición i de entrada
        }else{
            acumulador += frase[i]
        }

        //utilizar el condicional if, si acumulador no es igual a " ", utilizar la funcion append para añadir a salida acumulador
        if( acumulador != " "){
            salida = salida.push(acumulador)
        }
        //retornar salida
        return salida
  




