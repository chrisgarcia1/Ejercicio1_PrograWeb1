function calcular(){
    let base= parseFloat(document.getElementById("b").value)
    let height= parseFloat(document.getElementById("h").value)

    if (height <=0 || base <= 0){
        if (base<=0 && height<=0){
            alert("Base y altura no validos")
        } else {
            if (height<=0){

            alert("Altura no valida")}
            else{
                alert("Base no valida")
            }
        }
    }else{
        let area= base*height
        document.getElementById("a").value= area
    }
}

function borrar(){
    document.getElementById("b").value= ""
    document.getElementById("h").value= ""
    document.getElementById("a").value= ""
}