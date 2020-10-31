import FotoDado from '../models/FotoDado';

export default {
  render(fotoDado: FotoDado) {
    return {
      id: fotoDado.id,
      url: `http://localhost:3333/uploads/fotos/${fotoDado.diretorio}`,            
    };
  },

  renderMany(fotosDado: FotoDado[]){
    return fotosDado.map(fotoDado => this.render(fotoDado));
  }
};