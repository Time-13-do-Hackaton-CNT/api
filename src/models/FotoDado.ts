import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import DadoColeta from './DadoColeta';

@Entity('FOD_foto_dado')
export default class FotoDado {
  @PrimaryGeneratedColumn('increment')
  @Column({name: 'fod_id_foto_dado', primary: true})
  id: number;

  @ManyToOne(() => DadoColeta, dadoColeta => dadoColeta.id)
  @JoinColumn({ name: 'fod_id_dado_coleta' })
  dado_coleta: DadoColeta;  

  @Column({name:'fod_ds_diretorio'})
  diretorio: string;
}