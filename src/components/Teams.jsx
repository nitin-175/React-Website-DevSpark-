import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";


const teamsData = [
    {
        id: 1,
        image: "/Images/team1.jpg",
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "Gabriel Hart",
        designation: "CEO",
        description:
            "Leading the vision and strategy of our company, Gabriel brings years of experience and a passion for innovation to drive success.",
    },
    {
        id: 2,
        image: "/Images/team2.jpg",
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "David Antony",
        designation: "Manager",
        description:
            "David ensures every project is executed with precision and efficiency, aligning team goals with client expectations.",
    },
    {
        id: 3,
        image: "/Images/team3.jpg",
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "Nicholas Perry",
        designation: "UX Designer",
        description:
            "Nicholas focuses on creating intuitive and engaging user experiences that delight users and enhance usability.",
    },
    {
        id: 4,
        image: "/Images/team4.jpg",
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "Sarah Wills",
        designation: "Developer",
        description:
            "Sarah builds robust, high-performing web solutions with clean code, innovative ideas, and scalable architecture.",
    },
    {
        id: 5,
        image: "/Images/team5.jpg",
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "Sophia Pitt",
        designation: "Developer",
        description:
            "Sophia specializes in turning complex technical challenges into elegant and efficient web applications.",
    },
    {
        id: 6,
        image: "/Images/team6.jpg",
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "Taylor Lopez",
        designation: "Developer",
        description:
            "Taylor brings creativity and precision to front-end and back-end development, ensuring seamless functionality and design.",
    },
    {
        id: 7,
        image: "/Images/team7.jpg",
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "Ryan Giggs",
        designation: "Content Writer",
        description:
            "Ryan crafts compelling content that captures brand voice, engages audiences, and boosts digital presence.",
    },
    {
        id: 8,
        image: "/Images/team8.jpg",
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "David Smith",
        designation: "SEO Expert",
        description:
            "David optimizes every piece of content and code to improve visibility, drive traffic, and elevate search engine rankings.",
    },
];



export default function Teams() {
    return (
        <section id="teams" className="block teams-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Our teams</h2>
                    <div className="subtitle">Some of our experts</div>
                </div>

                <Row>
                    {teamsData.map((teams) => {
                        return (
                            <Col sm={3} key={teams.id}>
                                <div className="image">
                                    <Image src={teams.image} />

                                    <div className="overlay">
                                        <div className="socials">
                                            <ul>
                                                <li>
                                                    <a href={teams.fbLink}>
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={teams.twitterLink}>
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={teams.linkedinLink}>
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="content">
                                    <h3>{teams.name}</h3>
                                    <span className="designation">{teams.designation}</span>
                                    <p>{teams.description}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    )
}
