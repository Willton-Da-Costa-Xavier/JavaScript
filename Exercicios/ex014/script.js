function carregar(){
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora sao ${hora} horas`
if(hora >= 0 && hora < 12){
img.src = "manha2.png"
document.body.style.backgroundColor = "#d5b77c"
}else if(hora >= 12 && hora <= 18){
img.src = "tarde2.png"
document.body.style.backgroundColor = "#feaf94"
}else{
img.src = "noite2.png"
document.body.style.backgroundColor = "#131720"
}
}

