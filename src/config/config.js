import mongoose from "mongoose";

const database = mongoose.connect(process.env.MONGO_CONNECTION,
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

export default database