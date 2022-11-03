const mongoose = require('mongoose')

const connectDB = async (URL) => {

    try{
        await mongoose.connect(
            URL,
            {
                useNewUrlParser : true,
                useUnifiedTopology : true,
            },
            () => {
                console.log("MongoDB connected...");
            }
        )
    }catch(err){
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectDB