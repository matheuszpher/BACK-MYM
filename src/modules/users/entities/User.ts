import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("users")
class User {
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    monitor: boolean;
    @Column()
    professor: boolean;
    @Column()
    cadeiras: string;
    @Column()
    avaliacaoPendente: boolean;
    @Column()
    ultimaAulaId: string;
    @Column()
    ultimaAulaMonitor: string;
    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { User };
