const mongoose = require('mongoose');
module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`> Connected to MongoDB on ${process.env.MONGO_URL}`);
    } catch (err) {
        throw err;
    }
};
