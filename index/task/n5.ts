function repeatStr (n, s) {
    const resultArray = Array.from({length: n},() =>s[0])
    const resultString = resultArray.join('')
    return resultString
}