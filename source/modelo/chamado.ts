/**
 * Representa um chamado de suporte aberto por um solicitante.
 * Contém o status atual (atendido ou não), o nome do solicitante e a descrição do problema.
 */
export class Chamado{
    status:boolean;
    solicitante:string;
    descricao:string;
    id:number
    /**
     * Cria uma nova instância de Chamado.
     * @param status estado inicial do chamado (true = atendido, false = pendente)
     * @param solicitante nome da pessoa que abriu o chamado
     * @param descricao descrição do problema reportado
     * @param id identificador único do chamado.
     */
    constructor(status:boolean,solicitante:string,descricao:string){
        this.status = status;
        this.solicitante = solicitante;
        this.descricao = descricao;
        this.id = Math.floor(Math.random() * 10000);
    }

    /**
     * Atualiza o status do chamado.
     * @param novo novo estado do chamado (true = atendido, false = pendente)
     */
    setStatus(novo:boolean){
        this.status = novo;
    }
}
