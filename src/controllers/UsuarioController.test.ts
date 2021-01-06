//import { ApiRouteEnum } from 'routes';
import request from 'supertest';
import { createConnection } from 'typeorm';
import { app } from '../server';

describe('Teste UsuarioController', () => {
  beforeAll(async () => {
    await createConnection();
  });

  afterAll(async () => {
    //pode ser utilizado para limpar ou fechar conexões
  });

  it('Requisição /usuarios deve retornar o status 200!', async () => {
    const loResultado = await request(app).get('/usuarios');

    expect(loResultado.status).toBe(200);
    // expect(loResultado.body.data).toBe('Registros de usuarios');
  });

  it('Requisição /usuarios/:id deve retornar o status 200!', async () => {
    const loResultado = await request(app).get('/usuario/1');

    expect(loResultado.status).toBe(200);
    // expect(loResultado.body.data).toBe('Registro de uma usuario');
  });

  it('Requisição de criação de uma usuario deve retornar o status 201!', async () => {
    //Se a API tiver controle de autenticação de usuário
    // const loUsuario = await request(app).post(ApiRouteEnum.AuthLogin).send({
    //   email: "usuario@email.com",
    //   senha: "senha"
    // });
    // expect(loUsuario.status).toBe(200);

    const loResultado = await request(app).post('/usuario')    
      // .set({ token: loUsuario.body.token })
      .send({
        login: "caique_pimenta"	
      });

    expect(loResultado.status).toBe(201);
    // expect(loResultado.body.data).toBe('loResultadoado da criação de uma usuario');
  });
});