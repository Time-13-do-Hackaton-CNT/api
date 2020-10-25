import DadoColeta from '../models/DadoColeta';
import FotoDadoView from './FotoDadoView';

export default {
  render(dadoColeta: DadoColeta) {
    return {
      id: dadoColeta.dac_id_dado_coleta,
      latitude: dadoColeta.dac_vl_latitude,
      longitude: dadoColeta.dac_vl_longitude,      
      fotosDado: FotoDadoView.renderMany(dadoColeta.FotosDado)
    };
  },

  renderMany(dadosColeta: DadoColeta[]){
    return dadosColeta.map(dadoColeta => this.render(dadoColeta));
  }
};