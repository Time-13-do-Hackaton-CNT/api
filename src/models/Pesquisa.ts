import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Coleta from './Coleta';

@Entity('PES_pesquisa')
export default class Pesquisa {
  @PrimaryGeneratedColumn('increment')  
  @Column({name:'pes_id_pesquisa', primary:true})
  id: number;

  @Column({name:'pes_ds_pesquisa'})
  descricao: string;   
  
  @Column({name:'pes_nu_ano'})
  ano: number;   

  @OneToMany(() => Coleta, coleta => coleta.id, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'col_id_pesquisa'})
  coletas: Coleta[];
}