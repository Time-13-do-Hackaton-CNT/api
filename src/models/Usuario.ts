import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Coleta from './Coleta';

@Entity('USU_usuario')
export default class Usuario {
  @PrimaryGeneratedColumn('increment')
  @Column({name:'usu_id_usuario', primary:true})
  id: number;

  @Column({name:'usu_ds_login'})
  login: string;   

  @OneToMany(() => Coleta, coleta => coleta.col_id_usuario, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'col_id_usuario'})
  coletas: Coleta[];
}