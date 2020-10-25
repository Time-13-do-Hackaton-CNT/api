import VariavelPesquisa from '../models/VariavelPesquisa';
import DadoColetaView from './DadoColetaView';

export default {
  render(variavelPesquisa: VariavelPesquisa) {
    return {
      vap_id_variavel_pesquisa: variavelPesquisa.vap_id_variavel_pesquisa,
      vap_ds_variavel: variavelPesquisa.vap_ds_variavel,
      vap_st_foto_obrigatoria: variavelPesquisa.vap_st_foto_obrigatoria,      
      vap_tp_variavel: variavelPesquisa.vap_tp_variavel,            
      dadosColeta: DadoColetaView.renderMany(variavelPesquisa.DadosColeta)
    };
  },

  renderMany(variaveisPesquisa: VariavelPesquisa[]){
    return variaveisPesquisa.map(variavelPesquisa => this.render(variavelPesquisa));
  }
};