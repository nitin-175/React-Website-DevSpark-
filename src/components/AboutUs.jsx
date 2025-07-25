import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from '/public/Images/img1.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';



export default function AboutUs() {

    const html = 80;
    const responsive = 95;
    const photoshop = 60;

    return (
        <section id='about' className='block about-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>About Us</h2>
                    <div className='subtitle'>learn more about us</div>
                </div>
                <Row>
                    <Col><Image src={img1} /></Col>
                    <Col><p>
                        We are a passionate team of designers, developers, and creatives dedicated to building exceptional digital experiences. With a focus on innovation and quality, we craft websites, applications, and brands that not only look great but perform flawlessly. Our journey began with a simple idea—to help businesses grow through smart, user-friendly design.
                    </p>
                        <p>
                            Our commitment to design excellence has stood the test of time, evolving with technology while staying true to our core values. From early print to the digital age, we've adapted to industry changes and embraced innovation—delivering creative solutions that are both timeless and forward-thinking.
                        </p>

                        <div className="progress-block">
                            <h4>HTML / CSS / JAVASCRIPT</h4>
                            <ProgressBar animated now={html} label={`${html}%`} />
                        </div>
                        <div className="progress-block">
                            <h4>Responsive</h4>
                            <ProgressBar animated now={responsive} label={`${responsive}%`} />
                        </div>
                        <div className="progress-block">
                            <h4>Photoshop</h4>
                            <ProgressBar animated now={photoshop} label={`${photoshop}%`} />
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    );
}
