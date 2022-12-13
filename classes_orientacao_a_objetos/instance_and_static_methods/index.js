class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 2;
    }

    // método de instancia
    diminuirVolume(){
        this.volume -= 2;
    }

    // vai alterar os dados da classe em si, então não temos acesso aos dados das instancias
    static trocaPilha(){
        console.log('ok, vou trocar')
    }
}

const controle1 = new ControleRemoto('Lg');

controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.trocaPilha();
console.log(controle1);

// os métodos de instancia alteram os dados, o static é chamado na classe