import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


const blogData = [
  {
    id: 1,
    image: "/Images/blog1.jpg",
    time: "15 Jan 2025",
    title: "Coffee Lovers",
    description:
      "Explore the growing community of coffee enthusiasts and how their passion brews creativity in daily life.",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: "/Images/blog2.jpg",
    time: "10 Mar 2025",
    title: "Tips for UI Design",
    description:
      "Master the essentials of modern UI design—from intuitive layouts to accessible color schemes and smooth interactions.",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: "/Images/blog3.jpg",
    time: "07 Jul 2025",
    title: "Beautiful Day",
    description:
      "Celebrate the simple joys of a sunny day and how embracing nature can fuel mindfulness and creativity.",
    link: "https://www.twitter.com",
  },
];




export default function Blog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>latest from blog</h2>
          <div className="subtitle"> get our latest news from blog</div>
        </div>
        <Row>
          {blogData.map((blog) => {
            return (
              <Col sm={4} key={blog.id}>
                <div className="holder">
                  <Card>
                    <Card.Img variant="top" src={blog.image} />
                    <Card.Body>
                      <time>{blog.time}</time>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                      <a href={blog.link} className="btn btn-primary">
                        Read More <i className="fas fa-chevron-right"></i>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
