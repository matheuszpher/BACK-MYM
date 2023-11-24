import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("monitorias")
class Monitoria {
    @PrimaryColumn()
    id: string;
    @Column()
    idMonitor: string;
    @Column()
    cadeiraName: string;
    @Column()
    horarioInicio: Date;
    @Column()
    horarioFim: Date;
    @Column()
    alunosCadastrados: number;
    @Column()
    sala: string;
    @Column()
    obs: string;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}
export { Monitoria };
