const User = require('../model/users')

module.exports = {
    getAlluser: async (req, res) => {
        try {
            let result = await User.find({})
            res.status(200).json({
                EC: 1,
                data: result
            })
        } catch (error) {
            res.status(400).json(error)
        }
    },
    deleteUser: async (req, res) => {
        try {
            let result = await User.findByIdAndDelete({ _id: req.body.id })
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

}