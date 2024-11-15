import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Navbar/Navbar";
import { jobPosts } from "../jobPosts";

export default function JobCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      <Navbar />
      <Slider {...settings}>
        {jobPosts.map((job) => (
          <Card key={job.id} sx={{ maxWidth: 345, margin: 2 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {job.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {job.description}
              </Typography>
              <Typography
                variant="caption"
                display="block"
                sx={{ color: "text.secondary" }}
              >
                {job.lastUpdated}
              </Typography>
              <Typography
                variant="caption"
                display="block"
                sx={{ color: "text.secondary" }}
              >
                Salary : {job.salary}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={job.applyLink}>
                Apply
              </Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </Slider>
    </>
  );
}
