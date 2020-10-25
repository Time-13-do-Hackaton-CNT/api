import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class criarFotoDado1603650886868 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'FOD_foto_dado',
        columns: [
          {
            name: 'fod_id_foto_dado',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'fod_id_dado_coleta',
            type: 'integer',
          },
          {
            name: 'fod_ds_diretorio',
            type: 'varchar',
          }
        ],
        foreignKeys: [
          {
            name: 'FK_DADO_COLETA',
            columnNames: ['fod_id_dado_coleta'],
            referencedTableName: 'DAC_dado_coleta',
            referencedColumnNames: ['dac_id_dado_coleta'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }       
        ]      
      }));  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('FOD_foto_dado');
    }

}
