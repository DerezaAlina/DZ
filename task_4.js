let num1 = -5
let num2 = 'gh'
const result = num1 ** num2

if (Number.isNaN(result) || Array.isArray(num1) || Array.isArray(num2) || !Boolean(num1) || !Boolean(num2)) {
    console.log('This is not the appropriate data type.')
} else {
    console.log('Result: ', result)
}
