type operation = 'multiply' | 'divide' | 'add'| 'substraction'
type result = number 
const calculator = (a: number, b: number, op: operation): result  =>{
    if(op === 'multiply') return a * b
    if(op == 'divide') {
        if(b === 0) throw new Error ('can\t divide by 0!')
        return a / b
    }
    if(op === 'add') return a + b
    if(op === 'substraction') return a - b

    throw new Error (`operation is not valid`)
}


console.log(process.argv)