import Rota from '../models/Rota';
import ColetaView from './ColetaView';

export default {
  render(rota: Rota) {
    return {
      id: rota.id,
      descricao: rota.descricao,
      latitude_origem: rota.latitude_origem,      
      longitude_origem: rota.longitude_origem,
      latitude_destino: rota.latitude_destino,      
      longitude_destino: rota.longitude_destino,
      coletas: ColetaView.renderMany(rota.coletas)
    };
  },

  renderMany(rotas: Rota[]){
    return rotas.map(rota => this.render(rota));
  }
};