const uploadPost = require('../models/UploadPostModel');

exports.uploadPost = async (userId, title, challenge, solution, objectKey) => {
    try {
        const newPost = new uploadPost({
            userId,
            title,
            challenge,
            solution,
            objectKey,
        })
    
        await newPost.save();
        console.log('post added successfully')
        } catch (err) {
            console.error(err);
        }
};