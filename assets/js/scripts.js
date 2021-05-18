'use strict';

// define variables
let materia1 = [];
let materia2 = [];
let materia3 = [];
let materias = []; //ramo
let notaMin; //aprobado
let nombre;
let carrera;
let promedio1 = 0;
let promedio2 = 0;
let notaRestante; // x

// Ask details
nombre = prompt('Ingrese su nombre y apellido');
carrera = prompt('Ingrese su carrera');
notaMin = parseInt(prompt('Ingrese la nota requerida para aprobación'));

// ask for jubjects
for (let i = 0; i <= 2; i++) {
  materias.push(prompt(`Ingrese nombre de materia n°${i + 1}:`));
}
// ask for html grades
for (let i = 0; i <= 2; i++) {
  materia1.push(prompt(`Ingrese nota ${i + 1} [${materias[0]}]:`));
  // acc value
  promedio1 += parseInt(materia1[i]);
}
// ask for css grades
for (let i = 0; i <= 2; i++) {
  materia2.push(prompt(`Ingrese nota ${i + 1} [${materias[1]}]:`));
  // acc value
  promedio2 += parseInt(materia2[i]);
}
// ask for js grades
for (let i = 0; i <= 1; i++) {
  materia3.push(prompt(`Ingrese nota ${i + 1} [${materias[2]}]:`));
}

// calc final grades
promedio1 = (promedio1 / 3).toFixed(2);
promedio2 = (promedio2 / 3).toFixed(2);
notaRestante = (3 * notaMin - materia3[0] - materia3[1]).toFixed(2);

// check if aproves
// materia 1
promedio1 >= notaMin
  ? (promedio1 = `<td class="text-success"><strong>${promedio1}</strong></td>`)
  : (promedio1 = `<td class="text-danger"><strong>${promedio1}</strong></td>`);

// materia 2
promedio2 >= notaMin
  ? (promedio2 = `<td class="text-success"><strong>${promedio2}</strong></td>`)
  : (promedio2 = `<td class="text-danger"><strong>${promedio2}</strong></td>`);

// write table
document.write(`<div class="container">
<header class="details">
  <h1>Notas Finales</h1>
  <div class="row">
    <div class="col">
      <div class="wrapper d-flex flex-column">
        <strong>Nombre:</strong><strong>Carrera:</strong>
      </div>
    </div>
    <div class="col">
      <div class="wrapper d-flex flex-column">
        <strong id="nombre">${nombre}</strong>
        <strong id="carrera">${carrera}</strong>
      </div>
    </div>
    <div class="col"></div>
  </div>
</header>

<section class="results mt-5">
  <table class="w-100 text-center">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Ramo</th>
          <th scope="col">Nota 1</th>
          <th scope="col">Nota 2</th>
          <th scope="col">Nota 3</th>
          <th scope="col">Promedio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">${materias[0]}</th>
          <td>${materia1[0]}</td>
          <td>${materia1[1]}</td>
          <td>${materia1[2]}</td>
          ${promedio1}
        </tr>
        <tr>
          <th scope="row">${materias[1]}</th>
          <td>${materia2[0]}</td>
          <td>${materia2[1]}</td>
          <td>${materia2[2]}</td>
          ${promedio2}
        </tr>
        <tr>
          <th scope="row">${materias[2]}</th>
          <td>${materia3[0]}</td>
          <td>${materia3[1]}</td>
          <td> - </td>
          <td> - </td>
        </tr>
      </tbody>
    </table>
  </table>
  <small>
  <p class="my-3">
    Para aprobar el ramo ${materias[2]} con nota ${notaMin}, necesitas obtener un
    ${notaRestante} en la nota 3
  </p></small>
</section>
</div>`);
