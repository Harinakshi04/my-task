import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "candidates", timestamps: true })
export class Candidate extends Model {
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  mobile!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  gender?: string;
}