const MyPostService = require('../services/MyPostService');

exports.getmyPosts = async (req, res) => {
  console.log(req.session.userId);
  const userPosts = await MyPostService.getAllPosts(req.session.userId);
  console.log(userPosts);
  res.render('mypost', { userName: 'john doe', userPosts });
};
