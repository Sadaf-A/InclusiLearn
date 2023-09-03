const User = require('../models/UserModel');

exports.loginUser = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user || user.password != password) {
            console.log('invalid creds');
        }
        return user._id;
    } catch (err) {
        console.error(err);
    }
};