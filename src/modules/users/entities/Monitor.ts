import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("monitor")
class Monitor {
    @PrimaryColumn()
    id: string;
    @Column()
    tokenProfessor: string;
    @Column()
    IdCadeira: string;
    @Column()
    nota: number;
    @Column()
    totalAvaliacoes: number;
    @Column()
    badges: string;

    constructor(id: string) {
        this.id = id;
    }
}
export { Monitor };
