import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Navbar from "../Navbar/Navbar";
import "./CompanyShowcase.css";
import { useEffect, useState } from "react";
import companyService from "../../services/companyService";

export default function CustomImageList() {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    companyService.get("/getAll").then((res) => {
      setItemData(res.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="image-list">
        <ImageList sx={{ width: 500, height: "100vh" }}>
          {itemData.map((item) => (
            <ImageListItem key={item.image}>
              <img
                srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.image}?w=248&fit=crop&auto=format`}
                alt={item.company}
                loading="lazy"
              />
              <ImageListItemBar title={item.company} position="below" />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
}
