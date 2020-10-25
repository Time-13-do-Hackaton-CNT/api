import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Coleta from './Coleta';

@Entity('ROT_rota')
export default class Rota {
  @PrimaryGeneratedColumn('increment')  
  @Column({name:'rot_id_rota', primary:true})
  id: number;  
  
  @Column({name:'rot_ds_rota'})
  descricao: string;   

  @Column({name:'rot_vl_latitude_origem'})
  latitude_origem: number;   
  
  @Column({name:'rot_vl_longitude_origem'})
  longitude_origem: number;   
  
  @Column({name:'rot_vl_latitude_destino'})
  latitude_destino: number;   
  
  @Column({name:'rot_vl_longitude_destino'})
  longitude_destino: number;   

  @OneToMany(() => Coleta, coleta => coleta.col_id_rota, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'col_id_rota'})
  coletas: Coleta[];
}