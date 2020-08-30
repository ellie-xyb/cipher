const captical = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// encrypt applies a cipher to the input string

function encrypt(input) {
    const offSet = 4;
    let output="";
    const wordinM = input.split("");

    for (i = 0; i < wordinM.length; i++) {
        let y = captical.indexOf(wordinM[i]);
        let newY;
        if (y >= offSet) {
            newY = y - offSet;
        } else {
            newY = y + 26 - offSet;
        }
        output += captical[newY];
    }

    return output;
}


// decrypt

function decrypt(input) {
    const offSet = 4;
    let output="";
    const wordinM = input.split("");

    for (i = 0; i < wordinM.length; i++) {
        let y = captical.indexOf(wordinM[i]);
        let newY;
        if (y < 26-offSet) {
            newY = y + offSet;
        } else {
            newY = y - 26 + offSet;
        }
        output += captical[newY];
    }

    return output;
}


console.log(decrypt(encrypt("ILIKEDOG")));