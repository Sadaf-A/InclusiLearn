const UserService = require('../services/UserService');

exports.getmyPosts = async (req, res) => {
  console.log(req.session.userId);
  const username = await UserService.getUsername(req.session.userId);
  res.render('mypost', { check: 'myPost', name: username});
};
