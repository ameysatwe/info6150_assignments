import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Navbar/Navbar";

const jobPosts = [
  {
    id: 1,
    title: "Full Stack Developer",
    description:
      "Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.",
    lastUpdated: "Last updated 2 days ago",
    salary: "$80,000 - $100,000",
    applyLink: "https://example.com/apply/full-stack-developer",
  },
  {
    id: 2,
    title: "Digital Marketing Specialist",
    description:
      "Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.",
    lastUpdated: "Last updated 1 day ago",
    salary: "$80,000 - $180,000",
    applyLink: "https://example.com/apply/digital-marketing-specialist",
  },
  {
    id: 3,
    title: "Data Scientist",
    description:
      "Analyze large datasets and build predictive models. Must have expertise in machine learning and data analysis tools.",
    lastUpdated: "Last updated 3 days ago",
    salary: "$120,000 - $200,000",
    applyLink: "https://example.com/apply/data-scientist",
  },
  {
    id: 4,
    title: "UX/UI Designer",
    description:
      "Design intuitive user interfaces and engaging user experiences. Work closely with product managers and developers to bring design to life.",
    lastUpdated: "Last updated 4 days ago",
    salary: "$150,000 - $250,000",
    applyLink: "https://example.com/apply/ux-ui-designer",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    salary: "$200,000 - $300,000",
    description:
      "Ensure the reliability and scalability of our infrastructure. Work on cloud platforms and CI/CD pipelines.",
    lastUpdated: "Last updated 5 days ago",
    applyLink: "https://example.com/apply/devops-engineer",
  },
];

export default function JobCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
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
