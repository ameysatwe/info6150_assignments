import CompanyImages from "../model/CompanyImages.js";

const createUser = async (req, res) => {
  //   console.log(req.body);
  const data = req.body;

  data.forEach(async (element) => {
    const CompanyData = new CompanyImages({
      company: element.company,
      image: element.image,
      featured: element.featured,
    });
    await CompanyData.save();
  });
  res.status(201).json();
};

export default createUser;
