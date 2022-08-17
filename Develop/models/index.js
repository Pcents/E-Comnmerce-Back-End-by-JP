// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "cascade",
});
// Categories have many Products-only need one of these keys
Category.hasMany(Product, {
  foreignKey: "category_id",
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: "product_id",
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "Product_category",
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: "tag_id",
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "Product_tag",
});
// allow products to have multiple tags and tags to have
// ,amu products by using the products tag through model

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
