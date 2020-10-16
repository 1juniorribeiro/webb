import { table } from "console";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602866257415 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
        {
          name: 'id',
          type: 'integer', //inteiro
          unsigned: true, // só numeros positivos
          isPrimary: true, // chave primaria que vai identificar o usuario
          isGenerated: true, // essa coluna vai ser gerada automaticamente
          generationStrategy: 'increment', // vai gerar os ids por incremento
        },
        {
          name:'name',
          type: 'varchar', //tipo caracteres curtos, 
        },
        {
          name:'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2, // os 2 são numeros antes e depois da virgula
        },
        {
          name:'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'about',
          type: 'text',
        },
        {
          name: 'instructions',
          type: 'text',
        },
        {
          name:'opening_hours',
          type: 'varchar',  
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false,
        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages');
  }

}
