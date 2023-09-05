const chatUpload = require('../models/UploadPostModel');

exports.getAllPosts = async (userId) => {
    try {
        const userPosts = await chatUpload.find({ userId });
        return userPosts;
    } catch (err) {
        console.error(err);
    }
};