import DadoColeta from '../models/DadoColeta';
import FotoDadoView from './FotoDadoView';

export default {
  render(dadoColeta: DadoColeta) {
    return {
      id: dadoColeta.id,
      latitude: dadoColeta.latitude,
      longitude: dadoColeta.longitude,      
      fotos_dado: FotoDadoView.renderMany(dadoColeta.fotos_dado)
    };
  },

  renderMany(dadosColeta: DadoColeta[]){
    return dadosColeta.map(dadoColeta => this.render(dadoColeta));
  }
};