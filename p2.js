function onlyCharacter(str) {
    // You have to write your code here
    if (typeof str === String) {

        str = str.toUpperCase().replaceAll(" ", "");
        return str;
    }
    else {
        return "Invalid";
    }
}

let test = onlyCharacter(20);
console.log(test);