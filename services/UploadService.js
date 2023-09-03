const uploadPost = require('../models/uploadPostModel');

exports.uploadPost = async (title, challenge, solution) => {
    try {
        const newPost = new uploadPost({
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