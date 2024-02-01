function findMultiples(integer, limit) {
    const arr = []
    let sum = 0
    for (let i = 1; i * integer <= limit; i++){
        arr.push(integer * i)
    }
    return arr
}
