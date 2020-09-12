module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            type: String,
            price: String,
        }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Bike = mongoose.model("bike", schema);
    return Bike;
};