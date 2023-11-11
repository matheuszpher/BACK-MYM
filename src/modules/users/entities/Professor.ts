import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("professor")
class Professor {
    @PrimaryColumn()
    id: string;
    @Column()
    token: string;
    @Column()
    monitoresId: string;

    constructor(id: string) {
        this.id = id;
    }
}
export { Professor };
