import GeraCpf from "./modules/geraCpf"
import './assets/css/style.css';


//essa função se auto executa
(function(){
    const gera = new GeraCpf(); 
    const cpfGerado = document.querySelector('.cpfGerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();