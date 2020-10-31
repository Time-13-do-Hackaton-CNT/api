import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class criarVariavelPesquisa1603642848749 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'VAP_variavel_pesquisa',
        columns: [
          {
            name: 'vap_id_variavel_pesquisa',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'vap_id_variavel_macro',
            type: 'integer',
            isNullable: true
          },
          {
            name: 'vap_ds_variavel',
            type: 'varchar',
          },
          {
            name: 'vap_st_foto_obrigatoria',
            type: 'boolean',
            default: false
          },
          {
            name: 'vap_tp_variavel',
            type: 'char',
            length: '1'
          }
        ],
        foreignKeys: [
          {
            name: 'VariavelMacro',
            columnNames: ['vap_id_variavel_macro'],
            referencedTableName: 'VAP_variavel_pesquisa',
            referencedColumnNames: ['vap_id_variavel_pesquisa'],
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        ]      
      }));  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('VAP_variavel_pesquisa');
    }

}
