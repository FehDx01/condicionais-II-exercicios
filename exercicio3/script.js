//códigos a serem reescritos

// a)
if(nome === "José"){
	console.log("Oi, Zé!")
} else {
	console.log("Olá, " + nome)
}

nome ? console.log("Oi, Zé!") : console.log("Olá, " + nome)


// b)
if(idade >= 18){
	console.log("Pode tirar carteira de motorista!")
} else {
	console.log("Ainda não pode tirar carteira de motorista!")
}

idade ? console.log(idade >= 18, "Pode tirar carteira de motorista!") : console.log("Ainda não pode tirar carteira de motorista!");