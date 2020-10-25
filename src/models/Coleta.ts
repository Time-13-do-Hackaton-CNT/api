import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import Usuario from './Usuario';
import Pesquisa from './Pesquisa';
import Rota from './Rota';
import DadoColeta from './DadoColeta';

@Entity('COL_coleta')
export default class Coleta {
  @PrimaryGeneratedColumn('increment')
  col_id_coleta: number;

  @ManyToOne(() => Usuario, usuario => usuario.usu_id_usuario)
  @JoinColumn({ name: 'col_id_usuario' })
  col_id_usuario: Usuario;

  @ManyToOne(() => Rota, rota => rota.rot_id_rota)
  @JoinColumn({ name: 'col_id_rota' })
  col_id_rota: Rota;

  @ManyToOne(() => Pesquisa, pesquisa => pesquisa.id)
  @JoinColumn({ name: 'col_id_pesquisa' })
  col_id_pesquisa: Pesquisa;  

  @Column()
  col_nu_trecho: number;

  @Column()
  col_ds_rodovia: string;

  @OneToMany(() => DadoColeta, dadoColeta => dadoColeta.dac_id_coleta, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'dac_id_coleta'})
  DadosColeta: DadoColeta[];
}