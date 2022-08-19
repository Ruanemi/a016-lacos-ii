const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
let num = 1

for(let i of maioresPaises){
    console.log(`lugar ${[num++]}º no pódio: ${i}`)
    // alert(`lugar no pódio: ${i+1} ${maioresPaises[i]}`)
}