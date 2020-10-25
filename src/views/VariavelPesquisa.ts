import VariavelPesquisa from '../models/VariavelPesquisa';
import DadoColetaView from './DadoColetaView';

export default {
  render(variavelPesquisa: VariavelPesquisa) {
    return {
      id: variavelPesquisa.vap_id_variavel_pesquisa,
      descricao: variavelPesquisa.vap_ds_variavel,
      foto_obrigatoria: variavelPesquisa.vap_st_foto_obrigatoria,      
      tipo: variavelPesquisa.vap_tp_variavel,            
      dadosColeta: DadoColetaView.renderMany(variavelPesquisa.DadosColeta)
    };
  },

  renderMany(variaveisPesquisa: VariavelPesquisa[]){
    return variaveisPesquisa.map(variavelPesquisa => this.render(variavelPesquisa));
  }
};