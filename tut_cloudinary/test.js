var cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: 'sample', 
  api_key: '874837483274837', 
  api_secret: 'a676b67565c6767a6767d6767f676fe1' 
});

var image_url = 'http://upload.wikimedia.org/wikipedia/commons/5/5b/Ultraviolet_image_of_the_Cygnus_Loop_Nebula_crop.jpg';

cloudinary.uploader.upload(image_url, function(result) { 
  console.log(result) 
});