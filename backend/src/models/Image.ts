import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Orphanage from './orphanage'

@Entity('Images') //isso é um decoretor que define para o typeorm que as classes esão ligadas a tabela
export default class Image {
    @PrimaryGeneratedColumn('increment') // defini que é o chave primaria e que é do tipo incremento
    id: number;

    @Column() // define que é uma coluna do banco
    path: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({ name: 'orphanage_id'})
    orphanage: Orphanage;
}