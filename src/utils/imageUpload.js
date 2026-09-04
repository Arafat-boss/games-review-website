import axios from "axios";

const IMGBB_API_KEY =
  import.meta.env.VITE_IMGBB_API_KEY || "caf32c4a76af5b4b63c76540d24d9575";

/**
 * Upload an image file directly to ImgBB API
 * @param {File} imageFile - The file object from <input type="file" />
 * @returns {Promise<string>} - The hosted display URL of the uploaded image
 */
export const uploadImageToImgBB = async (imageFile) => {
  if (!imageFile) throw new Error("No image file provided");

  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await axios.post(
    `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  if (response.data && response.data.data) {
    return response.data.data.display_url || response.data.data.url;
  } else {
    throw new Error("Failed to retrieve image URL from ImgBB");
  }
};
