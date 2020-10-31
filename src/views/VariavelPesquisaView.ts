import VariavelPesquisa from '../models/VariavelPesquisa';
import DadoColetaView from './DadoColetaView';
import VariavelPesquisaView from './VariavelPesquisaView';

export default {
  render(variavelPesquisa: VariavelPesquisa) {
    return {
      id: variavelPesquisa.id,
      variavel_macro: variavelPesquisa.variavel_macro,
      descricao: variavelPesquisa.descricao,
      foto_obrigatoria: variavelPesquisa.foto_obrigatoria,      
      tipo: variavelPesquisa.tipo,            
      dados_coleta: DadoColetaView.renderMany(variavelPesquisa.dados_coleta),
      variaveis_micro: variavelPesquisa.variaveis_micro
    };
  },

  renderMany(variaveisPesquisa: VariavelPesquisa[]){
    return variaveisPesquisa.map(variavelPesquisa => this.render(variavelPesquisa));
  }
};