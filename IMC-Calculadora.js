const nome = "Mannu"
const altura = 1.55;
const peso = 50;

const imc = peso/(altura*altura)

if(imc >= 30){
    console.log(`${nome}, Você está acima do peso`)
} else{
    console.log(`${nome}, Você não está acima do peso`)
}