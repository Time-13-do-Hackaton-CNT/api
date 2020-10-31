import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import VariavelPesquisa from '../models/VariavelPesquisa';
import VariavelPesquisaView from '../views/VariavelPesquisaView'
import * as Yup from 'yup';

export default {
  async create(requisicao: Request, resposta: Response){    
    const {      
      variavel_macro,
      descricao,      
      foto_obrigatoria,
      tipo      
    } = requisicao.body;
  
    const variaveisRepository = getRepository(VariavelPesquisa);

    const data = {   
      variavel_macro,   
      descricao,      
      foto_obrigatoria,
      tipo     
    };

    const schema = Yup.object().shape({
      descricao: Yup.string().required('Descrição é um campo obrigatório').max(100),
      foto_obrigatoria: Yup.boolean().required(),
      tipo: Yup.string().required().required(
          'Tipo é um campo obrigatório. Valores possíveis: G - Grupo, B - Bloco, U - Sub-bloco, S - Presença, D - Predominância.'
        ).max(1)  
    });    

    await schema.validate(data, {
      abortEarly: false,      
    });

    const finalData = schema.cast(data) as VariavelPesquisa;

    const variavel = variaveisRepository.create(finalData);
  
    await variaveisRepository.save(variavel);
  
    return resposta.status(201).json(variavel);
  },

  async index(requisicao: Request, resposta: Response){
     const variaveisRepository = getRepository(VariavelPesquisa);

     const variaveis = await variaveisRepository.find({
       relations: ['variavel_macro', 'dados_coleta', 'variaveis_micro']
     });

     return resposta.json(VariavelPesquisaView.renderMany(variaveis));    
  },

  async show(requisicao: Request, resposta: Response){
    const { id } = requisicao.params;

    const rotasRepository = getRepository(VariavelPesquisa);

    const variavel = await rotasRepository.findOneOrFail(id,{
      relations: ['variavel_macro', 'dados_coleta', 'variaveis_micro']
    });

    return resposta.json(VariavelPesquisaView.render(variavel));
  },
};