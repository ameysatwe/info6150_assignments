import Navbar from "../Navbar/Navbar";
import "./CompanyShowcase.css";
import { useEffect, useState } from "react";
import companyService from "../../services/companyService";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

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

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          m: -2,
        }}
      >
        {itemData.map((item) => (
          <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardMedia
              sx={{ height: 200, width: "fitContent" }}
              image={item.image}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestiae minus sequi in corrupti alias voluptatum deleniti
                tenetur labore fuga, mollitia rem nam itaque? Quasi labore illo
                facilis deleniti animi officia!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Apply</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
        ;
      </Box>
    </>
  );
}
