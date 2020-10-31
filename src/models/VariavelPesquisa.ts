import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import DadoColeta from './DadoColeta';

@Entity('VAP_variavel_pesquisa')
export default class VariavelPesquisa {
  @PrimaryGeneratedColumn('increment')
  @Column({name:'vap_id_variavel_pesquisa', primary:true})
  id: number;

  @ManyToOne(() => VariavelPesquisa, variavelPesquisa => variavelPesquisa.id)
  @JoinColumn({ name: 'vap_id_variavel_macro' })
  variavel_macro: VariavelPesquisa;

  @Column({name: 'vap_ds_variavel'})
  descricao: string;

  @Column({name: 'vap_st_foto_obrigatoria'})
  foto_obrigatoria: boolean;

  @Column({name: 'vap_tp_variavel'})
  tipo: string;

  @OneToMany(() => DadoColeta, dadoColeta => dadoColeta.variavel_pesquisa, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'dac_id_variavel_pesquisa'})
  dados_coleta: DadoColeta[];

  @OneToMany(() => VariavelPesquisa, variavelPesquisa => variavelPesquisa.variavel_macro, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'vap_id_variavel_macro'})
  variaveis_micro: VariavelPesquisa[];
}