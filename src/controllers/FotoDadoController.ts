import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import FotoDado from '../models/FotoDado';
import FotoDadoView from '../views/FotoDadoView'
import * as Yup from 'yup';
import DadoColeta from '../models/DadoColeta';

export default {
  async create(requisicao: Request, resposta: Response){    

    //console.log(requisicao);

    //return resposta.status(201).json({message:1});

    const {      
      dado_coleta    
    } = requisicao.body;

    const {
      filename
    } = requisicao.file;

    const data = {      
      dado_coleta,
      diretorio: filename 
    };

    const schema = Yup.object().shape({
      dado_coleta: Yup.number().required('Dado de coleta é uma informação obrigatória'),
      diretorio: Yup.string().required('Diretório é uma informação obrigatória').max(300)
    });    

    await schema.validate(data, {
      abortEarly: false,      
    });

    const castData = schema.cast(data);

    const dadosColetaRepository = getRepository(DadoColeta);
    const loDadoColeta = await dadosColetaRepository.findOneOrFail(castData?.dado_coleta);

    const repositoryData = {      
      dado_coleta: loDadoColeta,
      diretorio: castData?.diretorio
    };

    const fotosDadoRepository = getRepository(FotoDado);

    const fotoDado = fotosDadoRepository.create(repositoryData);
  
    await fotosDadoRepository.save(fotoDado);
  
    return resposta.status(201).json(fotoDado);
  },

  async index(requisicao: Request, resposta: Response){
     const fotosDadoRepository = getRepository(FotoDado);

     const fotosDado = await fotosDadoRepository.find();

     return resposta.json(FotoDadoView.renderMany(fotosDado));    
  },

  async show(requisicao: Request, resposta: Response){
    const { id } = requisicao.params;

    const fotodadosRepository = getRepository(FotoDado);

    const fotodado = await fotodadosRepository.findOneOrFail(id);

    return resposta.json(FotoDadoView.render(fotodado));
  },
};