import Pesquisa from '../models/Pesquisa';
import ColetaView from './ColetaView';

export default {
  render(pesquisa: Pesquisa) {
    return {
      id: pesquisa.id,
      descricao: pesquisa.descricao,
      ano: pesquisa.ano,            
      coletas: ColetaView.renderMany(pesquisa.coletas)
    };
  },

  renderMany(pesquisas: Pesquisa[]){
    return pesquisas.map(pesquisa => this.render(pesquisa));
  }
};