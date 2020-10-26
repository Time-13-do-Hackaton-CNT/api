import Usuario from '../models/Usuario';
import ColetaView from './ColetaView';

export default {
  render(usuario: Usuario) {
    return {
      id: usuario.id,
      login: usuario.login,      
      coletas: ColetaView.renderMany(usuario.coletas)
    };
  },

  renderMany(usuarios: Usuario[]){
    return usuarios.map(usuario => this.render(usuario));
  }
};