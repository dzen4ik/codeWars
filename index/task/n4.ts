function sumMix(x){
    const arrayNumber = x.map(Number)
    const sum = arrayNumber.reduce((total,mark) => total + mark)
return sum
}