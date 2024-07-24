function calcular(){
    let strbase= document.getElementById("b").value
    let strheight= document.getElementById("h").value

    if(strbase==="" && strheight===""){
        alert("base y altura en blanco")
    }
    else if(strheight===""){
        alert("altura en blanco")
    }
    else if (strbase===""){
        alert("base en blanco")
    }
    else{
        let base=parseFloat(strbase)
        let height=parseFloat(strheight)
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
}

function borrar(){
    document.getElementById("b").value= ""
    document.getElementById("h").value= ""
    document.getElementById("a").value= ""
}