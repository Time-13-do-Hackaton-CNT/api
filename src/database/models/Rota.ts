import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Coleta from './Coleta';

@Entity('ROT_rota')
export default class Rota {
  @PrimaryGeneratedColumn('increment')
  rot_id_rota: number;

  @Column()
  rot_ds_rota: string;   

  @Column()
  rot_vl_latitude_origem: number;   

  @Column()
  rot_vl_longitude_origem: number;   

  @Column()
  rot_vl_latitude_destino: number;   

  @Column()
  rot_vl_longitude_destino: number;   

  @OneToMany(() => Coleta, coleta => coleta.col_id_rota, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'col_id_rota'})
  coletas: Coleta[];
}