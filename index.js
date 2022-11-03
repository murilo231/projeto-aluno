"use strict";
exports.__esModule = true;
var classes_1 = require("./classes");
var aluno = new classes_1.Aluno("Murilo", 18);
var materia = new classes_1.Materia("ciencias", 6);
materia.aluno = aluno;
materia.atribuirNota(10, "+");
if (materia.aluno.nota < materia.media) {
    console.log("aluno reprovado");
}
else {
    console.log("aluno aprovado, parabens!");
}
