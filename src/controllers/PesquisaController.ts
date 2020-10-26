import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Pesquisa from '../models/Pesquisa';
import PesquisaView from '../views/PesquisaView'
import * as Yup from 'yup';

export default {
  async create(requisicao: Request, resposta: Response){    
    const {      
      descricao,      
      ano      
    } = requisicao.body;
  
    const pesquisasRepository = getRepository(Pesquisa);

    const data = {      
      descricao,      
      ano   
    };

    const schema = Yup.object().shape({
      descricao: Yup.string().required('Descrição é um campo obrigatório').max(100),
      ano: Yup.number().required()      
    });    

    await schema.validate(data, {
      abortEarly: false,      
    });

    const finalData = schema.cast(data) as Pesquisa;

    const pesquisa = pesquisasRepository.create(finalData);
  
    await pesquisasRepository.save(pesquisa);
  
    return resposta.status(201).json(pesquisa);
  },

  async index(requisicao: Request, resposta: Response){
     const pesquisasRepository = getRepository(Pesquisa);

     const rotas = await pesquisasRepository.find({
       relations: ['coletas']
     });

     return resposta.json(PesquisaView.renderMany(rotas));    
  },

  async show(requisicao: Request, resposta: Response){
    const { id } = requisicao.params;

    const pesquisasRepository = getRepository(Pesquisa);

    const pesquisa = await pesquisasRepository.findOneOrFail(id, {
      relations: ['coletas']
    });

    return resposta.json(PesquisaView.render(pesquisa));
  },
};