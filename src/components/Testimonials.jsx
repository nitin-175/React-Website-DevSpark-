import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";


var testimonialsData = [
    {
        id: 1,
        name: "John Wills",
        description:
            "Working with this team has been a game-changer. Their attention to detail, communication, and dedication to quality exceeded our expectations. Truly a pleasure to collaborate with.",
        designation: "Manager",
    },
    {
        id: 2,
        name: "Jasmine Perry",
        description:
            "From start to finish, the experience was seamless. Their professionalism and clear understanding of project goals made the process efficient and stress-free. Highly recommended.",
        designation: "Accountant",
    },
    {
        id: 3,
        name: "Rocky Johnson",
        description:
            "This team consistently delivers top-notch results. Their innovative approach and commitment to excellence have played a crucial role in the growth and success of our business.",
        designation: "CEO",
    },
];



export default function Testimonials() {
    return (
        <section id="testimonials" className="testimonials-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Client Testimonials</h2>
                    <div className="subtitle">What client says about us</div>
                </div>
                <Carousel data-bs-theme="dark">
                    {testimonialsData.map((testimonials) => {
                        return (
                            <Carousel.Item key={testimonials.id}>
                                <blockquote>
                                    <p>{testimonials.description}</p>
                                    <cite>
                                        <span className="name">{testimonials.name}</span>
                                        <span className="designation">
                                            {testimonials.designation}
                                        </span>
                                    </cite>
                                </blockquote>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </Container>
        </section>
    )
}
