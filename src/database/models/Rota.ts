import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

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
}