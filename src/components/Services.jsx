import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const servicesData = [
    {
        id: 1,
        icon: "fas fa-clone",
        title: "Responsive Design",
        description:
            "Responsive design ensures your website looks and functions flawlessly on every device—whether it's a desktop, tablet, or smartphone. It automatically adjusts layout, images, and content to deliver a seamless and user-friendly experience, no matter the screen size.",
    },
    {
        id: 2,
        icon: "fas fa-snowflake",
        title: "Creative Design",
        description:
            "Creative design brings ideas to life through visually striking and innovative solutions. It combines originality, aesthetics, and purpose to craft designs that captivate your audience and leave a lasting impression.",
    },
    {
        id: 3,
        icon: "fas fa-plug",
        title: "SEO Optimized",
        description:
            "SEO optimized design ensures your website ranks higher on search engines by using clean code, fast loading speeds, and strategic keywords. It helps attract organic traffic and improves visibility to the right audience.",
    },
    {
        id: 4,
        icon: "fas fa-desktop",
        title: "Retina Ready",
        description:
            "Retina Ready design delivers ultra-sharp visuals and crisp graphics on high-resolution screens, ensuring your website looks stunning on every modern device.",
    },
    {
        id: 5,
        icon: "fas fa-trophy",
        title: "Brower Compatibility",
        description:
            "Browser compatibility ensures your website functions and appears consistently across all major web browsers, providing every user with a seamless experience—no matter how they access your site.",
    },
    {
        id: 6,
        icon: "fas fa-life-ring",
        title: "Customer Support",
        description:
            "Reliable customer support to assist you every step of the way—whether you need help, have questions, or face issues, our team is here to ensure a smooth and satisfying experience.",
    },
];



export default function Services() {
    return (
        <section id='services' className='block services-block' >
            <Container fluid>
                <div className='title-holder'>
                    <h2>Our Services</h2>
                    <div className='subtitle'>Services we provide</div>
                </div>
                <Row>
                    {
                        servicesData.map(services => {
                            return (
                                <Col sm={4} className='holder' key={services.id}>
                                    <div className='icon'> <i className={services.icon}></i></div>
                                    <h3>{services.title}</h3>
                                    <p>{services.description}</p>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>
        </section>
    );
}
