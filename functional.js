const a = ["a", "b", "c", "d", "e"];

function firstLetterUpper(a){
 /*    let result = [];
    for (let i = 0; i < a.length; i++) {
        result[i] = a[i].toUpperCase();
    }
    return result; */
    return a.map((letter) => letter.toUpperCase());
}

console.log(a);
let result = firstLetterUpper(a);
console.log(a);
console.log(result);
