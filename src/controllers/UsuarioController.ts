import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Usuario from '../models/Usuario';
import UsuarioView from '../views/UsuarioView'
import * as Yup from 'yup';

export default {
  async create(requisicao: Request, resposta: Response){    
    const {      
      login    
    } = requisicao.body;
  
    const usuariosRepository = getRepository(Usuario);

    const data = {      
      login  
    };

    const schema = Yup.object().shape({
      login: Yup.string().required('Login é um campo obrigatório').max(100)
    });    

    await schema.validate(data, {
      abortEarly: false,      
    });

    const finalData = schema.cast(data) as Usuario;

    const usuario = usuariosRepository.create(finalData);
  
    await usuariosRepository.save(usuario);
  
    return resposta.status(201).json(usuario);
  },

  async index(requisicao: Request, resposta: Response){
     const usuariosRepository = getRepository(Usuario);

     const usuarios = await usuariosRepository.find({
       relations: ['coletas']
     });

     return resposta.json(UsuarioView.renderMany(usuarios));    
  },

  async show(requisicao: Request, resposta: Response){
    const { id } = requisicao.params;

    const usuariosRepository = getRepository(Usuario);

    const usuario = await usuariosRepository.findOneOrFail(id, {
      relations: ['coletas']
    });

    return resposta.json(UsuarioView.render(usuario));
  },
};