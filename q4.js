const prompt = require('prompt-sync')();

const nString= prompt('Forneça um número: ');
const n = Number(nString);

if (n%2==0){
    console.log("numero par");
	const n2=Math.sqrt(n);
	console.log(`\nA raiz do numero é: ${n2}`);
}

else {
	const n3=Math.pow(n);
	console.log(`\nO numero elevado ao quadrado é: ${n3}`);
}