const formidable = require('formidable');
const UploadService = require('../services/UploadService');

exports.getUploadForm = (req, res) => {
  res.render('upload');
};

exports.uploadPost = async (req, res) => {
    try {
    const form = new formidable.IncomingForm();   
    form.parse(req, async (err, fields, files) => {
     if (err) {
       console.error(err);
       return res.status(500).json({ error: 'Error parsing form data' });
     }
 
     const { title, challenge, solution } = fields;

     console.log(title, challenge, solution);
     
     await UploadService.uploadPost(title[0], challenge[0], solution[0]);
 
     res.send('your post was uploaded!');
   });
}
catch (err) {
    res.status(400).json({ error: `upload failed: ${error.message}` });
}
};
