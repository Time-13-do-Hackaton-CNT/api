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

    const data = {      
      usuario,
      rota, 
      pesquisa,
      trecho,
      rodovia
    };

    const schema = Yup.object().shape({
      usuario: Yup.number().required('Usuario é uma informação obrigatória'),
      rota: Yup.number().required('Rota é uma informação obrigatória'),
      pesquisa: Yup.number().required('Pesquisa é uma informação obrigatória'),
      trecho: Yup.number().required('Trecho é uma informação obrigatória'),
      rodovia: Yup.string(),
    });

    await schema.validate(data, {
      abortEarly: false,      
    });

    const castData = schema.cast(data);

    const usuariosRepository = getRepository(Usuario);
    const loUsuario = await usuariosRepository.findOneOrFail(castData?.usuario);

    const rotasRepository = getRepository(Rota);
    const loRota = await rotasRepository.findOneOrFail(castData?.rota);

    const pesquisasRepository = getRepository(Pesquisa);
    const loPesquisa = await pesquisasRepository.findOneOrFail(castData?.pesquisa);

    const repositoryData = {      
      usuario: loUsuario,
      rota: loRota, 
      pesquisa: loPesquisa,
      trecho: castData?.trecho,
      rodovia: castData?.rodovia
    };

    const coletasRepository = getRepository(Coleta);
    const coleta = coletasRepository.create(repositoryData);
  
    await coletasRepository.save(coleta);
  
    return resposta.status(201).json(coleta);
  },

  async index(requisicao: Request, resposta: Response){
     const coletasRepository = getRepository(Coleta);

     const coletas = await coletasRepository.find({
       relations: ['dados_coleta']
     });

     return resposta.json(ColetaView.renderMany(coletas));    
  },

  async show(requisicao: Request, resposta: Response){
    const { id } = requisicao.params;

    const coletasRepository = getRepository(Coleta);

    const coleta = await coletasRepository.findOneOrFail(id, {
      relations: ['dados_coleta']
    });

    return resposta.json(ColetaView.render(coleta));
  },
};