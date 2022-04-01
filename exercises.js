const exerciseA = () => {
  let a = 14,
    b = 5;
  console.log("Ejercicio A: " + (a + b));
};

const exerciseB = () => {
  var meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  console.log("Ejercicio B: " + meses[3]);
};

const exerciseC = () => {
  let fiboncci = [0, 1];
  while (fiboncci.length < 20) {
    fiboncci.push(
      fiboncci[fiboncci.length - 1] + fiboncci[fiboncci.length - 2]
    );
  }
  console.log("Ejercicio C: " + fiboncci);
};

exerciseA();
exerciseB();
exerciseC();
