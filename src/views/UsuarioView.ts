import Usuario from '../models/Usuario';
import ColetaView from './ColetaView';

export default {
  render(usuario: Usuario) {
    return {
      id: usuario.usu_id_usuario,
      login: usuario.usu_ds_login,      
      coletas: ColetaView.renderMany(usuario.coletas)
    };
  },

  renderMany(usuarios: Usuario[]){
    return usuarios.map(usuario => this.render(usuario));
  }
};