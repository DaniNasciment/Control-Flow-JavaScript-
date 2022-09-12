const prompt = require('prompt-sync')();

const aString= prompt('Forneça primeiro numero: ');
const a = Number(aString);

const bString= prompt('Forneça segundo numero: ');
const b = Number(bString);

const cString= prompt('Forneça terceiro numero: ');
const c = Number(cString);

if (a>b && a>c){
    console.log(`Numero: ${a}`);
} else if(b>a && b>c){
    console.log(`Numero: ${b}`);
}
 else if (c>a && c>b){
    console.log(`Numero: ${c}`);
}
