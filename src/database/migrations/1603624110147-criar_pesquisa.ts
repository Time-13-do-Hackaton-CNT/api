import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class criarPesquisa1603624110147 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'PES_pesquisa',
        columns: [
          {
            name: 'pes_id_pesquisa',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'pes_ds_pesquisa',
            type: 'varchar'
          },
          {
            name: 'pes_nu_ano',
            type: 'integer'            
          } 
        ]      
      }));    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('PES_pesquisa');
    }
}
