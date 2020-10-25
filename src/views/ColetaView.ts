import Coleta from '../models/Coleta';
import DadoColetaView from './DadoColetaView';

export default {
  render(coleta: Coleta) {
    return {
      col_id_coleta: coleta.col_id_coleta,
      col_ds_rodovia: coleta.col_ds_rodovia,
      col_nu_trecho: coleta.col_nu_trecho,      
      dadosColeta: DadoColetaView.renderMany(coleta.DadosColeta)
    };
  },

  renderMany(coletas: Coleta[]){
    return coletas.map(coleta => this.render(coleta));
  }
};