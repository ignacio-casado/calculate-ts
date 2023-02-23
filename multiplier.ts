const multiplicator = (a: number, b: number, printText: string) => {
    try{
        console.log(printText, a*b)
    }catch(err){
        console.log(err)
    }
    
}
const parseArguments = (argm): Array<number> => {
    if(argm.length !== 4)throw new Error(`Wrong number of arguments`)

    const firstNumber = Number(argm[2])
    const secondNumber = Number(argm[3])

    if(!isNaN(firstNumber) && !isNaN(secondNumber)){
        return[
            firstNumber,
            secondNumber
        ]
    }else{
        throw new Error('Provided values were not numbers')
    }
}

const clearArguments = parseArguments(process.argv)


const a: number = Number(clearArguments[0])
const b: number = Number(clearArguments[1])

multiplicator(a, b, `Multiplied ${a} and ${b} and the result is..`)
