import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import Coleta from './Coleta';
import FotoDado from './FotoDado';
import VariavelPesquisa from './VariavelPesquisa';

@Entity('DAC_dado_coleta')
export default class DadoColeta {
  @PrimaryGeneratedColumn('increment')
  @Column({name:'dac_id_dado_coleta', primary:true})
  id: number;

  @ManyToOne(() => Coleta, coleta => coleta.id)
  @JoinColumn({ name: 'dac_id_coleta' })
  // @Column({name:'dac_id_coleta'})
  coleta: Coleta;

  @ManyToOne(() => VariavelPesquisa, variavelPesquisa => variavelPesquisa.vap_id_variavel_pesquisa)
  @JoinColumn({ name: 'dac_id_variavel_pesquisa' })
  // @Column({name:'dac_id_variavel_pesquisa'})
  variavel_pesquisa: VariavelPesquisa; 

  @Column({name:'dac_vl_latitude'})
  dac_vl_latitude: number;

  @Column({name:'dac_vl_longitude'})
  dac_vl_longitude: number;

  @OneToMany(() => FotoDado, fotoDado => fotoDado.fod_id_dado_coleta, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'fod_id_dado_coleta'})
  fotosDado: FotoDado[];
}