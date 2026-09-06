/**
 * Calcula média (simples ou ponderada) e aplica o arredondamento usado pelo Portal do Aluno.
 * Regras de arredondamento:
 * - frações entre 0.01 e 0.24 => 0.0
 * - frações entre 0.25 e 0.74 => 0.5
 * - frações entre 0.75 e 0.99 => 1.0
 */

function arredondaPortal(valor) {
	if (!isFinite(valor)) return valor;
	const negativo = valor < 0;
	const abs = Math.abs(valor);
	const inteiro = Math.floor(abs);
	// corrigir pequenos erros de ponto flutuante
	const frac = Number((abs - inteiro).toFixed(10));

	let resultado;
	if (frac >= 0.01 && frac <= 0.24) resultado = inteiro;
	else if (frac >= 0.25 && frac <= 0.74) resultado = inteiro + 0.5;
	else if (frac >= 0.75) resultado = inteiro + 1;
	else resultado = inteiro; // inclui frac < 0.01 e frac === 0

	return negativo ? -resultado : resultado;
}

function calculaMedia(lista) {
	if (!Array.isArray(lista) || lista.length === 0) throw new Error('A lista de notas está vazia');

	// Suporta duas formas:
	// - array de números: [7.0, 6.5, 8.0]
	// - array de objetos ponderados: [{grade:7, weight:2}, {grade:6.5, weight:1}]
	const primeiro = lista[0];
	let media;

	if (typeof primeiro === 'object' && primeiro !== null && 'grade' in primeiro) {
		let soma = 0;
		let pesoTotal = 0;
		for (const it of lista) {
			const g = Number(it.grade);
			const w = Number(it.weight ?? 1);
			soma += g * w;
			pesoTotal += w;
		}
		media = soma / pesoTotal;
	} else {
		let soma = 0;
		for (const g of lista) soma += Number(g);
		media = soma / lista.length;
	}

	return arredondaPortal(media);
}

module.exports = { arredondaPortal, calculaMedia };

// Se executado diretamente, mostra alguns exemplos
if (require.main === module) {
	const exemplos = [
		{ input: [6.51, 6.6], desc: 'Média simples de [6.51, 6.6]'},
		{ input: [6.74], desc: '[6.74]'},
		{ input: [6.75], desc: '[6.75]'},
		{ input: [6.99], desc: '[6.99]'},
		{ input: [6.49], desc: '[6.49]'},
		{ input: [{ grade: 6.6, weight: 1 }, { grade: 7.2, weight: 2 }], desc: 'Ponderada 6.6(1),7.2(2)'}
	];

	for (const ex of exemplos) {
		console.log(ex.desc, '=>', calculaMedia(ex.input));
	}
}
