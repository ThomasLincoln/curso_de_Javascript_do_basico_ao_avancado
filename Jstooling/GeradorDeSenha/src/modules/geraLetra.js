
export default function GeraLetra(){
    const letra = String.fromCharCode(65+Math.floor(Math.random() * 26));
    return letra;
}