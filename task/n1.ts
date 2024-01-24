function getAverage(marks){
const sum = marks.reduce((total,mark) => {
    return total + mark
    })
    return Math.floor(sum / marks.length)
}