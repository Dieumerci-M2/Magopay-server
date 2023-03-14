import mongoose from "mongoose";

const database = mongoose.connect('mongodb+srv://Magopay-server:Magopay-server@magopay.k9brlp1.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

export default database