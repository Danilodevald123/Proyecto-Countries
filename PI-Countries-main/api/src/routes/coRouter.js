const { Router } = require('express');

const coRouter = Router();
const {getCountry,findCountry,} = require("../controllers/countryController");
/* const { validateName } = require('../middlewares/validacion'); */



coRouter.get("/", /* validateName,  */getCountry)

coRouter.get("/:id", findCountry);



module.exports = coRouter;