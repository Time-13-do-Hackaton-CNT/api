import Rota from '../models/Rota';
import ColetaView from './ColetaView';

export default {
  render(rota: Rota) {
    return {
      rot_id_rota: rota.rot_id_rota,
      rot_ds_rota: rota.rot_ds_rota,
      rot_vl_latitude_origem: rota.rot_vl_latitude_origem,      
      rot_vl_longitude_origem: rota.rot_vl_longitude_origem,
      rot_vl_latitude_destino: rota.rot_vl_latitude_destino,      
      rot_vl_longitude_destino: rota.rot_vl_longitude_destino,
      coletas: ColetaView.renderMany(rota.coletas)
    };
  },

  renderMany(rotas: Rota[]){
    return rotas.map(rota => this.render(rota));
  }
};