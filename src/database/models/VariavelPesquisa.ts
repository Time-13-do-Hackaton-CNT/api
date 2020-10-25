import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('VAP_variavel_pesquisa')
export default class VariavelPesquisa {
  @PrimaryGeneratedColumn('increment')
  vap_id_variavel_pesquisa: number;

  @ManyToOne(() => VariavelPesquisa, variavelPesquisa => variavelPesquisa.vap_id_variavel_pesquisa)
  @JoinColumn({ name: 'vap_id_variavel_macro' })
  vap_id_variavel_macro: VariavelPesquisa;

  @Column()
  vap_ds_variavel: string;

  @Column()
  vap_st_foto_obrigatoria: boolean;

  @Column()
  vap_tp_variavel: string;
}