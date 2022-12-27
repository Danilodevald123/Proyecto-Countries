const { Activity } = require("../db")
const { Country } = require("../db")


const postActivity = async (req, res) => {
    try {
        const { name, dificult, duration, season, pais } = req.body;
        let newActivity = await Activity.create({ name, dificult, duration, season });
        console.log(pais)

        let counDb = await Country.findAll({ where: { name: pais } })
        console.log(counDb)

        newActivity.addCountry(counDb)
        res.status(200).json(newActivity);

    } catch ({ message }) {
        res.status(400).json({ message });
    }
};  // crear una nueva actividad por body.

module.exports = {
    postActivity
}