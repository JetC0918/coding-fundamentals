/* 
Return the missing letter from the given list
*/

function missingLetter(str){
    let letter = "", start = str.charCodeAt(0)
    for (let i = 1; i < str.length; i++){
        let diff = str.charCodeAt(i) - i - start;
        if ( diff === 1) letter += String.fromCharCode(i + start ++) 
        else if (diff) return
    }
    if (letter.length == 1) return letter
}

//Test case
console.log(missingLetter("abce")) //should return the string d.

console.log(missingLetter("abcdefghjklmno")) //should return the string i.

console.log(missingLetter("stvwx")) //should return the string u.

console.log(missingLetter("bcdf")) //should return the string e.

console.log(missingLetter("abcdefghijklmnopqrstuvwxyz") )//should return undefined.

