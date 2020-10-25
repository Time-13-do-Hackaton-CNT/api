import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Coleta from './Coleta';

@Entity('USU_usuario')
export default class Usuario {
  @PrimaryGeneratedColumn('increment')
  usu_id_usuario: number;

  @Column()
  usu_ds_login: string;   

  @OneToMany(() => Coleta, coleta => coleta.col_id_usuario, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'col_id_usuario'})
  coletas: Coleta[];
}