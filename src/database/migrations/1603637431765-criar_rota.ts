import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class criarRota1603637431765 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'ROT_rota',
        columns: [
          {
            name: 'rot_id_rota',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'rot_ds_rota',
            type: 'varchar'
          },
          {
            name: 'rot_vl_latitude_origem',
            type: 'float',
            scale: 10,
            precision: 2
          },
          {
            name: 'rot_vl_longitude_origem',
            type: 'float',
            scale: 10,
            precision: 2
          },
          {
            name: 'rot_vl_latitude_destino',
            type: 'float',
            scale: 10,
            precision: 2
          },
          {
            name: 'rot_vl_longitude_destino',
            type: 'float',
            scale: 10,
            precision: 2
          }      
        ]      
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('ROT_rota');
    }

}
