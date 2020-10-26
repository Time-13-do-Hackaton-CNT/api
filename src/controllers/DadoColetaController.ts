import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import DadoColeta from '../models/DadoColeta';
import DadoColetaView from '../views/DadoColetaView'
import * as Yup from 'yup';

export default {
  async create(requisicao: Request, resposta: Response){    
    const {      
      login    
    } = requisicao.body;
  
    const dadocoletasRepository = getRepository(DadoColeta);

    const data = {      
      login  
    };

    const schema = Yup.object().shape({
      login: Yup.string().required('Login é um campo obrigatório').max(100)
    });    

    await schema.validate(data, {
      abortEarly: false,      
    });

    // const finalData = schema.cast(data) as DadoColeta;

    // const dadocoleta = dadocoletasRepository.create(finalData);
  
    // await dadocoletasRepository.save(dadocoleta);
  
    // return resposta.status(201).json(dadocoleta);
  },

  async index(requisicao: Request, resposta: Response){
     const dadocoletasRepository = getRepository(DadoColeta);

     const dadocoletas = await dadocoletasRepository.find({
       relations: ['coletas']
     });

     return resposta.json(DadoColetaView.renderMany(dadocoletas));    
  },

  async show(requisicao: Request, resposta: Response){
    const { id } = requisicao.params;

    const dadocoletasRepository = getRepository(DadoColeta);

    const dadocoleta = await dadocoletasRepository.findOneOrFail(id, {
      relations: ['coletas']
    });

    return resposta.json(DadoColetaView.render(dadocoleta));
  },
};