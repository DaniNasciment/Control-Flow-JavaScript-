const prompt = require('prompt-sync')();

const iString= prompt('Forneça sua idade :');
const i = Number(iString);

if (i>=10 && i<=14) {
    console.log("Infantil");
}
else if (i>=15 && i<=17){
    console.log("juvenil");
}
else if (i>=18 && i<=25){
    console.log("Adulto");
}