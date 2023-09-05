const formidable = require('formidable');

exports.uploadPost = async (req, res) => {
    try {
    const form = new formidable.IncomingForm();   
    form.parse(req, async (err, fields, files) => {
     if (err) {
       console.error(err);
       return res.status(500).json({ error: 'Error parsing form data' });
     }
 
    const file = files.upload;
    const fileName = file.name;

    const readStream = fs

     res.send('your post was uploaded!');
   });
}
catch (err) {
    res.status(400).json({ error: `upload failed: ${error.message}` });
}
};
