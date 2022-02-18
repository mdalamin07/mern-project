const mongoose = require("mongoose");
// DataBase
const DB = process.env.DATABASE;

mongoose.connect(DB).then(() =>{
    console.log("Database connection successful");
}).catch((error) =>{
    console.log("No connection")
});
// mongoose.connect(DB).then(() => console.log( 'Database Connected' ))
// .catch(err => console.log( err ));

// , {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify:false
// }