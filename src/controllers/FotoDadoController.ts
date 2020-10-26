import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import FotoDado from '../models/FotoDado';
import FotoDadoView from '../views/FotoDadoView'
import * as Yup from 'yup';

export default {
  async create(requisicao: Request, resposta: Response){    
    const {      
      url    
    } = requisicao.body;
  
    const fotodadosRepository = getRepository(FotoDado);

    const data = {      
      url  
    };

    const schema = Yup.object().shape({
      url: Yup.string().required('Url é um campo obrigatório').max(100)
    });    

    await schema.validate(data, {
      abortEarly: false,      
    });

    // const finalData = schema.cast(data) as FotoDado;

    // const fotodado = fotodadosRepository.create(finalData);
  
    // await fotodadosRepository.save(fotodado);
  
    // return resposta.status(201).json(fotodado);
  },

  async index(requisicao: Request, resposta: Response){
     const fotodadosRepository = getRepository(FotoDado);

     const fotodados = await fotodadosRepository.find({
       relations: ['coletas']
     });

     return resposta.json(FotoDadoView.renderMany(fotodados));    
  },

  async show(requisicao: Request, resposta: Response){
    const { id } = requisicao.params;

    const fotodadosRepository = getRepository(FotoDado);

    const fotodado = await fotodadosRepository.findOneOrFail(id, {
      relations: ['coletas']
    });

    return resposta.json(FotoDadoView.render(fotodado));
  },
};