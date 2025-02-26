import { DataTypes, Model } from "sequelize";
import sequelize from '../config/database';

class UserModel extends Model {
    id: number | undefined;
    name: string | undefined;
}

UserModel.init({
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
    modelName: 'UserModel',
    tableName: 'users'
} 
)

export default UserModel