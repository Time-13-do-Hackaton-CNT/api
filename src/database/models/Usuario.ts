import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('USU_usuario')
export default class Usuario {
  @PrimaryGeneratedColumn('increment')
  usu_id_usuario: number;

  @Column()
  usu_ds_login: string;   
}