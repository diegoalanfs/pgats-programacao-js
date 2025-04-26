
const peso = 35

switch (true) {
    case peso <= 10:
        console.log('P')
        break
    case peso <= 20:
        console.log('M')
        break
    case peso <= 30:
        console.log('G')
        break
    default:
        console.log('ND')
}

//passando a constante como parâmetro
switch (peso) {
    case 10:
        console.log('P')
        break
    case 20:
        console.log('M')
        break
    case 30:
        console.log('G')
        break
    default:
        console.log('ND')
}