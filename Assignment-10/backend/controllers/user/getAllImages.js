import CompanyImages from "../../model/CompanyImages.js";

const getAllImages = async (req, res) => {
  const images = await CompanyImages.find({});

  return res.status(200).json(images);
};

export default getAllImages;
