import { Table, Column, Model } from "sequelize-typescript";

@Table({ tableName: "recruiters" })
export class Recruiter extends Model {

  @Column({ primaryKey: true, autoIncrement: true })
  id!: number;

  @Column({ allowNull: false })
  FirstName!: string;

  @Column({ allowNull: false })
  LastName!: string;

   @Column({ allowNull: false })
  CompanyName!: string;

  @Column({ allowNull: false, unique: true })
  email!: string;

  @Column({})
  phone!: string;

  @Column({ allowNull: false })
  password!: string;

  @Column({ defaultValue: false })
  isVerified!: boolean;
}