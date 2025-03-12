import { DataTypes, Model } from "sequelize";
import sequelize from '../config/database';
import bcrypt from 'bcrypt';

class UserModel extends Model {
    id: number | undefined;
    name: string | undefined;
    email: string | undefined;
    password: string | undefined;

    public async hashPassword() {
        this.password = await bcrypt.hash(this.password!, 10)
    }

    public async validatePassword(password: string) : Promise<boolean> {
        return await bcrypt.compare(password, this.password!)
    }
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
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
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

UserModel.beforeCreate(async (user: UserModel) => {
    await user.hashPassword()
});

UserModel.beforeUpdate(async (user: UserModel) => {
    if (user.changed('password')) {
        await user.hashPassword()
    }
})

export default UserModel