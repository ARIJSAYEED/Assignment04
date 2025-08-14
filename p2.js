function onlyCharacter(str) {
    // You have to write your code here
    str = str.toUpperCase().replaceAll(" ", "");
    return str;
}

let test = onlyCharacter(" h e llo wor ld")
console.log(test);