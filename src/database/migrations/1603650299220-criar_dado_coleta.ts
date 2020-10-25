import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class criarDadoColeta1603650299220 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'DAC_dado_coleta',
        columns: [
          {
            name: 'dac_id_dado_coleta',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'dac_id_coleta',
            type: 'integer',
          },
          {
            name: 'dac_id_variavel_pesquisa',
            type: 'integer',
          },
          {
            name: 'dac_id_latitude',
            type: 'float',
            scale: 10,
            precision: 2
          },
          {
            name: 'dac_id_longitude',
            type: 'float',
            scale: 10,
            precision: 2
          }       
        ],
        foreignKeys: [
          {
            name: 'FK_COLETA',
            columnNames: ['dac_id_coleta'],
            referencedTableName: 'COL_coleta',
            referencedColumnNames: ['col_id_coleta'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          {
            name: 'FK_VARIAVEL_PESQUISA',
            columnNames: ['dac_id_variavel_pesquisa'],
            referencedTableName: 'VAP_variavel_pesquisa',
            referencedColumnNames: ['vap_id_variavel_pesquisa'],
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT',
          }          
        ]      
      }));  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('DAC_dado_coleta');
    }

}
