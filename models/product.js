const {DataTypes}=require('sequelize');
const sequelize=require('../config/sequelize');

const Product=sequelize.define('Product',{
    productId:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    productName:{
      type:DataTypes.STRING,
      allowNull:false 
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.STRING,
        allowNull:false
    },
    imageVideo:{
        type:DataTypes.STRING,
        allowNull:true
    },
    category:{
        type:DataTypes.STRING,
        allowNull:true
    },
});

module.exports=Product;