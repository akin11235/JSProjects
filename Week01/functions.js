let s = "The sky is blue"



function addPeriod(value){

    let lastPos = value.length - 1

    if(value.charAt(lastPos) === '.'){return value}

    return value + '.';

    
}

console.log(addPeriod(s));
console.log(addPeriod(s + '.'));