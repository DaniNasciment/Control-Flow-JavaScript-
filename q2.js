const prompt = require('prompt-sync')();

const aString= prompt('Insira primeiro numero:');
const a = Number(aString);

const bString= prompt('Forneça segundo numero: ');
const b = Number(bString);

const cString= prompt('Forneça terceiro numero: ');
const c = Number(cString);

if (a>b && a>c && b>c){
    console.log(`Ordem: ${c},${b},${a}`);
}
else if (b>a && b>c && a>c){
    console.log(`Ordem: ${c},${a},${b}`);
}
else if (c>a && c>b && a>b){
    console.log(`Ordem: ${b},${a},${c}`);
}
else if (b>a && b>c && c>a){
    console.log(`Ordem: ${a},${c},${b}`);
}
else if (a>b && a>c && c>b){
    console.log(`Ordem: ${b},${c},${a}`);
}
else if (b>a && b>c && c>a){
    console.log(`Ordem: ${a},${c},${b}`);
}
else if (a<b && a<c && b<c){
    console.log(`Ordem: ${a},${b},${c}`);
}

