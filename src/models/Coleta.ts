import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import Usuario from './Usuario';
import Pesquisa from './Pesquisa';
import Rota from './Rota';
import DadoColeta from './DadoColeta';

@Entity('COL_coleta')
export default class Coleta {
  @PrimaryGeneratedColumn('increment')
  @Column({name:'col_id_coleta', primary:true})
  id: number;

  @ManyToOne(() => Usuario, usuario => usuario.id)
  @JoinColumn({ name: 'col_id_usuario' })
  // @Column({name:'col_id_usuario'})
  usuario: Usuario;

  @ManyToOne(() => Rota, rota => rota.id)
  @JoinColumn({ name: 'col_id_rota' })
  // @Column({name:'col_id_rota'})
  rota: Rota;

  @ManyToOne(() => Pesquisa, pesquisa => pesquisa.id)
  @JoinColumn({ name: 'col_id_pesquisa' })
  // @Column({name:'col_id_pesquisa'})
  pesquisa: Pesquisa;  

  @Column({name:'col_nu_trecho'})
  trecho: number;

  @Column({name:'col_ds_rodovia'})
  rodovia: string;

  @OneToMany(() => DadoColeta, dadoColeta => dadoColeta.id, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'dac_id_coleta'})
  dadosColeta: DadoColeta[];
}