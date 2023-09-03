function functionSoma(x: number, y: number): number {
    return x + y;
}

function functionSomatext(tx: string, tx0: number): string | number {
    return tx + tx0;
}

let somatx: string | number = functionSomatext("hello ", 9); // Correção: as strings devem estar entre aspas
let soma: number = functionSoma(6, 7);

console.log(soma);
console.log(somatx); 