// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


reverse = (str) => {
    return str.split('').reduce((acc,cur) => cur + acc,'')
}

reverse1 = (str) => {
    return str.split('').reverse().join('')
}

reverse2 = (str) => {
    let newStr = ''
    for (s of str) {
        newStr = s + newStr
        debugger
    }
    return newStr
}

reverse2('123456')

module.exports = reverse;


