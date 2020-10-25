import DadoColeta from '../models/DadoColeta';
import FotoDadoView from './FotoDadoView';

export default {
  render(dadoColeta: DadoColeta) {
    return {
      dac_id_dado_coleta: dadoColeta.dac_id_dado_coleta,
      dac_vl_latitude: dadoColeta.dac_vl_latitude,
      dac_vl_longitude: dadoColeta.dac_vl_longitude,      
      fotosDado: FotoDadoView.renderMany(dadoColeta.FotosDado)
    };
  },

  renderMany(dadosColeta: DadoColeta[]){
    return dadosColeta.map(dadoColeta => this.render(dadoColeta));
  }
};