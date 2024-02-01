function sum (numbers) {
    if(numbers == 0) return 0

    return numbers.reduce ((total,mark) => total + mark)
};