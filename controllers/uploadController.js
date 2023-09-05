const formidable = require('formidable');
const UploadService = require('../services/UploadService');
const UserService = require('../services/UserService');
const fs = require('fs').promises;
const { S3 } = require('../config/aws'); 

exports.getUploadForm = (req, res) => {
  const name = UserService.getUsername(req.session.userId);
  res.render('upload', { name: name });
};

exports.uploadPost = async (req, res) => {
    try {
    const form = new formidable.IncomingForm();   
    form.parse(req, async (err, fields, files) => {
     if (err) {
       console.error(err);
       return res.status(500).json({ error: 'Error parsing form data' });
     }

     console.log(files);
 
     const file = files.file[0];
     const fileName = file.originalFilename;
     
     const fileData = await fs.readFile(file.filepath);

     const params = {
      Bucket: 'media-files-inclusi-learn',
      Key: fileName, 
      Body: fileData,
     };

     await S3.upload(params, (s3Err, data) =>  {
      if (err) {
        console.error('Error uploading file:', err);
      } else {
        const objectKey = data.Key;
      }
    })

     const { title, challenge, solution } = fields;

     console.log(title, challenge, solution);

     const userId = req.session.userId;
     
     await UploadService.uploadPost(userId, title[0], challenge[0], solution[0], objectKey);
 
     res.send('your post was uploaded!');
   });
}
catch (err) {
    res.status(400).json({ error: `upload failed: ${error.message}` });
}
};
