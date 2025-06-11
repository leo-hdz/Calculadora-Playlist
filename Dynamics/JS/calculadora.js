class Calculadora {
  constructor(var1, var2) {
    this.var1 = var1;
    this.var2 = var2;
  }

  suma() {
    let suma ;
    suma = this.var1 + this.var2;
    console.log("El resultado es:" + suma);
  }

  resta() {
    let resta ;
     resta = this.var1 - this.var2;
    console.log("El resultado es:" + resta);
  }

  multiplicacion() {
    let multi;
    multi = this.var1 * this.var2;
    console.log("El resultado es:" + multi);
  }

  division() {
    
      let div;
      div = this.var2 / this.var1;
      console.log("El resultado es:" + div);

    }
  }


const var1 = 2;
const var2 = 10;
let cal = new Calculadora(var1, var2);
cal.suma();
cal.resta();
cal.multiplicacion();
cal.division();