
function anagram (palabra,anagrama){
palabra = palabra.split("")
anagrama = anagrama.split("")

console.log(palabra)
console.log(anagrama)


if (palabra.length === anagrama.length){
    palabra.every(i => {
        console.log (anagrama.includes(i) )
    
    }
    )

}
else {
    console.log (false)
}

}

anagram("sergio", "")


function reverseInteger(num){
num= num.split("")
console.log ( reverse (num))

}

