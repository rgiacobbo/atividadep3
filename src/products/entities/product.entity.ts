import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: 'products',
})
export class Products extends Model {
  @Column
  declare name: string;

  @Column
  declare description: string;

  @Column
  declare price: number;
}
