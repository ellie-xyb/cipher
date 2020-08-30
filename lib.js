const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// encrypt applies a cipher to the input string

export function encrypt(input) {
    const offset = 4;
    let output = "";
    const characters = input.split("");

    for (let i = 0; i < characters.length; i++) {
        let y = capitals.indexOf(characters[i]);
        let newY;
        if (y >= offset) {
            newY = y - offset;
        } else {
            newY = y + 26 - offset;
        }
        output += capitals[newY];
    }

    return output;
}


// decrypt

export function decrypt(input) {
    const offset = 4;
    let output = "";
    const characters = input.split("");

    for (let i = 0; i < characters.length; i++) {
        let y = capitals.indexOf(characters[i]);
        let newY;
        if (y < 26 - offset) {
            newY = y + offset;
        } else {
            newY = y - 26 + offset;
        }
        output += capitals[newY];
    }

    return output;
}
