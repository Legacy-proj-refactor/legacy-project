const config =require("./config")

const { Sequelize, DataTypes } = require("sequelize");



const connection = new Sequelize(
  "marketplace",
  "root",
  "407000",
  {
    host: "localhost",
    dialect: "mysql",
    define:{
      timestamps:false,
    }
  }
);


// Define the Category model
const Category = connection.define('Categorys', {
  idcat: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  },
});
// Define the User model
const User = connection.define('users', {
  idu: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  },
  rols: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
});


// Define the Product model
const Product = connection.define('product', {
  idp: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  image: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  lastprice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  newprice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categorys_idcat: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: 'idcat',
    },
  },
  users_idu: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'idu',
    },
  },
  rate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  discription: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  size: {
    type: DataTypes.ENUM('xs', 'S', 'M', 'L', 'XL'),
    allowNull: false,
  },
  sellername: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
});

Product.belongsTo(Category, { foreignKey: 'categorys_idcat', as: 'category' });
Product.belongsTo(User, { foreignKey: 'users_idu', as: 'user' });

// Define the Save model
const Save = connection.define('saves', {
  idsave: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  users_idu: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'idu',
    },
  },
  product_idp: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: 'idp',
    },
  },
});

Save.belongsTo(User, { foreignKey: 'users_idu', as: 'user' });
Save.belongsTo(Product, { foreignKey: 'product_idp', as: 'product' });




connection.authenticate()
.then(()=>console.log("db connected"))
.catch((err)=>console.log("db didnt connect",err)) 
 



// connection
//   .sync({ force: true })
//   .then(() => {
//     console.log("db created successfully!");
//   })
//   .catch((error) => {
//     console.error("Unable to create db : ", error);
//   });






module.exports = {User,Save,Product,Category}
