const mongoose = require("mongoose")

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI)

        console.log('MongoDB Connected');
    }catch(error){
            console.log(error)
            ExplainVerbosity(1)
    }
};
 module.exports = connectDB;


    const userSchema = new mongoose.Schema({
        name: String,
        email: String,
        age: Number,
    });
    
    const User = mongoose.model('User', userSchema);
    
      