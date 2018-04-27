class LogicaJogo{
    constructor(casas){
        this.casas = casas;
    }

    verificar = () => {
        let linhas = this.verificarLinhas();
        let colunas = this.verificarColunas();

        return linhas || colunas;
    }

    verificarLinhas = () =>{
        for(let i = 0; i < 3; i++){
            let valor1 = this.casas[i];
            let valor2 = this.casas[i+1];
            let valor3 = this.casas[i+2];

            if(valor1 != '' && valor1 == valor2 && valor2 == valor3){
                return true;
            }
        }

        return false;
    }

    verificarColunas = () => {
        for(let i = 0; i < 3; i++){
            let valor1 = this.casas[i];
            let valor2 = this.casas[i+3];
            let valor3 = this.casas[i+6];

            if(valor1 != '' && valor1 == valor2 && valor2 == valor3){
                return true;
            }
        }

        return false;
    }


}

export default LogicaJogo;