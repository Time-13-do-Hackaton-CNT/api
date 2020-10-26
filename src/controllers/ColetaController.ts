import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Coleta from '../models/Coleta';
import ColetaView from '../views/ColetaView'
import * as Yup from 'yup';
import Usuario from '../models/Usuario';
import Rota from '../models/Rota';
import Pesquisa from '../models/Pesquisa';

export default {
  async create(requisicao: Request, resposta: Response){    
    const {    
      usuario,
      rota, 
      pesquisa,
      trecho,
      rodovia
    } = requisicao.body;
  
    const coletasRepository = getRepository(Coleta);

    const data = {      
      usuario,
      rota, 
      pesquisa,
      trecho,
      rodovia
    };

    const schema = Yup.object().shape({
      usuario: Yup.number().required('Usuario é um campo obrigatório'),
      rota: Yup.number().required('Rota é um campo obrigatório'),
      pesquisa: Yup.number().required('Pesquisa é um campo obrigatório'),
      trecho: Yup.number().required('Trecho é um campo obrigatório'),
      rodovia: Yup.string(),
    });

    await schema.validate(data, {
      abortEarly: false,      
    });

    const usuariosRepository = getRepository(Usuario);
    const loUsuario = await usuariosRepository.findOneOrFail(usuario);

    const rotasRepository = getRepository(Rota);
    const loRota = await rotasRepository.findOneOrFail(rota);

    const pesquisasRepository = getRepository(Pesquisa);
    const loPesquisa = await pesquisasRepository.findOneOrFail(pesquisa);

    const finalData = {      
      usuario: loUsuario,
      rota: loRota, 
      pesquisa: loPesquisa,
      trecho,
      rodovia
    };

    // const finalData = schema.cast(data) as Coleta;

    const coleta = coletasRepository.create(finalData);
  
    await coletasRepository.save(coleta);
  
    return resposta.status(201).json(coleta);
  },

  async index(requisicao: Request, resposta: Response){
     const coletasRepository = getRepository(Coleta);

     const coletas = await coletasRepository.find({
       relations: ['dadosColeta']
     });

     return resposta.json(ColetaView.renderMany(coletas));    
  },

  async show(requisicao: Request, resposta: Response){
    const { id } = requisicao.params;

    const coletasRepository = getRepository(Coleta);

    const coleta = await coletasRepository.findOneOrFail(id, {
      relations: ['dadosColeta']
    });

    return resposta.json(ColetaView.render(coleta));
  },
};