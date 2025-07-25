import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function ContactUs() {
    return (
        <section id="contact" className="block contact-block" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
            <Container fluid>
                <div className="title-holder text-center mb-5">
                    <h2 className="mb-2">Contact Us</h2>
                    <div className="subtitle text-muted">Get connected with us</div>
                </div>
                <Form className="contact-form">
                    <Row className="mb-3">
                        <Col sm={12} md={4} className="mb-3 mb-md-0">
                            <Form.Control
                                type="text"
                                placeholder="Full Name"
                                required
                                aria-label="Full name"
                            />
                        </Col>
                        <Col sm={12} md={4} className="mb-3 mb-md-0">
                            <Form.Control
                                type="email"
                                placeholder="Email Address"
                                required
                                aria-label="Email"
                            />
                        </Col>
                        <Col sm={12} md={4}>
                            <Form.Control
                                type="tel"
                                placeholder="Contact Number"
                                required
                                aria-label="Phone number"
                            />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col sm={12}>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Enter your message here..."
                                required
                                aria-label="Message"
                            />
                        </Col>
                    </Row>
                    <div className="btn-holder text-center">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Container>

            {/* Google Map */}
            <div className="google-map my-5">
                <h5 className="text-center mb-3">Our Location</h5>
                <iframe
                    title="Company Location Map"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Varanasi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Contact Info */}
            <Container fluid>
                <div className="contact-info text-center">
                    <ul className="list-unstyled mb-0">
                        <li className="mb-2">
                            <i className="fas fa-envelope me-2 text-primary"></i>
                            <a href="mailto:nitinkumarmaurya457@gmail.com" style={{ textDecoration: "none", color: "#333" }}>
                                nitinkumarmaurya457@gmail.com
                            </a>
                        </li>
                        <li className="mb-2">
                            <i className="fas fa-phone me-2 text-primary"></i>
                            <a href="tel:+918545966035" style={{ textDecoration: "none", color: "#333" }}>
                                +91 8545966035
                            </a>
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                            Varanasi, Uttar Pradesh
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
}
