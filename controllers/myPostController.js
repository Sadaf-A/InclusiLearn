const UserService = require('../services/UserService');

exports.getmyPosts = async (req, res) => {
  console.log(req.session.userId);
  const username = await UserService.getUsername(req.session.userId);
  res.render('upload', { check: 'myPost', name: username});
};
