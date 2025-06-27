import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary.js';

const storageUsuarios = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'usuarios',
    allowed_formats: ['jpg', 'jpeg', 'png'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }],
  },
});
const uploadUsuarios = multer({ storage: storageUsuarios });

export {uploadUsuarios};

