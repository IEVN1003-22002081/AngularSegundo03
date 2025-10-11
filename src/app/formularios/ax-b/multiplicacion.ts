export class Multiplicacion {
  numero1: number=0;
  numero2: number=0;
  resultado: number=0;

  multNumeros(): void {
    let total = 0;

    for (let i = 0; i < this.numero2; i++) {
      total += this.numero1;
    }
    this.resultado = total;
  }
}
