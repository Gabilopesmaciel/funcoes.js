function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Ana Clara',
	idade: 9,
};

const pessoa2 = {
	nome: 'Ana Paula',
	idade: 32,
};

const pessoa3 = {
	nome: 'Paulo',
	idade: 54,
};

console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));