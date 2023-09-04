const chatUpload = require('../models/uploadPostModel');

exports.getAllPosts = async (userId) => {
    try {
        const userPosts = await chatUpload.find({ userId });
        return userPosts;
    } catch (err) {
        console.error(err);
    }
};