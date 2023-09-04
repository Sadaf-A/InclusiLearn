const uploadPost = require('../models/uploadPostModel');

exports.uploadPost = async (userId, title, challenge, solution) => {
    try {
        const newPost = new uploadPost({
            userId,
            title,
            challenge,
            solution,
        })
    
        await newPost.save();
        console.log('post added successfully')
        } catch (err) {
            console.error(err);
        }
};