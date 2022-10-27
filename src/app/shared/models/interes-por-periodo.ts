export class InteresPorPeriodo {

    constructor(
        numeroDeMes: number,
        aporte: number,
        interesGenerado: number,
        total: number
    ) {
        this.aporte = aporte;
        this.interesGenerado = interesGenerado;
        this.numeroDeMes = numeroDeMes;
        this.total = total;
    }
    public numeroDeMes: number = null;
    public aporte: number = null;
    public interesGenerado: number = null;
    public total: number = null;
}
