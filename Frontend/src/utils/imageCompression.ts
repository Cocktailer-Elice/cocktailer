import imageCompression from 'browser-image-compression';

export const getCompressedImage = async (image: File) => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 500,
    useWebWorker: true,
  };
  const compressedImage = await imageCompression(image, options);
  return compressedImage;
};
