import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Coleta from './Coleta';

@Entity('PES_pesquisa')
export default class Pesquisa {
  @PrimaryGeneratedColumn('increment')
  @Column('pes_id_pesquisa')
  id: number;

  @Column('pes_ds_pesquisa')
  descricao: string;   

  @Column('pes_nu_ano')
  ano: number;   

  @OneToMany(() => Coleta, coleta => coleta.col_id_pesquisa, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'col_id_pesquisa'})
  coletas: Coleta[];
}