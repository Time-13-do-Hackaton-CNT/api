import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import DadoColeta from '../models/DadoColeta';
import DadoColetaView from '../views/DadoColetaView'
import * as Yup from 'yup';
import VariavelPesquisa from '../models/VariavelPesquisa';
import Coleta from '../models/Coleta';

export default {
  async create(requisicao: Request, resposta: Response){    
    const {      
      coleta,
      variavel_pesquisa,
      latitude,
      longitude,
      fotos_dado
    } = requisicao.body;

    const data = {      
      coleta,
      variavel_pesquisa,
      latitude,
      longitude,
      fotos_dado
    };

    const schema = Yup.object().shape({
      coleta: Yup.number().required('Coleta é uma informação obrigatória'),
      variavel_pesquisa: Yup.number().required('Variável de Pesquisa é uma informação obrigatória'),
      latitude: Yup.number().required('Latitude é uma informação obrigatória'),
      longitude: Yup.number().required('Longitude é uma informação obrigatória'),
      fotos_dado: Yup.array().meta({
          diretorio: Yup.string()
      })
    });    

    await schema.validate(data, {
      abortEarly: false,      
    });

    const castData = schema.cast(data);

    const coletasRepository = getRepository(Coleta);
    const loColeta = await coletasRepository.findOneOrFail(castData?.coleta);

    const variaveisPesquisaRepository = getRepository(VariavelPesquisa);
    const loVariavelPesquisa = await variaveisPesquisaRepository.findOneOrFail(castData?.variavel_pesquisa);

    const repositoryData = {
      coleta: loColeta,
      variavel_pesquisa: loVariavelPesquisa,
      latitude: castData?.latitude,
      longitude: castData?.longitude
    };

    const dadosColetaRepository = getRepository(DadoColeta);

    const dadoColeta = dadosColetaRepository.create(repositoryData);
  
    await dadosColetaRepository.save(dadoColeta);
  
    return resposta.status(201).json(dadoColeta);
  },

  async index(requisicao: Request, resposta: Response){
     const dadosColetaRepository = getRepository(DadoColeta);

     const dadosColeta = await dadosColetaRepository.find({
       relations: ['fotos_dado']
     });

     return resposta.json(DadoColetaView.renderMany(dadosColeta));    
  },

  async show(requisicao: Request, resposta: Response){
    const { id } = requisicao.params;

    const dadosColetaRepository = getRepository(DadoColeta);

    const dadoColeta = await dadosColetaRepository.findOneOrFail(id, {
      relations: ['fotos_dado']
    });

    return resposta.json(DadoColetaView.render(dadoColeta));
  },
};