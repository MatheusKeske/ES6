"use strict";

var alunos = [{
  nome: 'Joao',
  nota: 7
}, {
  nome: 'Maria',
  nota: 5
}, {
  nome: 'Julia',
  nota: 6
}];
var filtraNotasAlunos = alunos.filter(function (aluno) {
  return aluno.nota >= 6;
});
console.log('Alunos com notas >= 6');
console.log('------------------- ');
console.log(filtraNotasAlunos);