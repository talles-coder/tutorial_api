import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Tasks {
    
    @PrimaryGeneratedColumn()
    id : number;
    
    @Column()
    title : string;
    
    @Column()
    desciption: string;

    @Column({
        default: false
    })
    finished: boolean;

    @CreateDateColumn()
    created_at: Date;
    
    @CreateDateColumn()
    updated_at: Date;
}