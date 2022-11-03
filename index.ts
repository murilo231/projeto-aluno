import { Aluno, Materia } from"./classes";

const aluno = new Aluno("Murilo", 18);
const materia = new Materia("ciencias",6);

materia.aluno = aluno;
materia.atribuirNota(1,"+");

if (aluno.nota < materia.media)
{
    console.log("aluno reprovado");

} else {
    console.log("aluno aprovado, parabens!");
}
