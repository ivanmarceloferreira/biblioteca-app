import { DataTypes, Model } from "sequelize"
import sequelize from '../config/database';
import AuthorModel from "./AuthorModel";

class BookModel extends Model {
    id: number | undefined
    name: string | undefined
    authorId: number | undefined
}

BookModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        authorId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        sequelize,
        modelName: 'BookModel',
        tableName: 'books'
    }
)

BookModel.belongsTo(AuthorModel, {
    foreignKey: 'authorId', // definindo qual é a fk
    as: 'author' // define o nome da relação na busca
})
// mapeamento bidirecional 
AuthorModel.hasMany(BookModel, {
    foreignKey: 'authorId',
    as: 'author'
})

export default BookModel