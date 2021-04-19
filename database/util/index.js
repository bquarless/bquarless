const mongoose = require('mongoose');

module.exports.connection = async (uri, callback) => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL,{
            userNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }, null);
        console.log('Database Connected Successfully');
    }catch (error) {
        console.log(error);
    }
}
