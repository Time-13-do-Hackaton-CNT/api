import Usuario from '../models/Usuario';
import ColetaView from './ColetaView';

export default {
  render(usuario: Usuario) {
    return {
      usu_id_usuario: usuario.usu_id_usuario,
      usu_ds_login: usuario.usu_ds_login,      
      coletas: ColetaView.renderMany(usuario.coletas)
    };
  },

  renderMany(usuarios: Usuario[]){
    return usuarios.map(usuario => this.render(usuario));
  }
};