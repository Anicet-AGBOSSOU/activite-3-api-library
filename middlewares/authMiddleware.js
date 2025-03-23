
const jwt = require("jsonwebtoken");
require(`dotenv`).config();

//Middleware pour vérifier un token JWT
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ msg: "Accès refusé. Token manquant" });

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token invalide" });
  }
};

module.exports = authMiddleware;




//Générer un JWT après connexion
//const jwt = require(`jsonwebtoken`);
//const generateToken = (user)=> {
   // return jwt.sign({id:user._id},
        //`secret_key`,{expiresIn:`1h`});
//};

//Mise en place de JWT dans Express
//module.exports = (req, res, next) => {
    //const token = req.header(`Authorization`);
    //if (!token) return res.status(401).json({message: `Accès interdit`});
    //try {
       // const verified = jwt.verify(token, `secret_key`);
       // req.user = verified;
    
       // next();
   // } catch (error) {
   //     res.status(400).json({message: `Token invalid`});
  //  }
//};