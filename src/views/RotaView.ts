import Rota from '../models/Rota';
import ColetaView from './ColetaView';

export default {
  render(rota: Rota) {
    return {
      id: rota.rot_id_rota,
      rota: rota.rot_ds_rota,
      latitude_origem: rota.rot_vl_latitude_origem,      
      longitude_origem: rota.rot_vl_longitude_origem,
      latitude_destino: rota.rot_vl_latitude_destino,      
      longitude_destino: rota.rot_vl_longitude_destino,
      coletas: ColetaView.renderMany(rota.coletas)
    };
  },

  renderMany(rotas: Rota[]){
    return rotas.map(rota => this.render(rota));
  }
};