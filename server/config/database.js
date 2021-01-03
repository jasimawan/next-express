const mongoose = require('mongoose');
module.exports = async () => {
    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log(`> Connected to MongoDB on ${process.env.MONGO_URL}`);
};
