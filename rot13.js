function isBetween(charCode, firstLetter, lastLetter) {
    return charCode >= charCodeFor(firstLetter) &&
        charCode <= charCodeFor(lastLetter)
}

function charCodeFor(letter) {
    return letter.charCodeAt(0)
}

function transformLetter(charCode) {
    if (isBetween(charCode, "a", "m") || isBetween(charCode, "A", "M")) {
        return String.fromCharCode(charCode + 13)
    } else if (isBetween(charCode, "n", "z") || isBetween(charCode, "N", "Z")) {
        return String.fromCharCode(charCode - 13)
    } else {
        return String.fromCharCode(charCode)
    }
}

module.exports = function rot13(input) {
    if (input === undefined || typeof input !== "string") {
        throw new Error("Expected a string argument")
    }
    let result = ""
    for (let i = 0; i < input.length; i++) {
        const charCode = input.charCodeAt(i)
        result += transformLetter(charCode)
    }
    return result
}
