import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class criarUsuario1603641602076 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'USU_usuario',
        columns: [
          {
            name: 'usu_id_usuario',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'usu_ds_login',
            type: 'varchar'
          }
        ]      
      }));  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('USU_usuario');
    }

}
