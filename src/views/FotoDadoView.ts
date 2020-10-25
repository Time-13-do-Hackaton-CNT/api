import FotoDado from '../models/FotoDado';

export default {
  render(fotoDado: FotoDado) {
    return {
      id: fotoDado.fod_id_foto_dado,
      url: `http://localhost:3333/uploads/fotos/${fotoDado.fod_ds_diretorio}`,            
    };
  },

  renderMany(fotosDado: FotoDado[]){
    return fotosDado.map(fotoDado => this.render(fotoDado));
  }
};