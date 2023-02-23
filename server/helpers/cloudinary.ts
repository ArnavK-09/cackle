// imports
import { v2 } from "cloudinary";

// init cloudinary
const cloudinary = () => {
    // config
    const config = useRuntimeConfig();

    v2.config({
        cloud_name: config.CloudinaryCloudName,
        api_key: config.CloudinaryApiKey,
        api_secret: config.CloudinaryApiSecret,
    });

    return v2;
};

// upload to cloudinary
const uploadToCloudinary = (file: any) => {
    // promise
    return new Promise((resolve, reject) => {
        cloudinary().uploader.upload(file, (err: any, result: any) => {
            if (err) {
                // err
                reject(err);
            }
            // success
            resolve(result);
        });
    });
};

// exports
export default { uploadToCloudinary, cloudinary };
