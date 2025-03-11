let nomes = ["ferro","bronze","prata","ouro","platina","acendente","imortal","radiante"]
let niveis = ["1000", "1001-2000", "2001-5000", "5001-7000", "7001-8000", "8001-9000", "9001-1000", "10001"]
let nome = "heinsenberg"

for(let cont = 0; cont < nomes.length; cont++){
    console.log(nomes[cont] + " -  XP: " + niveis[cont])
}


let te = niveis[3]
nivel = nomes[5]

if(nivel == nomes[0]){
    console.log("nivel atualizado " + niveis[0])

} else if(nivel == nomes[1]){
    console.log("nivel atualizado " + niveis[1])

} else if(nivel == nomes[2]){
    console.log("nivel atualizado " + niveis[2])

} else if(nivel == nomes[3]){
    console.log("nivel atualizado " + niveis[3])
    
} else if(nivel == nomes[4]){
    console.log("nivel atualizado " + niveis[4])

} else if(nivel == nomes[5]){
    console.log("nivel atualizado " + niveis[5])

} else if(nivel == nomes[6]){
    console.log("nivel atualizado " + niveis[6])

} else if(nivel == nomes[7]){
    console.log("nivel atualizado " + niveis[7])
} else{
    console.log("desculpa niveis nao localizado")
}


  console.log(nome + " esta no nivel : " + nivel)
