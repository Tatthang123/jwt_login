const User = require('../model/users')
const bcrypt = require('bcrypt')
module.exports = {
    resgisterUser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)//mã hóa mật khẩu
            const newUser = await new User({
                name: req.body.name,
                email: req.body.email,
                password: hashed
            })
            const user = await newUser.save()
            res.status(200).json({
                EC: 1,
                data: user
            })
        } catch (error) {
            res.status(500).json(error)
        }
    },
    //kiểm tra đăng nhập
    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({ name: req.body.name })// tim người dùng trong database
            if (!user) { // nếu ko có thì trả lỗi về
                res.status(404).json(
                    "wrong name!!!"
                )
            }
            const validPassword = await bcrypt.compare( // kiểm tra password có nhập đúng không 
                req.body.password,
                user.password
            )
            if (!validPassword) {
                res.status(404).json(
                    "wrong password"
                )
            }
            if (user && validPassword) { // nếu người dùng đã có và mật khẩu đúng thì trả về người dùng
                res.status(200).json(user)
            }

        } catch (error) {
            res.status(500).json(error)
        }
    }
}