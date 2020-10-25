import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('PES_pesquisa')
export default class Pesquisa {
  @PrimaryGeneratedColumn('increment')
  @Column('pes_id_pesquisa')
  id: number;

  @Column('pes_ds_pesquisa')
  descricao: string;   

  @Column('pes_nu_ano')
  ano: number;   
}