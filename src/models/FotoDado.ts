import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import DadoColeta from './DadoColeta';

@Entity('DAC_dado_coleta')
export default class FotoDado {
  @PrimaryGeneratedColumn('increment')
  fod_id_foto_dado: number;

  @ManyToOne(() => DadoColeta, dadoColeta => dadoColeta.id)
  @JoinColumn({ name: 'fod_id_dado_coleta' })
  fod_id_dado_coleta: DadoColeta;  

  @Column()
  fod_ds_diretorio: string;
}