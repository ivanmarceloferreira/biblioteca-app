import { DataTypes, Model } from "sequelize"
import sequelize from '../config/database';
import BookModel from "./BookModel";

class CollectionModel extends Model {
    id: number | undefined
    name: string | undefined
}

CollectionModel.init(
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
    },
    {
        sequelize,
        modelName: 'CollectionModel',
        tableName: 'collections'
    }
)

CollectionModel.belongsToMany(BookModel, {
    through: 'collection_books',
    foreignKey: 'collectionId',
    as: 'books'
})

BookModel.belongsToMany(CollectionModel, {
    through: 'collection_books',
    foreignKey: 'bookId',
    as: 'collections'
})

export default CollectionModel