import Coleta from '../models/Coleta';
import DadoColetaView from './DadoColetaView';

export default {
  render(coleta: Coleta) {
    return {
      id: coleta.col_id_coleta,
      rodovia: coleta.col_ds_rodovia,
      trecho: coleta.col_nu_trecho,      
      dadosColeta: DadoColetaView.renderMany(coleta.DadosColeta)
    };
  },

  renderMany(coletas: Coleta[]){
    return coletas.map(coleta => this.render(coleta));
  }
};