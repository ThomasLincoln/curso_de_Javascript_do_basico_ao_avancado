function ePaisagem(x,y){
    const resolution = (y/x).toFixed(2)
    const paisagem = (9/16).toFixed(2);
    if (resolution == paisagem){
        return true;
    }else{
        return false;
    }
}

const isPaisagem = (x,y) => x>y; 

console.log(ePaisagem(1200, 673));