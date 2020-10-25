import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import Coleta from './Coleta';
import FotoDado from './FotoDado';
import VariavelPesquisa from './VariavelPesquisa';

@Entity('DAC_dado_coleta')
export default class DadoColeta {
  @PrimaryGeneratedColumn('increment')
  dac_id_dado_coleta: number;

  @ManyToOne(() => Coleta, coleta => coleta.col_id_coleta)
  @JoinColumn({ name: 'dac_id_coleta' })
  dac_id_coleta: Coleta;

  @ManyToOne(() => VariavelPesquisa, variavelPesquisa => variavelPesquisa.vap_id_variavel_pesquisa)
  @JoinColumn({ name: 'dac_id_variavel_pesquisa' })
  dac_id_variavel_pesquisa: VariavelPesquisa; 

  @Column()
  dac_vl_latitude: number;

  @Column()
  dac_vl_longitude: number;

  @OneToMany(() => FotoDado, fotoDado => fotoDado.fod_id_dado_coleta, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'fod_id_dado_coleta'})
  FotosDado: FotoDado[];
}