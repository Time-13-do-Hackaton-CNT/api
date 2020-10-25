import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Rota from '../models/Rota';
import RotaView from '../views/RotaView'
import * as Yup from 'yup';

export default {
  async create(requisicao: Request, resposta: Response){    
    const {      
      descricao,      
      latitude_origem,
      longitude_origem,
      latitude_destino,
      longitude_destino      
    } = requisicao.body;
  
    const rotasRepository = getRepository(Rota);

    const data = {      
      descricao,      
      latitude_origem,
      longitude_origem,
      latitude_destino,
      longitude_destino    
    };

    const schema = Yup.object().shape({
      descricao: Yup.string().required('Descrição é um campo obrigatório').max(100),
      latitude_origem: Yup.number().required(),
      longitude_origem: Yup.number().required(),
      latitude_destino: Yup.number().required(),
      longitude_destino: Yup.number().required(),            
    });    

    await schema.validate(data, {
      abortEarly: false,      
    });

    const finalData = schema.cast(data) as Rota;

    const rota = rotasRepository.create(finalData);
  
    await rotasRepository.save(rota);
  
    return resposta.status(201).json(rota);
  },

  async index(requisicao: Request, resposta: Response){
     const rotasRepository = getRepository(Rota);

     const rotas = await rotasRepository.find({
       relations: ['coletas']
     });

     return resposta.json(RotaView.renderMany(rotas));    
  },

  async show(requisicao: Request, resposta: Response){
    const { id } = requisicao.params;

    const rotasRepository = getRepository(Rota);

    const rota = await rotasRepository.findOneOrFail(id, {
      relations: ['coletas']
    });

    return resposta.json(RotaView.render(rota));
  },
};