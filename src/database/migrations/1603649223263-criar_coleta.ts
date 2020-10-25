import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class criarColeta1603649223263 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'COL_coleta',
        columns: [
          {
            name: 'col_id_coleta',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'col_id_usuario',
            type: 'integer',
          },
          {
            name: 'col_id_rota',
            type: 'integer',
          },
          {
            name: 'col_id_pesquisa',
            type: 'integer',
          },
          {
            name: 'col_nu_trecho',
            type: 'integer',
          },
          {
            name: 'col_ds_rodovia',
            type: 'varchar',
          }          
        ],
        foreignKeys: [
          {
            name: 'FK_USUARIO',
            columnNames: ['col_id_usuario'],
            referencedTableName: 'USU_usuario',
            referencedColumnNames: ['usu_id_usuario'],
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
          },
          {
            name: 'FK_ROTA',
            columnNames: ['col_id_rota'],
            referencedTableName: 'ROT_rota',
            referencedColumnNames: ['rot_id_rota'],
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
          },
          {
            name: 'FK_PESQUISA',
            columnNames: ['col_id_pesquisa'],
            referencedTableName: 'PES_pesquisa',
            referencedColumnNames: ['pes_id_pesquisa'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ]      
      }));  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('COL_coleta');
    }

}
