const { mongoose } = require(".");

module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      name: String,
      image: String,
      price: Number,
    },
    { timestamps: true }
  );
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const Menu = mongoose.model("menus", schema);
  return Menu;
};
