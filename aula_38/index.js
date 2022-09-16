// try{
//     //se não der erro
//     console.log("teste")
//     console.log("teste")
//     console.log("teste")

// }catch(e){
//     //quando da erro
//     console.log("se der erro")

// }finally{
//     //sempre
//     console.log("eu sempre sou executado")

// }


function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError("Espera-se uma instancia de date")
    }

    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {

    })
}

const data = new Date('01-01-1970 12:58:10')

try{
    const hora = retornaHora(11)
    console.log(hora)
}catch(e){
    console.log("deu errado ai")
}finally{
    console.log('bom dia')
}