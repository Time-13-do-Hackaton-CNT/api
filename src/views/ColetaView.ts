import Coleta from '../models/Coleta';
import DadoColetaView from './DadoColetaView';
import PesquisaView from './PesquisaView';
import RotaView from './RotaView';
import UsuarioView from './UsuarioView';

export default {
  render(coleta: Coleta) {
    return {
      id: coleta.id,
      usuario: coleta.usuario,
      pesquisa: coleta.pesquisa,
      rota: coleta.rota,
      rodovia: coleta.rodovia,
      trecho: coleta.trecho,      
      dados_coleta: DadoColetaView.renderMany(coleta.dados_coleta)      
    };
  },

  renderMany(coletas: Coleta[]){
    return coletas.map(coleta => this.render(coleta));
  }
};