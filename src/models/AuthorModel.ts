import { DataTypes, Model } from "sequelize"
import sequelize from '../config/database';

class AuthorModel extends Model {
    id: number | undefined
    name: string | undefined
}

AuthorModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'AuthorModel',
        tableName: 'authors'
    }
)

export default AuthorModel