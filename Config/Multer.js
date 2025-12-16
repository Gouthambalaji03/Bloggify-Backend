import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./Cloudinary.js";

// Cloudinary storage configuration for Multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {   
        folder: 'bloggify', // Folder name in Cloudinary
        allowed_formats: ['jpg', 'jpeg', 'png', 'gif'], // Allowed file formats
    },
});

// Multer middleware for file upload
export const upload = multer({ storage: storage });

export default upload