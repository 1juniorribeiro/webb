import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Image from './Image'

@Entity('orphanages') //isso é um decoretor que define para o typeorm que as classes esão ligadas a tabela
export default class Orphanage {
    @PrimaryGeneratedColumn('increment') // defini que é o chave primaria e que é do tipo incremento
    id:number;

    @Column() // define que é uma coluna do banco
    name: string;
    
    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;
    
    // não é um campo que existe no banco de dados por isso sem o column
    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'orphanage_id'})
    images: Image[];
}