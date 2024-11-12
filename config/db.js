// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://smakshay55:iCLqNkw4mkk94VFs@cluster0.mongodb.net/food-del?retryWrites=true&w=majority', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log("DB Connected");
//   } catch (error) {
//     console.error("Error connecting to DB:", error);
//   }
// };

import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://smakshay55:iCLqNkw4mkk94VFs@cluster0.mongodb.net/food-del?retryWrites=true&w=majority', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('DB Connected'))
.catch(err => console.log('Error connecting to DB:', err));
