function functionSoma(x: number, y: number): number {
    return x + y;
}

function functionSomatext(tx: string, tx0: string): string {
    return tx + tx0;
}

let somatx: string = functionSomatext("hello ", "world"); // Correção: as strings devem estar entre aspas
let soma: number = functionSoma(6, 7);

console.log(soma);
console.log(somatx); 