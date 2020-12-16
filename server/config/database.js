module.exports = async (mongoose) => {
  try {
    await mongoose.connect('mongodb://localhost:27017/nextapp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('> Connected to MongoDB on mongodb://localhost:27017/nextapp');
  } catch (err) {
    throw err;
  }
};
