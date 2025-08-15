function onlyCharacter(str) {
    if (typeof str === String) {
        str = str.toUpperCase().replaceAll(" ", "");
        return str;
    }
    else {
        return "Invalid";
    }
}
