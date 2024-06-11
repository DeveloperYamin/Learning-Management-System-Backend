import { v2 as cloudinary, UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';
import sharp from 'sharp';
import { logger } from '../logger';
import config from '../../config/config';

cloudinary.config({
  cloud_name: config.cloudinary.cloudName,
  api_key: config.cloudinary.apiKey,
  api_secret: config.cloudinary.apiSecret,
});

export const uploadToCloudinary = async (file: Express.Multer.File): Promise<{ public_id: string; url: string }> => {
  try {
    if (!file) {
      throw new Error('No file provided');
    }
    const resizedBuffer: Buffer = await sharp(file.buffer).resize({ width: 800, height: 600 }).toBuffer();

    const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: 'auto',
          folder: 'courses',
        } as any,
        (err: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
          if (err) {
            logger.error('Cloudinary upload error:', err);
            reject(err);
          }
          if (!result) {
            logger.error('Cloudinary upload error: Result is undefined');
            reject(new Error('Cloudinary upload result is undefined'));
          } else {
            resolve(result);
          }
        }
      );
      uploadStream.end(resizedBuffer);
    });

    return {
      public_id: uploadResult.public_id,
      url: uploadResult.secure_url,
    };
  } catch (error) {
    logger.error('Error in uploadToCloudinary:', error);
    throw error;
  }
};

export const deleteFromCloudinary = async (public_id: string): Promise<void> => {
  try {
    if (!public_id) {
      throw new Error('No public_id provided');
    }
    await cloudinary.uploader.destroy(public_id);
  } catch (error) {
    logger.error('Error in deleteFromCloudinary:', error);
    throw error;
  }
};
